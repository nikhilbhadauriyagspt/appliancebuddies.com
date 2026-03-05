import { Mail, Send, ArrowRight, MapPin, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      e.target.reset();
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden" id="contact-hub">
      
      {/* Success Toast */}
      <div className={`fixed bottom-10 right-10 z-[100] transition-all duration-500 transform ${isSuccess ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="bg-gray-900 text-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10">
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-gray-950 shadow-lg">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <p className="text-sm font-bold leading-none">Message Sent</p>
            <p className="text-[11px] text-gray-400 font-medium mt-1.5 uppercase tracking-widest">We will reach out shortly.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.95] mb-8">
            Let's <br />
            <span className="text-amber-600">Connect.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
            Have a professional inquiry? Our specialized team is ready to provide precise diagnostics and restoration plans for your appliances.
          </p>
        </div>

        {/* Main Interface */}
        <div className="relative bg-white border border-gray-100 rounded-[3rem] shadow-2xl shadow-gray-200/50 overflow-hidden flex flex-col lg:flex-row items-stretch">
          
          {/* Information Sidebar */}
          <div className="lg:w-[45%] bg-gray-50 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-100 relative overflow-hidden flex flex-col justify-center">
             <div className="relative z-10 space-y-12">
                
                <div className="flex items-center gap-5 group">
                   <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                      <Mail size={20} />
                   </div>
                   <div className="min-w-0">
                      <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Digital Inquiry</h4>
                      <a href="mailto:info@appliancebuddies.com" className="text-sm md:text-base font-bold text-gray-900 hover:text-amber-600 transition-colors block truncate">
                        info@appliancebuddies.com
                      </a>
                   </div>
                </div>

                <div className="flex items-start gap-5 group">
                   <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 mt-1">
                      <MapPin size={20} />
                   </div>
                   <div>
                      <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1.5">Physical Hub</h4>
                      <p className="text-sm md:text-base font-bold text-gray-900 leading-tight">
                         10932 S Choctaw Dr, <br />
                         Baton Rouge, LA 70815, USA
                      </p>
                   </div>
                </div>

             </div>

             {/* Decorative Background Accent */}
             <div className="absolute top-0 right-0 w-80 h-84 bg-amber-500/5 blur-[100px] -mr-40 -mt-40 rounded-full pointer-events-none" />
          </div>

          {/* Form Side */}
          <div className="lg:w-[55%] p-8 md:p-12 lg:p-16 bg-white">
             <form className="space-y-10" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Your Full Name</label>
                    <input 
                      required
                      name="fullName"
                      type="text" 
                      className="w-full bg-gray-50 border border-transparent px-8 py-5 rounded-2xl focus:bg-white focus:ring-4 focus:ring-amber-600/5 focus:border-amber-200 outline-none transition-all font-bold text-gray-900" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      className="w-full bg-gray-50 border border-transparent px-8 py-5 rounded-2xl focus:bg-white focus:ring-4 focus:ring-amber-600/5 focus:border-amber-200 outline-none transition-all font-bold text-gray-900" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Contact Number</label>
                  <input 
                    required
                    name="phone"
                    type="tel" 
                    className="w-full bg-gray-50 border border-transparent px-8 py-5 rounded-2xl focus:bg-white focus:ring-4 focus:ring-amber-600/5 focus:border-amber-200 outline-none transition-all font-bold text-gray-900" 
                    placeholder="+1 (000) 000-0000" 
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">How can we assist you?</label>
                  <textarea 
                    required
                    name="message"
                    rows="5" 
                    className="w-full bg-gray-50 border border-transparent px-8 py-6 rounded-3xl focus:bg-white focus:ring-4 focus:ring-amber-600/5 focus:border-amber-200 outline-none transition-all font-bold text-gray-900 resize-none" 
                    placeholder="Provide details about your appliance and the symptoms it's showing..."
                  ></textarea>
                </div>

                <div className="flex justify-end pt-4">
                  <button 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-5 bg-gray-900 text-white font-black text-[12px] uppercase tracking-[0.2em] rounded-2xl hover:bg-amber-600 transition-all shadow-xl shadow-gray-950/10 active:scale-95 disabled:opacity-50 group"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-3 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Dispatch Inquiry <ArrowRight size={18} className="ml-4 group-hover:translate-x-1 group-hover:-rotate-45 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
