import { ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    const encode = (data) => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", email })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Home <span className="text-amber-600">Insights.</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Professional guidance and essential care guides for maintaining peak household system performance.
          </p>
        </div>

        {/* Blog Grid - SaaS Clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`} 
              className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-amber-200"
            >
              {/* Card Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  loading="lazy" 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                   <div className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-black text-amber-600 uppercase tracking-widest shadow-sm border border-white/50">
                      {post.category || "Insight"}
                   </div>
                </div>
              </div>
              
              {/* Card Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold mb-4 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-amber-500" /> {post.date}</span>
                  <div className="w-1 h-1 rounded-full bg-gray-200" />
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-amber-500" /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center text-amber-600 text-[11px] font-black uppercase tracking-widest gap-2">
                   Read Analysis <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Section - SaaS Focus */}
        <div className="bg-gray-900 rounded-[2rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Stay <span className="text-amber-500">Updated.</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium mb-10 max-w-xl mx-auto">
              Register for direct information on professional appliance care and system stability.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com" 
                className="flex-1 bg-white border-transparent px-6 py-4 rounded-xl text-gray-900 font-semibold outline-none focus:ring-4 focus:ring-amber-600/50 transition-all"
              />
              <button 
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-amber-600 text-white font-bold text-sm rounded-xl hover:bg-white hover:text-gray-900 transition-all shadow-lg active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
            
            {isSuccess && (
              <div className="mt-6 flex items-center justify-center gap-2 text-amber-500">
                <CheckCircle2 size={16} />
                <span className="text-sm font-bold">Successfully enrolled!</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
