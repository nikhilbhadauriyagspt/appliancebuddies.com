import React, { useEffect } from 'react';

const RefundPolicy = () => {
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
              Refund center
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tight leading-tight mb-6">
            Refund policy for <span className="text-amber-600 italic font-medium">Appliance Buddies.</span>
          </h1>
          <p className="text-gray-400 text-sm font-medium italic">Last Updated: March 3, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <p>
              Thank you for choosing our repair services. We hope you are satisfied with the work performed. However, if you
              are not completely satisfied with our service for any reason, you may be eligible for a
              refund. Please see below for more information on our refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">Returns/refunds</h2>
            <p>
              All refund requests must be made within seven (7) days of the service completion date. 
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">Process</h2>
            <p>
              To request a refund, please email customer service at <a href="mailto:info@appliancebuddies.com" className="text-amber-600 font-bold hover:underline">info@appliancebuddies.com</a> with your service order number. After receiving your request, we will review the service performed and notify you of the status of your refund.
            </p>
            <address className="not-italic bg-amber-50 p-8 rounded-2xl border border-amber-100 mt-6 leading-relaxed font-bold text-gray-900">
              Appliance Buddies<br />
              10932 S Choctaw Dr, Baton Rouge, LA 70815, USA<br />
              United States
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">Refunds</h2>
            <p>
              After reviewing your request and inspecting the condition of any parts replaced, we will process your
              refund. Please allow at least seven (7) days from the approval of your request to process your
              refund. Refunds may take 1-2 billing cycles to appear on your credit card statement,
              depending on your credit card company. We will notify you by email when your refund has
              been processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">Exceptions</h2>
            <p>
              For issues related to recurring problems after a repair, please contact us immediately to arrange
              a follow-up diagnostic or refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">Questions</h2>
            <p>
              If you have any questions concerning our refund policy, please contact us at:
            </p>
            <address className="not-italic bg-amber-50 p-8 rounded-2xl border border-amber-100 mt-4 leading-relaxed font-bold text-gray-900">
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

export default RefundPolicy;



