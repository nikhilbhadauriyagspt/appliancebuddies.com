import React, { useEffect } from 'react';

const TermsOfService = () => {
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
              Legal center
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tight leading-tight mb-6">
            Terms of service for <span className="text-amber-600 italic font-medium">Appliance Buddies.</span>
          </h1>
          <p className="text-gray-400 text-sm font-medium italic">Last Updated: March 3, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">1. AGREEMENT TO TERMS</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on
              behalf of an entity (“you”) and Appliance Buddies (“we,” “us,” or “our”), concerning your access to and
              use of the <a href="https://appliancebuddies.com/" className="text-amber-600 font-bold hover:underline">https://appliancebuddies.com/</a> website as well as any other media form, media channel,
              mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the
              “Site”).
            </p>
            <p>
              You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these
              Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED
              FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
            <p>
              Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby
              expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes
              or modifications to these Terms of Service at any time and for any reason. We will alert you about any
              changes by updating the “Last updated” date of these Terms of Service, and you waive any right to receive
              specific notice of each such change.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">2. INTELLECTUAL PROPERTY RIGHTS</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases,
              functionality, software, website designs, audio, video, text, photographs, and graphics on the Site
              (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”)
              are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and
              various other intellectual property rights and unfair competition laws of the United States, international
              copyright laws, and international conventions.
            </p>
            <p>
              The Content and the Marks are provided on the Site “AS IS” for your information and personal use only.
              Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be
              copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated,
              transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever,
              without our express prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">3. USER REPRESENTATIONS</h2>
            <p>By using the Site, you represent and warrant that:</p>
            <ul className="list-disc pl-10 space-y-2">
              <li>All registration information you submit will be true, accurate, current, and complete;</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service;</li>
              <li>You are not a minor in the jurisdiction in which you reside;</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise;</li>
              <li>You will not use the Site for any illegal or unauthorized purpose;</li>
              <li>Your use of the Site will not violate any applicable law or regulation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">4. PROHIBITED ACTIVITIES</h2>
            <p>
              You may not access or use the Site for any purpose other than that for which we make the Site available.
              The Site may not be used in connection with any commercial endeavors except those that are specifically
              endorsed or approved by us.
            </p>
            <p>As a user of the Site, you agree not to:</p>
            <ul className="list-disc pl-10 space-y-2">
              <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
              <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
              <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
              <li>Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
              <li>Engage in unauthorized framing of or linking to the Site.</li>
              <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
              <li>Delete the copyright or other proprietary rights notice from any Content.</li>
              <li>Attempt to impersonate another user or person or use the username of another user.</li>
              <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).</li>
              <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
              <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.</li>
              <li>Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</li>
              <li>Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
              <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</li>
              <li>Except as may be the result of standard search engine or internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.</li>
              <li>Use a buying agent or purchasing agent to make purchases on the Site.</li>
              <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
              <li>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">5. USER GENERATED CONTRIBUTIONS</h2>
            <p>
              The Site does not offer users to submit or post content. We may provide you with the opportunity to create,
              submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or
              on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments,
              suggestions, or personal information or other material (collectively, "Contributions"). Contributions may
              be viewable by other users of the Site and through third-party websites. As such, any Contributions you
              transmit may be treated in accordance with the Site Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">6. CONTRIBUTION LICENSE</h2>
            <p>
              You and the Site agree that we may access, store, process, and use any information and personal data that
              you provide following the terms of the Privacy Policy and your choices (including settings).
            </p>
            <p>
              By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such
              feedback for any purpose without compensation to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">7. SUBMISSIONS</h2>
            <p>
              You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information
              regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole
              property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled
              to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or
              otherwise, without acknowledgment or compensation to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">8. SITE MANAGEMENT</h2>
            <p>
              We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of
              Service; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or
              these Terms of Service, including without limitation, reporting such user to law enforcement authorities;
              (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of,
              or disable (to the extent operationally feasible) any of your Contributions or any portion thereof; (4)
              in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise
              disable all files and content that are excessive in size or are in any way burdensome to our systems; and
              (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate
              the proper functioning of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">9. TERM AND TERMINATION</h2>
            <p>
              These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY
              OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT
              NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY
              PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
              WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
              TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT
              ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">10. MODIFICATIONS AND INTERRUPTIONS</h2>
            <p>
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at
              our sole discretion without notice. However, we have no obligation to update any information on our Site.
              We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We
              will not be liable to you or any third party for any modification, price change, suspension, or
              discontinuance of the Site.
            </p>
            <p>
              We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other
              problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors.
              We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any
              time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss,
              damage, or inconvenience caused by your inability to access or use the Site during any downtime or
              discontinuance of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">11. GOVERNING LAW</h2>
            <p>
              These Terms of Service and your use of the Site are governed by and construed in accordance with the laws
              of the State of Louisiana applicable to agreements made and to be entirely performed within the State of Louisiana,
              without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">12. DISPUTE RESOLUTION</h2>
            <p>
              Any legal action of whatever nature brought by either you or us (collectively, the "Parties" and
              individually, a "Party") shall be commenced or prosecuted in the state and federal courts located in Louisiana,
              and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non
              conveniens with respect to venue and jurisdiction in such state and federal courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">13. CORRECTIONS</h2>
            <p>
              There may be information on the Site that contains typographical errors, inaccuracies, or omissions,
              including descriptions, pricing, availability, and various other information. We reserve the right to
              correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any
              time, without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">14. DISCLAIMER</h2>
            <p>
              THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR
              SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
              EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO
              WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY
              WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES,
              OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
              RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
              SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY
              INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
              LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS
              IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
              CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE,
              GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY
              THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR
              OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
              TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A
              PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
              CAUTION WHERE APPROPRIATE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">15. LIMITATIONS OF LIABILITY</h2>
            <p>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
              DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
              PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE
              BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">16. INDEMNIFICATION</h2>
            <p>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of
              our respective officers, agents, partners, and employees, from and against any loss, damage, liability,
              claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or
              arising out of: (1) use of the Site; (2) breach of these Terms of Service; (3) any breach of your
              representations and warranties set forth in these Terms of Service; (4) your violation of the rights of a
              third party, including but not limited to intellectual property rights; or (5) any overt harmful act
              toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we
              reserve the right, at your expense, to assume the exclusive defense and control of any matter for which
              you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such
              claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is
              subject to this indemnification upon becoming aware of it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">17. USER DATA</h2>
            <p>
              We will maintain certain data that you transmit to the Site for the purpose of managing the performance of
              the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of
              data, you are solely responsible for all data that you transmit or that relates to any activity you have
              undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of
              any such data, and you hereby waive any right of action against us arising from any such loss or corruption
              of such data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">18. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
            <p>
              Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You
              consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and
              other communications we provide to you electronically, via email and on the Site, satisfy any legal
              requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
              CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF
              TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements
              under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an
              original signature or delivery or retention of non-electronic records, or to payments or the granting of
              credits by any means other than electronic means.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">19. CALIFORNIA USERS AND RESIDENTS</h2>
            <p>
              If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of
              the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North
              Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916)
              445-1254.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">20. MISCELLANEOUS</h2>
            <p>
              These Terms of Service and any policies or operating rules posted by us on the Site or in respect to the
              Site constitute the entire agreement and understanding between you and us. Our failure to exercise or
              enforce any right or provision of these Terms of Service shall not operate as a waiver of such right or
              provision. These Terms of Service operate to the fullest extent permissible by law. We may assign any or
              all of our rights and obligations to others at any time. We shall not be responsible or liable for any
              loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision
              or part of a provision of these Terms of Service is determined to be unlawful, void, or unenforceable, that
              provision or part of the provision is deemed severable from these Terms of Service and does not affect the
              validity and enforceability of any remaining provisions. There is no joint venture, partnership,
              employment or agency relationship created between you and us as a result of these Terms of Service or use
              of the Site. You agree that these Terms of Service will not be construed against us by virtue of having
              drafted them. You hereby waive any and all defenses you may have based on the electronic form of these
              Terms of Service and the lack of signing by the parties hereto to execute these Terms of Service.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight uppercase">CONTACT US</h2>
            <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
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

export default TermsOfService;



