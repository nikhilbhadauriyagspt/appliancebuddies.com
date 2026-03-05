import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../blogData';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, ChevronLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!post) {
    return (
      <div className="min-h-screen pt-44 flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-6">Article Not Found</h2>
        <Link to="/blog" className="text-amber-600 font-bold hover:underline flex items-center gap-2">
          <ArrowLeft size={18} /> Return to Library
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 relative">

      {/* Success Toast */}
      <div className={`fixed bottom-10 right-10 z-[100] transition-all duration-500 transform ${copied ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="bg-gray-900 text-white p-5 rounded-2xl shadow-2xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-gray-950 shadow-lg">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <p className="text-sm font-bold leading-none">Link Copied</p>
            <p className="text-[11px] text-gray-400 font-medium mt-1.5 uppercase tracking-widest">Ready to share.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Article Navigation & Meta */}
        <div className="mb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-amber-600 transition-all mb-10 group">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="px-3 py-1 bg-amber-50 rounded-full border border-amber-100">
               <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">
                 {post.category || "Insight"}
               </span>
            </div>
            <span className="text-gray-400 text-sm font-medium flex items-center gap-1.5">
               <Clock size={16} /> {post.readTime} Read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-10">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                <img loading="lazy" src={`https://i.pravatar.cc/150?u=${post.author.split(' ')[0]}`} alt={post.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-0.5">{post.author}</p>
                <p className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                  <Calendar size={14} className="text-amber-600" /> {post.date}
                </p>
              </div>
            </div>
            <button 
              onClick={handleShare}
              className="px-4 py-2 rounded-lg bg-gray-50 flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-colors border border-gray-200"
            >
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>

        {/* 2. Immersive Visual Area */}
        <div className="mb-16">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <img loading="lazy" src={post.image} alt={post.title} className="w-full h-auto aspect-[16/9] object-cover" />
          </div>
        </div>

        {/* 3. Core Content Infrastructure */}
        <div className="mb-24">
          <div 
            className="prose prose-lg max-w-none text-gray-600 leading-relaxed blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Post Footer Callout */}
          <div className="mt-20 pt-16 border-t border-gray-100 text-center">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Need expert help?</h3>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">
              If you're experiencing these issues and need professional assistance, our certified team is ready to help.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-bold text-sm rounded-xl hover:bg-amber-700 transition-all shadow-lg active:scale-95 group">
              Schedule Service <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Global Style Engine for Article Content */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h3 {
          font-size: 1.875rem;
          font-weight: 800;
          color: #111827;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.025em;
          line-height: 1.2;
        }
        .blog-content h4 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
        }
        .blog-content p {
          margin-bottom: 1.75rem;
          line-height: 1.8;
          font-size: 1.125rem;
        }
        .blog-content ul {
          margin-bottom: 2.5rem;
          list-style-type: none;
          background: #f9fafb;
          padding: 2rem 2.5rem;
          border-radius: 1rem;
          border: 1px solid #f3f4f6;
        }
        .blog-content li {
          margin-bottom: 0.75rem;
          padding-left: 1.75rem;
          position: relative;
          font-size: 1.125rem;
          color: #4b5563;
        }
        .blog-content li::before {
          content: "";
          width: 6px;
          height: 6px;
          background-color: #d97706; /* amber-600 */
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 0.75rem;
        }
        .blog-content strong {
          color: #111827;
          font-weight: 700;
        }
      `}} />
    </div>
  );
};

export default BlogDetail;
