import { X, Send, ShieldCheck, Clock, User, Phone, MessageSquare, CheckCircle2, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const BookingModal = ({ isOpen, onClose, serviceTitle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      body: encode({ "form-name": "booking", ...data, serviceTitle })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* SaaS Overlay */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300 border border-gray-100">
        
        {/* Left Information Sidebar */}
        <div className="md:w-[35%] bg-gray-50 p-10 flex flex-col border-b md:border-b-0 md:border-r border-gray-100">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-full mb-6 border border-amber-100">
              <ShieldCheck size={14} className="text-amber-600" />
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest leading-none">
                Verified Service
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Expert System <span className="text-amber-600">Support.</span>
            </h2>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Professional appliance restoration for premium home systems with guaranteed results.
            </p>
          </div>

          <div className="mt-auto space-y-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Response</p>
                <p className="text-sm font-bold text-gray-900">45 Min Arrival</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Warranty</p>
                <p className="text-sm font-bold text-gray-900">90 Day Coverage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Area */}
        <div className="flex-1 p-8 md:p-12 relative bg-white">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>

          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 shadow-xl shadow-amber-600/10">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Booking Confirmed</h3>
              <p className="text-gray-500 font-medium mt-3">We will contact you shortly to coordinate your visit.</p>
            </div>
          ) : (
            <div>
              <div className="mb-10">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-2">Request Service</h3>
                <p className="text-sm font-medium text-gray-500">Service: <span className="text-amber-600 font-bold">{serviceTitle}</span></p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 ml-1">Full Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input required name="fullName" type="text" className="w-full bg-gray-50 border border-gray-100 pl-11 pr-4 py-3.5 rounded-xl focus:bg-white focus:ring-4 focus:ring-amber-600/5 focus:border-amber-200 outline-none transition-all font-semibold text-gray-900 text-sm" placeholder="John Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input required name="phone" type="tel" className="w-full bg-gray-50 border border-gray-100 pl-11 pr-4 py-3.5 rounded-xl focus:bg-white focus:ring-4 focus:ring-amber-600/5 focus:border-amber-200 outline-none transition-all font-semibold text-gray-900 text-sm" placeholder="+1 (000) 000-0000" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input required name="email" type="email" className="w-full bg-gray-50 border border-gray-100 pl-11 pr-4 py-3.5 rounded-xl focus:bg-white focus:ring-4 focus:ring-amber-600/5 focus:border-amber-200 outline-none transition-all font-semibold text-gray-900 text-sm" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 ml-1">Problem Details</label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-4 top-4 text-gray-400" />
                    <textarea required name="issue" rows="4" className="w-full bg-gray-50 border border-gray-100 pl-11 pr-4 py-3.5 rounded-xl focus:bg-white focus:ring-4 focus:ring-amber-600/5 focus:border-amber-200 outline-none transition-all font-semibold text-gray-900 text-sm resize-none" placeholder="Describe the problem..."></textarea>
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-amber-600 text-white rounded-xl font-bold text-sm hover:bg-amber-700 transition-all shadow-lg shadow-amber-600/20 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? 'Processing...' : <>Confirm Booking <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
