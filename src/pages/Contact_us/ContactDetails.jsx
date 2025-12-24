const contactDetail = () => {
  return (
    <div className="bg-white flex flex-col items-center min-h-screen">
      {/* Header */}
      <section className="text-center py-12 px-6">
        <p className="text-sm font-medium text-blue-600 mb-3">Contact us</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our location
        </h1>
        <p className="text-lg text-gray-600">
          Come visit our sunday school at our Church.
        </p>
      </section>

      {/* Map */}
      <div className="w-full md:w-2/3 shadow-xl shadow-blue-900/20 border border-blue-500 rounded-lg overflow-hidden mb-20">
        <section className="w-full h-[420px]">
          <iframe
            title="Map"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=8.99370232995038,38.69142959888761&t=k&output=embed"
          />
        </section>
      </div>

      {/* Locations */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12 text-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Retail store
          </h3>
          <p className="text-gray-500 mb-3">Mon–Sun 9am to 5pm.</p>
          <p className="text-blue-600 font-medium">
            Infront of Ayertena
            <br />
            0911223344
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Library</h3>
          <p className="text-gray-500 mb-3">Mon–Fri 9am to 5pm.</p>
          <p className="text-blue-600 font-medium">
            Alemgenent Abreham (Librarian)
            <br />
            0911223344
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Head office
          </h3>
          <p className="text-gray-500 mb-3">Mon–Fri 9am to 5pm.</p>
          <p className="text-blue-600 font-medium">
            D/n Abel (Head of Finote Tsidk)
            <br />
            0911223344
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {/* Phone */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              📞 Phone
            </h4>
            <p className="text-gray-600">+251 913 223344</p>
            <p className="text-gray-600">+251 911 223344</p>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              ✉️ Email
            </h4>
            <p className="text-gray-600">finote1619@gmail.com</p>
            <p className="text-gray-600">support@finote1619.com</p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              🌐 Social
            </h4>
            <div className="flex flex-col justify-center items-center text-blue-600 font-medium">
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contactDetail;
