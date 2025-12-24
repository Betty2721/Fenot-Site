import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

const teamMembers = [
  {
    name: "Amélie Laurent",
    role: "Founder & CEO",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    instagram: "https://instagram.com/",
    telegram: "https://t.me/",
  },
  {
    name: "Amélie Laurent",
    role: "Founder & CEO",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    instagram: "https://instagram.com/",
    telegram: "https://t.me/",
  },
  {
    name: "Amélie Laurent",
    role: "Founder & CEO",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    instagram: "https://instagram.com/",
    telegram: "https://t.me/",
  },
  {
    name: "Amélie Laurent",
    role: "Founder & CEO",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    instagram: "https://instagram.com/",
    telegram: "https://t.me/",
  },

  {
    name: "Nikolas Gibbons",
    role: "Engineering Manager",
    bio: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    instagram: "https://instagram.com/",
    telegram: "https://t.me/",
  },
  {
    name: "Sienna Hewitt",
    role: "Product Manager",
    bio: "Former PM for Linear, Lambda School, and On Deck.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    instagram: "https://instagram.com/",
    telegram: "https://t.me/",
  },
  {
    name: "Lily-Rose Chedjou",
    role: "Frontend Developer",
    bio: "Former frontend dev for Linear, Coinbase, and Postscript.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    instagram: "https://instagram.com/",
    telegram: "https://t.me/",
  },
];

export default function Leaders() {
  return (
    <div className="bg-white py-20 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Leaders
          </h1>
          <p className="text-gray-600 max-w-xl">
            here are our leaders list for our sunday school
          </p>
        </div>

        <div className="flex gap-4">
          {/* <button className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">
            About us
          </button>
          <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700">
            Old Leaders List
          </button> */}
        </div>
      </div>

      <div className="lg:px-32 max-w-full mx-auto relative">
        {/* Scroll Container */}
        <div
          className="flex gap-10 overflow-x-auto w-full scroll-smooth snap-x snap-mandatory pb-6
                  scrollbar-hide"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[300px] snap-start group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[300px] object-cover rounded-2xl mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-4">{member.bio}</p>

              {/* Social Icons */}
              <div className="flex gap-4 text-gray-500">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href={member.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaTelegramPlane size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
