import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { TourSpace } from '../data/tourSpaces';
import { Language } from '../data/translations';

interface ThreeSixtyViewerProps {
  space: TourSpace;
  lang: Language;
}

export const ThreeSixtyViewer: React.FC<ThreeSixtyViewerProps> = ({
  space,
  lang,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  // Three.js instances
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereMeshRef = useRef<THREE.Mesh | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Camera angles (degrees)
  const lonRef = useRef<number>(0);
  const latRef = useRef<number>(0);
  const targetLonRef = useRef<number>(0);
  const targetLatRef = useRef<number>(0);

  // Zoom / FOV
  const fovRef = useRef<number>(75);
  const targetFovRef = useRef<number>(75);

  // Interaction tracking
  const isUserInteractingRef = useRef<boolean>(false);
  const onPointerDownPointerXRef = useRef<number>(0);
  const onPointerDownPointerYRef = useRef<number>(0);
  const onPointerDownLonRef = useRef<number>(0);
  const onPointerDownLatRef = useRef<number>(0);
  const lastTouchDistanceRef = useRef<number>(0);

  // Loading state
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initialize Three.js scene
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    // Reset camera angles for new space
    lonRef.current = 0;
    latRef.current = 0;
    targetLonRef.current = 0;
    targetLatRef.current = 0;
    targetFovRef.current = 75;
    fovRef.current = 75;

    setIsLoading(true);

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(fovRef.current, width / height, 1, 1100);
    cameraRef.current = camera;

    // 3. Sphere geometry for 360 panorama
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    // Invert the geometry on the x-axis so that all faces point inward
    geometry.scale(-1, 1, 1);

    // 4. Load equirectangular texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      space.image,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphereMesh = new THREE.Mesh(geometry, material);
        scene.add(sphereMesh);
        sphereMeshRef.current = sphereMesh;
        setIsLoading(false);
      },
      undefined,
      (err) => {
        console.error('Error loading 360 texture:', err);
        // Fallback procedural canvas texture so viewer still operates
        const canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const grad = ctx.createLinearGradient(0, 0, 2048, 1024);
          grad.addColorStop(0, '#1e293b');
          grad.addColorStop(0.5, '#0f172a');
          grad.addColorStop(1, '#334155');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, 2048, 1024);
          ctx.fillStyle = '#f97316';
          ctx.font = 'bold 48px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(space.title, 1024, 512);
        }
        const fallbackTex = new THREE.CanvasTexture(canvas);
        const material = new THREE.MeshBasicMaterial({ map: fallbackTex });
        const sphereMesh = new THREE.Mesh(geometry, material);
        scene.add(sphereMesh);
        sphereMeshRef.current = sphereMesh;
        setIsLoading(false);
      }
    );

    // 5. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    rendererRef.current = renderer;

    // Clear previous children
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 6. Animation / Render loop with smooth auto-rotation
    const render = () => {
      // Gentle auto-rotation when user is not dragging
      if (!isUserInteractingRef.current) {
        targetLonRef.current += 0.08;
      }

      // Smooth damping interpolation
      lonRef.current += (targetLonRef.current - lonRef.current) * 0.1;
      latRef.current += (targetLatRef.current - latRef.current) * 0.1;
      fovRef.current += (targetFovRef.current - fovRef.current) * 0.12;

      // Clamp lat to prevent upside-down flip
      latRef.current = Math.max(-85, Math.min(85, latRef.current));
      targetLatRef.current = Math.max(-85, Math.min(85, targetLatRef.current));

      const phi = THREE.MathUtils.degToRad(90 - latRef.current);
      const theta = THREE.MathUtils.degToRad(lonRef.current);

      const targetX = 500 * Math.sin(phi) * Math.cos(theta);
      const targetY = 500 * Math.cos(phi);
      const targetZ = 500 * Math.sin(phi) * Math.sin(theta);

      camera.fov = fovRef.current;
      camera.updateProjectionMatrix();
      camera.lookAt(targetX, targetY, targetZ);

      renderer.render(scene, camera);

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    render();

    // Resize handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
    };
  }, [space]);

  // Pointer drag handlers (Mouse and Touch)
  const handlePointerDown = (e: React.PointerEvent) => {
    isUserInteractingRef.current = true;
    onPointerDownPointerXRef.current = e.clientX;
    onPointerDownPointerYRef.current = e.clientY;
    onPointerDownLonRef.current = lonRef.current;
    onPointerDownLatRef.current = latRef.current;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isUserInteractingRef.current) return;
    const deltaX = (e.clientX - onPointerDownPointerXRef.current) * 0.22;
    const deltaY = (e.clientY - onPointerDownPointerYRef.current) * 0.22;
    targetLonRef.current = onPointerDownLonRef.current - deltaX;
    targetLatRef.current = onPointerDownLatRef.current + deltaY;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isUserInteractingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  // Touch pinch to zoom on mobile
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (lastTouchDistanceRef.current > 0) {
        const diff = dist - lastTouchDistanceRef.current;
        targetFovRef.current = Math.max(35, Math.min(100, targetFovRef.current - diff * 0.2));
      }
      lastTouchDistanceRef.current = dist;
    }
  };

  const handleTouchEnd = () => {
    lastTouchDistanceRef.current = 0;
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    targetFovRef.current = Math.max(35, Math.min(100, targetFovRef.current + e.deltaY * 0.05));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-slate-950 select-none group border border-slate-200/50 h-[380px] sm:h-[460px] md:h-[540px] lg:h-[600px]"
    >
      {/* Clean Three.js 360 Canvas Container without any overlays or buttons */}
      <div
        ref={canvasContainerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      />

      {/* Loading Shimmer while texture loads */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center text-white z-30 transition-opacity">
          <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-3" />
          <p className="text-sm font-semibold tracking-wide text-amber-200">
            {lang === 'hi' ? '360° स्पेस लोड हो रहा है...' : 'Loading 360° Space...'}
          </p>
        </div>
      )}
    </div>
  );
};
