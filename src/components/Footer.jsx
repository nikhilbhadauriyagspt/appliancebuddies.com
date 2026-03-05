import { Zap, Mail, MapPin, ArrowUpRight, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
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

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Latest Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Washing Machine', path: '/service/washing-machine' },
      { name: 'Refrigerator', path: '/service/refrigerator' },
      { name: 'Air Conditioner', path: '/service/air-conditioner' },
      { name: 'Television', path: '/service/television' },
      { name: 'Water Purifier', path: '/service/water-purifier' },
      { name: 'Microwave Oven', path: '/service/microwave-oven' },
      { name: 'Kitchen Chimney', path: '/service/kitchen-chimney' },
      { name: 'Dishwasher', path: '/service/dishwasher' },
      { name: 'Coffee Maker', path: '/service/coffee-maker' },
      { name: 'Oven & Gas Stove', path: '/service/oven-stove' },
      { name: 'Clothes Dryer', path: '/service/clothes-dryer' },
      { name: 'Other Appliances', path: '/service/other-appliances' },
    ],
    support: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Refund Policy', path: '/refund-policy' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
      { name: 'Disclaimer', path: '/disclaimer' },
    ]
  };

  return (
    <footer className="bg-gray-50 pt-24 pb-12 border-t border-gray-100 w-full">
      <div className="w-full px-12 md:px-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand & Info - 4 Columns */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-8">
              <img src="/logo-rok.png" alt="Appliance Buddies" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
            <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-sm mb-10">
              Professional appliance restoration and support services. We provide elite professional solutions for your home systems with a focus on definition and precision.
            </p>
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-amber-600">
                     <Mail size={18} />
                  </div>
                  <a href="mailto:info@appliancebuddies.com" className="text-sm font-bold text-gray-900 hover:text-amber-600 transition-colors">info@appliancebuddies.com</a>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-amber-600">
                     <MapPin size={18} />
                  </div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">
                     10932 S Choctaw Dr, Baton Rouge, LA 70815
                  </p>
               </div>
            </div>
          </div>

          {/* Links Grid - 5 Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-500 hover:text-amber-600 text-sm font-medium transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Services</h4>
              <ul className="space-y-4 max-h-[200px] overflow-y-auto no-scrollbar">
                {footerLinks.services.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-500 hover:text-amber-600 text-sm font-medium transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Support</h4>
              <ul className="space-y-4">
                {footerLinks.support.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-500 hover:text-amber-600 text-sm font-medium transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter - 3 Columns */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Stay Informed</h4>
            <p className="text-gray-500 text-sm font-medium mb-6">
              Subscribe to get professional appliance care insights and updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-4 focus:ring-amber-600/5 focus:border-amber-200 transition-all"
                />
              </div>
              <button 
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-amber-600 transition-all shadow-lg shadow-gray-900/10 active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? '...' : 'Subscribe Now'}
              </button>
            </form>
            {isSuccess && (
              <div className="mt-4 flex items-center gap-2 text-amber-600">
                <CheckCircle2 size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Enrolled Successfully</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-10 border-t border-gray-200 flex flex-col items-center gap-6">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest text-center">
            &copy; {currentYear} Appliance Buddies. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
