import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

const LatestBlogs = () => {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-white overflow-hidden" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Appliance <span className="text-amber-600">Intelligence.</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Expert insights and professional guides to help you maintain and optimize your home's most essential systems.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-amber-600 transition-colors group"
            >
              Explore Full Library <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Blog Grid - Clean SaaS Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Link 
              key={idx} 
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

                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center text-amber-600 text-[11px] font-black uppercase tracking-widest gap-2">
                   Read Analysis <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
