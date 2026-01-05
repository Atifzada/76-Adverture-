import Head from 'next/head';
import Image from 'next/image';

const CEOMessage = () => {
  return (
    <section className='max-container bg-slate-100'>
      <Head>
        <title>CEO Message | 76 Adventure For Tourism Services</title>
        <meta name="description" content="A message from our CEO, Asad Iqbal" />
      </Head>

      <main className="max-container padding-container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="bold-32 lg:bold-52 text-green-90 mb-4">Message from Our CEO</h1>
          <p className="regular-16 text-gray-30 max-w-3xl mx-auto">
            Leadership vision guiding our journey in the travel industry
          </p>
        </section>

        {/* CEO Portrait - Now above the message on all screens */}
        <div className="flex justify-center mb-12 lg:hidden">
          <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/ceo.jpg"
              alt="Asad Iqbal, CEO of Manzar Alsamaa Tourism LLC"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* CEO Message Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Message Content - Left Column on lg+ */}
          <div className="lg:col-span-2 bg-gray-10 p-8 md:p-12 rounded-xl shadow-sm">
            <div className="space-y-6">
              <h2 className="bold-24 text-green-90 border-b pb-4 border-gray-20">
                Our Vision for the Future of Travel
              </h2>

              <p className="regular-16 text-gray-30 leading-relaxed">
                Dear Valued Guests and Partners,
              </p>

              <p className="regular-16 text-gray-30 leading-relaxed">
                As we continue to explore new destinations and experiences, let's prioritize exceptional service, cultural sensitivity, and sustainability. Our goal is to create unforgettable memories for our clients while promoting responsible tourism services.
                Thank you for your dedication and passion.
              </p>

              <div className="pt-4 mt-6 border-t border-gray-20">
                <p className="bold-18 text-green-90">Best regards,</p>
                <p className="regular-16 text-gray-30">Musawar Hayyat</p>
                <p className="regular-16 text-gray-30">CEO, 76 Adventure For Tourism Services</p>
              </div>
            </div>
          </div>

          {/* CEO Portrait - Right Column on lg+ (hidden on smaller screens) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/ceo.jpg"
                alt="Asad Iqbal, CEO of Manzar Alsamaa Tourism LLC"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="mt-24">
          <h2 className="bold-24 text-green-90 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Exceptional Service",
                description: "Going above and beyond to create seamless, personalized travel experiences.",
                icon: "🌟"
              },
              {
                title: "Cultural Sensitivity",
                description: "Respecting and celebrating the diversity of the destinations we visit.",
                icon: "🌍"
              },
              {
                title: "Sustainable Tourism",
                description: "Committing to practices that protect environments and support local communities.",
                icon: "♻️"
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-10 p-8 rounded-xl text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="bold-18 text-green-90 mb-2">{value.title}</h3>
                <p className="regular-14 text-gray-30">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
};

export default CEOMessage;