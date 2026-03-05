import React, { useEffect } from 'react';

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-44 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Refined Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1.5px] bg-amber-600 rounded-full" />
            <span className="text-[11px] font-bold text-amber-600 tracking-widest uppercase">
              Legal notice
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tight leading-tight mb-6">
            Disclaimer for <span className="text-amber-600 italic font-medium">Appliance Buddies.</span>
          </h1>
          <p className="text-gray-400 text-sm font-medium italic">Last Updated: March 3, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">General disclaimer</h2>
            <p>
              The information provided by <strong>Appliance Buddies</strong> ("we," "us," or "our") on <a href="https://appliancebuddies.com/" className="text-amber-600 hover:underline">https://appliancebuddies.com/</a> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>
            <p className="font-bold text-gray-950 mt-4">
              UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">External links disclaimer</h2>
            <p>
              The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>
            <p>
              WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">Professional disclaimer</h2>
            <p>
              The Site cannot and does not contain appliance repair advice. The care information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
            </p>
            <p className="italic text-gray-600">
              THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">Testimonials disclaimer</h2>
            <p>
              The Site may contain testimonials by users of our services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our services. We do not claim, and you should not assume, that all users will have the same experiences. YOUR INDIVIDUAL RESULTS MAY VARY.
            </p>
            <p>
              The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity where the full testimonial contained extraneous information not relevant to the general public.
            </p>
            <p>
              The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions. We are not affiliated with users who provide testimonials, and users are not paid or otherwise compensated for their testimonials.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">Contact us</h2>
            <p>If you have any questions regarding this disclaimer, please contact us at:</p>
            <address className="not-italic bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-4 leading-relaxed font-bold text-gray-900">
              Appliance Buddies<br />
              10932 S Choctaw Dr, Baton Rouge, LA 70815, USA<br />
              United States<br />
              Email: <a href="mailto:info@appliancebuddies.com" className="text-amber-600 hover:underline">info@appliancebuddies.com</a>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;



