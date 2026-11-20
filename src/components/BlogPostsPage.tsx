import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  Plus,
  Image as ImageIcon,
  FileText,
  Upload,
  MapPin,
  Calendar,
  User,
  Trash2,
  X,
  Search,
  Send,
  CheckCircle2,
  Link2,
} from 'lucide-react';
import { BlogPost, PostType, loadBlogPosts, saveBlogPosts } from '../data/blogPosts';
import { Language } from '../data/translations';
import { SITE_CONFIG } from '../data/siteConfig';

interface BlogPostsPageProps {
  lang: Language;
  onBackHome: () => void;
  onOpenBooking: () => void;
}

const CATEGORIES = [
  '360° Virtual Tour',
  'Google Street View',
  'Luxury Hospitality',
  'Luxury Retail & Auto',
  'Website & SEO',
  'Event & Banquet',
];

const CITIES = ['Chandigarh', 'Amritsar', 'Jalandhar', 'Ludhiana', 'Mohali', 'Punjab'];

async function compressImageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read image file.'));
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const img = new Image();
      img.onerror = () => reject(new Error('Invalid image format.'));
      img.onload = () => {
        const maxWidth = 1400;
        const scale = img.width > maxWidth ? maxWidth / img.width : 1;
        const width = Math.round(img.width * scale);
        const height = Math.round(img.height * scale);

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(dataUrl);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  });
}

export const BlogPostsPage: React.FC<BlogPostsPageProps> = ({
  lang,
  onBackHome,
  onOpenBooking,
}) => {
  const [posts, setPosts] = useState<BlogPost[]>(() => loadBlogPosts());
  const [filterType, setFilterType] = useState<'all' | PostType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isComposerOpen, setIsComposerOpen] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Composer form state
  const [postType, setPostType] = useState<PostType>('blog');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [city, setCity] = useState('Chandigarh');
  const [author, setAuthor] = useState('');
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [uploadedPreview, setUploadedPreview] = useState('');
  const [content, setContent] = useState('');
  const [formError, setFormError] = useState('');
  const [publishNotice, setPublishNotice] = useState('');
  const [isProcessingImg, setIsProcessingImg] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeImage = uploadedPreview || imageUrlInput.trim();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setFormError(
        lang === 'hi'
          ? 'कृपया केवल वैध इमेज फ़ाइल (JPG, PNG, WEBP) चुनें।'
          : 'Please choose a valid image file (JPG, PNG, WEBP).'
      );
      return;
    }

    setFormError('');
    setIsProcessingImg(true);
    try {
      const compressed = await compressImageFile(file);
      setUploadedPreview(compressed);
      setImageUrlInput('');
    } catch {
      setFormError(
        lang === 'hi' ? 'इमेज लोड करने में समस्या आई।' : 'Unable to process the selected image.'
      );
    } finally {
      setIsProcessingImg(false);
    }
  };

  const handleClearImage = () => {
    setUploadedPreview('');
    setImageUrlInput('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setPublishNotice('');

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle) {
      setFormError(
        lang === 'hi' ? 'कृपया पोस्ट का शीर्षक दर्ज करें।' : 'Please enter a title for your post.'
      );
      return;
    }

    if (postType === 'image' && !activeImage) {
      setFormError(
        lang === 'hi'
          ? 'इमेज पोस्ट के लिए कृपया फोटो अपलोड करें या इमेज लिंक डालें।'
          : 'Please upload an image or paste an image URL for an Image Post.'
      );
      return;
    }

    if (postType === 'blog' && !trimmedContent) {
      setFormError(
        lang === 'hi'
          ? 'कृपया ब्लॉग का विवरण या लेख लिखें।'
          : 'Please write your blog content before publishing.'
      );
      return;
    }

    const newPost: BlogPost = {
      id: `post-${Date.now()}`,
      type: postType,
      title: trimmedTitle,
      category,
      city,
      author: author.trim() || SITE_CONFIG.brandName,
      createdAt: new Date().toISOString(),
      imageUrl: activeImage || undefined,
      content:
        trimmedContent ||
        (lang === 'hi'
          ? `${city} से ${category} शोकेस इमेज।`
          : `${category} visual showcase from ${city}.`),
      isUserCreated: true,
    };

    const updated = [newPost, ...posts];
    const saved = saveBlogPosts(updated);
    if (!saved) {
      setFormError(
        lang === 'hi'
          ? 'ब्राउज़र स्टोरेज भर गया है। कृपया पुरानी पोस्ट हटाएं या छोटी इमेज चुनें।'
          : 'Browser storage limit reached. Remove older posts or use a smaller image/URL.'
      );
      return;
    }

    setPosts(updated);
    setTitle('');
    setContent('');
    setAuthor('');
    handleClearImage();
    setPublishNotice(
      lang === 'hi' ? 'आपकी पोस्ट सफलतापूर्वक प्रकाशित हो गई!' : 'Your post is live on the feed!'
    );
    setTimeout(() => setPublishNotice(''), 4000);
  };

  const handleDeletePost = (id: string) => {
    const updated = posts.filter((p) => p.id !== id);
    setPosts(updated);
    saveBlogPosts(updated);
    if (selectedPost?.id === id) {
      setSelectedPost(null);
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesType = filterType === 'all' || post.type === filterType;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.content.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q) ||
      post.city.toLowerCase().includes(q);
    return matchesType && matchesSearch;
  });

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return '';
    }
  };

  return (
    <section className="py-10 md:py-16 bg-warm-dots min-h-[75vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar & Navigation Back */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#ebd7c2]">
          <div>
            <button
              type="button"
              onClick={onBackHome}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#d94819] mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{lang === 'hi' ? 'होम पेज पर वापस जाएं' : 'Back to 360° Showcase Home'}</span>
            </button>

            <div className="text-xs font-extrabold tracking-widest text-[#d94819] uppercase brand-font mb-2">
              {lang === 'hi' ? 'स्मार्ट व्यू लैब्स जर्नल और गैलरी' : 'SMART VIEW LABS JOURNAL & GALLERY'}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
              {lang === 'hi' ? 'ब्लॉग और इमेज पोस्ट्स' : 'Blog Articles & Image Showcase'}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              {lang === 'hi'
                ? 'यहाँ नए ब्लॉग लेख लिखें या अपने प्रोजेक्ट, शोरूम, होटल और बैंक्वेट की तस्वीरें सीधे अपलोड व शेयर करें।'
                : 'Publish a new blog story or upload showcase images of 360° tours, showrooms, hotels, banquets, and digital campaigns.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsComposerOpen((prev) => !prev)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#d94819] hover:bg-[#c23d13] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all whitespace-nowrap shrink-0"
          >
            <Plus className={`w-4 h-4 transition-transform ${isComposerOpen ? 'rotate-45' : ''}`} />
            <span>
              {isComposerOpen
                ? lang === 'hi'
                  ? 'फॉर्म बंद करें'
                  : 'Hide Post Composer'
                : lang === 'hi'
                  ? 'नया ब्लॉग / इमेज पोस्ट करें'
                  : 'Create Blog / Image Post'}
            </span>
          </button>
        </div>

        {/* Post Composer Card */}
        {isComposerOpen && (
          <div className="mb-12 rounded-3xl bg-white border border-[#ebd7c2] shadow-lg overflow-hidden">
            <div className="px-6 sm:px-8 py-5 bg-[#faf4eb] border-b border-[#ebd7c2]/80 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                  {lang === 'hi' ? 'नई पोस्ट बनाएं' : 'Publish a New Blog or Image Post'}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === 'hi'
                    ? 'फोटो अपलोड करें या लिंक जोड़ें — पोस्ट तुरंत नीचे फीड में दिखाई देगी।'
                    : 'Upload an image from your device or paste an image URL — appears immediately in the feed below.'}
                </p>
              </div>

              {/* Post Type Switch */}
              <div className="inline-flex p-1 rounded-full bg-white border border-[#ebd7c2] shadow-2xs">
                <button
                  type="button"
                  onClick={() => setPostType('blog')}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    postType === 'blog'
                      ? 'bg-[#0f172a] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'ब्लॉग पोस्ट' : 'Blog Article'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPostType('image')}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    postType === 'image'
                      ? 'bg-[#0f172a] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'इमेज पोस्ट' : 'Image Post'}</span>
                </button>
              </div>
            </div>

            <form onSubmit={handlePublish} className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column: Text Fields */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {postType === 'blog'
                        ? lang === 'hi'
                          ? 'ब्लॉग शीर्षक *'
                          : 'Blog Title *'
                        : lang === 'hi'
                          ? 'इमेज शीर्षक / कैप्शन *'
                          : 'Image Headline *'}
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder={
                        postType === 'blog'
                          ? 'e.g. Why 360° Virtual Tours Convert NRI Wedding Clients Faster'
                          : 'e.g. Grand Ballroom 360° Shoot in Ludhiana'
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#d94819] text-sm bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {lang === 'hi' ? 'श्रेणी' : 'Category'}
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#d94819] text-sm bg-white"
                      >
                        {CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {lang === 'hi' ? 'शहर' : 'City'}
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#d94819] text-sm bg-white"
                      >
                        {CITIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {lang === 'hi' ? 'लेखक / ब्रांड' : 'Author / Brand'}
                      </label>
                      <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Smart View Labs"
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#d94819] text-sm bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {postType === 'blog'
                        ? lang === 'hi'
                          ? 'ब्लॉग सामग्री *'
                          : 'Blog Content *'
                        : lang === 'hi'
                          ? 'इमेज विवरण (वैकल्पिक)'
                          : 'Photo Description (Optional)'}
                    </label>
                    <textarea
                      rows={postType === 'blog' ? 5 : 3}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder={
                        postType === 'blog'
                          ? 'Share insights, project results, SEO tips, or a case study...'
                          : 'Add notes about the venue, shoot lighting, or client story...'
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#d94819] text-sm bg-white resize-y"
                    />
                  </div>
                </div>

                {/* Right Column: Image Upload & Preview */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {postType === 'image'
                        ? lang === 'hi'
                          ? 'इमेज अपलोड करें या लिंक डालें *'
                          : 'Upload Image or Paste URL *'
                        : lang === 'hi'
                          ? 'कवर इमेज (वैकल्पिक)'
                          : 'Cover Image (Optional)'}
                    </label>

                    {activeImage ? (
                      <div className="relative rounded-2xl overflow-hidden border border-[#ebd7c2] bg-slate-900 aspect-16/10">
                        <img
                          src={activeImage}
                          alt="Post preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={handleClearImage}
                          className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-950/75 text-white hover:bg-[#d94819] transition-colors"
                          aria-label="Remove selected image"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full aspect-16/10 rounded-2xl border-2 border-dashed border-[#d9b899] bg-[#fdfaf6] hover:bg-[#faf4eb] hover:border-[#d94819] transition-all flex flex-col items-center justify-center p-6 text-center cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-[#fcece6] text-[#d94819] flex items-center justify-center mb-3">
                          <Upload className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-bold text-slate-800">
                          {isProcessingImg
                            ? lang === 'hi'
                              ? 'इमेज तैयार हो रही है...'
                              : 'Optimizing image...'
                            : lang === 'hi'
                              ? 'डिवाइस से फोटो चुनें'
                              : 'Click to Upload Image from Device'}
                        </span>
                        <span className="text-xs text-slate-500 mt-1">
                          JPG, PNG, WEBP · Auto-optimized for fast loading
                        </span>
                      </button>
                    )}

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-1.5">
                      <Link2 className="w-3.5 h-3.5" />
                      <span>
                        {lang === 'hi'
                          ? 'या सीधे इमेज URL पेस्ट करें:'
                          : 'Or paste a direct image URL:'}
                      </span>
                    </div>
                    <input
                      type="url"
                      value={imageUrlInput}
                      onChange={(e) => {
                        setImageUrlInput(e.target.value);
                        if (e.target.value) setUploadedPreview('');
                      }}
                      placeholder="https://example.com/photo.jpg"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#d94819] text-xs bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Status & Publish Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="min-h-5">
                  {formError && (
                    <p className="text-xs font-semibold text-red-600">{formError}</p>
                  )}
                  {publishNotice && (
                    <p className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{publishNotice}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isProcessingImg}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0f172a] hover:bg-[#d94819] disabled:opacity-60 text-white text-sm font-bold shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {postType === 'blog'
                      ? lang === 'hi'
                        ? 'ब्लॉग प्रकाशित करें'
                        : 'Publish Blog Post'
                      : lang === 'hi'
                        ? 'इमेज पोस्ट करें'
                        : 'Publish Image Post'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { id: 'all', label: lang === 'hi' ? 'सभी पोस्ट्स' : 'All Posts' },
                { id: 'blog', label: lang === 'hi' ? 'ब्लॉग लेख' : 'Blog Articles' },
                { id: 'image', label: lang === 'hi' ? 'इमेज पोस्ट्स' : 'Image Posts' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterType(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  filterType === tab.id
                    ? 'bg-[#0f172a] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-[#ebd7c2] hover:border-[#d94819]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'hi' ? 'शीर्षक या शहर खोजें...' : 'Search posts, cities, topics...'}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-[#ebd7c2] bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d94819]"
            />
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="rounded-3xl bg-white border border-[#ebd7c2] p-12 text-center shadow-xs">
            <p className="text-base font-semibold text-slate-700">
              {lang === 'hi'
                ? 'कोई पोस्ट नहीं मिली। ऊपर दिए गए फॉर्म से नई पोस्ट बनाएं।'
                : 'No matching posts yet. Use the composer above to publish a blog or image.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-3xl bg-white border border-[#ebd7c2] hover:border-[#d94819]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {post.imageUrl ? (
                    <button
                      type="button"
                      onClick={() => setSelectedPost(post)}
                      className="relative aspect-16/10 w-full overflow-hidden bg-slate-900 block text-left"
                    >
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20" />
                      <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-slate-900 shadow-xs">
                        {post.type === 'blog' ? 'Blog' : 'Image'} · {post.category}
                      </span>
                    </button>
                  ) : (
                    <div className="px-6 pt-6">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-[#faf4eb] text-[#d94819] border border-[#ebd7c2]">
                        Blog · {post.category}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-500 mb-2.5">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#d94819]" />
                        {post.city}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {formatDate(post.createdAt)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-serif text-slate-900 leading-snug group-hover:text-[#d94819] transition-colors">
                      <button
                        type="button"
                        onClick={() => setSelectedPost(post)}
                        className="text-left"
                      >
                        {post.title}
                      </button>
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.content}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 truncate">
                    <User className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{post.author}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {post.isUserCreated && (
                      <button
                        type="button"
                        onClick={() => handleDeletePost(post.id)}
                        className="p-2 rounded-full text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="Delete post"
                        aria-label="Delete post"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedPost(post)}
                      className="px-4 py-1.5 rounded-full bg-[#faf4eb] hover:bg-[#d94819] text-slate-900 hover:text-white text-xs font-bold transition-colors"
                    >
                      {post.type === 'blog'
                        ? lang === 'hi'
                          ? 'पूरा पढ़ें'
                          : 'Read Post'
                        : lang === 'hi'
                          ? 'इमेज देखें'
                          : 'View Image'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Full Post / Lightbox Reader Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#fdfaf6] rounded-3xl border border-[#ebd7c2] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 bg-white border-b border-[#ebd7c2] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#d94819] uppercase tracking-wider">
                <span>{selectedPost.type === 'blog' ? 'Blog Article' : 'Image Showcase'}</span>
                <span>·</span>
                <span className="text-slate-600">{selectedPost.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Close post viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8 space-y-5">
              {selectedPost.imageUrl && (
                <div className="rounded-2xl overflow-hidden bg-slate-900 border border-[#ebd7c2]">
                  <img
                    src={selectedPost.imageUrl}
                    alt={selectedPost.title}
                    className="w-full max-h-[420px] object-cover"
                  />
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#d94819]" />
                  {selectedPost.city}
                </span>
                <span className="inline-flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  {selectedPost.author}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {formatDate(selectedPost.createdAt)}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 leading-tight">
                {selectedPost.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                {selectedPost.content}
              </p>

              <div className="pt-4 border-t border-[#ebd7c2]/80 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-medium">
                  Want a similar 360° tour or digital showcase for your venue?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPost(null);
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#d94819] hover:bg-[#c23d13] text-white text-xs font-bold shadow-sm transition-colors"
                >
                  Book Free 360° Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
