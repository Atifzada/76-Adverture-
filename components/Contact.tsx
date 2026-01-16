import { FOOTER_CONTACT_INFO } from '@/constant';
import Link from 'next/link';
import Head from 'next/head';

// Define the type for contact information
type ContactInfo = {
  label: string;
  value: string;
  type: 'email' | 'phone' | 'address'; // Add type property
};

// Update your constant to use the ContactInfo type
const contactInfo: ContactInfo[] = FOOTER_CONTACT_INFO.links.map(contact => ({
  ...contact,
  type: contact.value.includes('@') ? 'email' : 
        /[0-9]/.test(contact.value) ? 'phone' : 'address'
}));

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Travel Company</title>
        <meta name="description" content="Get in touch with our travel experts" />
      </Head>

      <main className="max-container padding-container py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="bold-32 lg:bold-52 text-green-90 mb-4">Contact Us</h1>
          <p className="regular-16 text-gray-30 max-w-3xl mx-auto">
            Have questions about your next adventure? 
          </p>
          <p>We are here to help you plan the perfect trip.</p>
        </section>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-gray-10 p-8 rounded-xl shadow-sm">
            <h2 className="bold-18 text-green-90 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="">
                    {contact.type === 'email' && (
                      <svg className="w-5 h-5 text-green-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {contact.type === 'phone' && (
                      <svg className="w-5 h-5 text-green-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )}
                    {contact.type === 'address' && (
                      <svg className="w-5 h-5 text-green-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="medium-16 text-gray-30">{contact.label}</h3>
                    {contact.type === 'email' ? (
                      <Link href={`mailto:${contact.value}`} className="regular-16 text-green-70 hover:underline">
                        {contact.value}
                      </Link>
                    ) : contact.type === 'phone' ? (
                      <Link href={`tel:${contact.value.replace(/\D/g, '')}`} className="regular-16 text-green-70 hover:underline">
                        {contact.value}
                      </Link>
                    ) : (
                      <p className="regular-16 text-green-70">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
  <h3 className="bold-18 text-green-90 mb-4">Operating Hours</h3>
  <ul className="space-y-2">
    <li className="flex justify-between regular-16">
      <span className="text-gray-30">We operate non-stop.</span>
      <span className="text-green-70">At your Service 24/7</span>
    </li>
  </ul>
</div>
          </div>

          {/* Map Section */}
          <div className="bg-gray-10 p-8 rounded-xl shadow-sm flex flex-col">
            <h2 className="bold-18 text-green-90 mb-6">Our Location</h2>
            <p>Office no 302 Umm Ghuwailina, zone 27, Street No 950, Building No 12, 3rd floor</p>
            <div className="flex-grow w-full h-full min-h-[400px] md:min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.683595930756!2d51.54728617484014!3d25.281227028293017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2ssa!4v1767627647746!5m2!1sen!2ssa" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="regular-14 text-gray-30 mt-4">
              Visit us at our office for personalized travel consultation.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
<section>
  <h2 className="bold-18 text-center text-green-90 mb-4">Frequently Asked Questions</h2>
  <div className="space-y-4 text-center">
    {[
      {
        question: "What are your office hours?",
        answer: "We operate 24/7 to assist you with bookings and inquiries anytime."
      },
      {
        question: "How can I book a trip?",
        answer: "You can book through our website, by calling our office, or visiting us in person. Our travel experts are always ready to assist."
      },
      {
        question: "Do you offer emergency support while traveling?",
        answer: "Yes, we provide 24/7 emergency support for all travelers. You will receive emergency contact details with your travel documents."
      }
    ].map((faq, index) => (
      <div key={index} className="bg-gray-10 p-6 rounded-lg">
        <h3 className="bold-18 text-green-90 mb-2">{faq.question}</h3>
        <p className="regular-16 text-gray-30">{faq.answer}</p>
      </div>
    ))}
  </div>
</section>

      </main>
    </>
  );
};

export default Contact;