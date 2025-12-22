import React from "react";
import Footer from "../../components/Footer";
import imageAsset from '../../assets/blog-1.jpg';
import imageAsset2 from '../../assets/features-bg.jpg';
import personAvatar from '../../assets/person.jpg';

const blog = {
  title: "በእውነት የሚያደንቅ የጊዜ እና ጥበብ ዕድል፣ በእግዚአብሔር ፈቃድ የሚገኝ ጸጋ",
  author: "መምህር ዮሐንስ",
  date: "ጥር 1፣ 2014",
  image: imageAsset,

  content: [
    "በዕድል እና በጊዜ ሁሉ ላይ የእግዚአብሔር ፈቃድ እንዳለ በመታየት እኛ ሰዎች በመትረፍ ሳንወድቅ መኖር ይገባናል። እያንዳንዳችን በሕይወታችን ውስጥ የተለያዩ ፈተናዎች ሲመጡ ምንም እንኳ ትንቢት ሳናውቅ ጌታ ከኛ ጋር እንዳለ በመማር የመታመን መንገድ ይኖርብናል።",
    "የቅዱስ ቁርአን፣ መጽሐፍ ቅዱስ እና የአባቶች ትምህርት እንደሚያሳዩ ሕይወታችን እንደ መመሪያ የተሰጠን እና በመንፈስ ቅዱስ እንዲመራ የተቀደሰ ነው። ይህ ሁሉ ለመንፈሳዊ እድገት መንገድን ይከፍታል።",
    "በመከራ ጊዜ ታማኝነት ማለት የሚታይ ትምህርት ነው። የቅዱሳን ሕይወት በምሳሌ ለማዕበል የሚያስተምርን ሲሆን ማኅበረ ቅዱሳን በእቅድ ያለ መንገድ ላይ ያቆማል።"
  ],

  blockquote:
    "“የጌታ ፈቃድ ከእኛ በላይ ነው፤ የሰው አስተሳሰብ ይሻሸል፣ ግን በመታመን ሰላም ያበራል።”",

  subheadings: [
    "በመንፈሳዊ ሕይወት ላይ ትዕግሥት እና ታማኝነት",
    "የቅዱሳን ምሳሌዎች እና የትምህርት ዕውቀት"
  ],

  subcontent: [
    "በሕይወታችን ውስጥ የሚመጣው እንደ ፈተና ቢሆንም በመለመን እና በጸሎት ተቀናጀን መቆመጥ እንችላለን። እንዲሁ ጌታ ታማኝ እንደሆነ በተስፋ እና በፍቅር ይገልጻል።",
    "የቅዱስ ያሬድ፣ የአቡነ ገብረ መንፈስ ቅዱስ፣ የስጦታ ቅዱሳን ማኅበር ያሉ ቅዱሳን በትዕግሥት ተምሮ በማስታወስ መንፈሳዊ እድገት እንዴት እንደሚቻል ያሳያሉ።"
  ],

  insideImage: imageAsset2,

  tags: ["መንፈሳዊ", "ትምህርት", "እውቀት"],

  category: "መንፈሳዊ ትምህርት",

  comments: [
    {
      name: "ማርያም ተክለ",
      date: "ጥር 1፣ 2014",
      avatar: personAvatar,
      text: "እግዚአብሔር በሕይወታችን ሁሉ ይመራል! በትዕግሥት መቆም እንደሚረዳ በግልጽ ተገልጿል።"
    },
    {
      name: "ዳንኤል ደረመ",
      date: "ጥር 1፣ 2014",
      avatar: personAvatar,
      text: "በመንፈሳዊ ሕይወት ያለ ትዕግሥት የተስፋ መንገድ አይኖርም።",
      replies: [
        {
          name: "መልአክ ተክለማርያም",
          date: "ጥር 1፣ 2014",
          avatar: personAvatar,
          text: "ቅዱሳን ሕይወት በምሳሌ ሲሆን ትምህርት በግልጽ ይታያል።"
        }
      ]
    }
  ]
};


const BlogDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-6">
        <img src={blog.image} alt={blog.title} className="w-full rounded-lg" />
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span>By {blog.author}</span>
          <span>{blog.date}</span>
          <span>12 Comments</span>
        </div>

        <div className="space-y-4 text-gray-700">
          {blog.content.map((p, idx) => (<p key={idx}>{p}</p>))}

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">{blog.blockquote}</blockquote>

          {blog.subheadings.map((sh, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mt-6">{sh}</h2>
              <p className="mt-2">{blog.subcontent[idx]}</p>
            </div>
          ))}

          <img src={blog.insideImage} alt="Inside Post" className="w-full rounded-lg mt-4" />
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-6 text-gray-500">
          <span className="font-semibold">Category:</span>
          <span>{blog.category}</span>
          <span className="font-semibold">Tags:</span>
          {blog.tags.map((tag, idx) => (
            <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">{tag}</span>
          ))}
        </div>

        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold">Comments</h2>
          {blog.comments.map((c, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex space-x-4">
                <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-full border-1 border-blue-900" />
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{c.name}</h3>
                    <span className="text-sm text-gray-400">{c.date}</span>
                  </div>
                  <p className="text-gray-700">{c.text}</p>
                </div>
              </div>

              {c.replies && c.replies.length > 0 && (
                <div className="ml-16 space-y-4 mt-4">
                  {c.replies.map((r, ridx) => (
                    <div key={ridx} className="flex space-x-4">
                      <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border-1 border-blue-900" />
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{r.name}</h4>
                          <span className="text-sm text-gray-400">{r.date}</span>
                        </div>
                        <p className="text-gray-700">{r.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Post Comment</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name*" className="w-full border border-gray-300 rounded-md p-2" />
              <input type="email" placeholder="Your Email*" className="w-full border border-gray-300 rounded-md p-2" />
            </div>
            <input type="text" placeholder="Your Website" className="w-full border border-gray-300 rounded-md p-2" />
            <textarea placeholder="Your Comment*" className="w-full border border-gray-300 rounded-md p-2 h-32" />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Post Comment</button>
          </form>
        </div>
      </div>

      <aside className="lg:col-span-4 space-y-6">
  {/* ደራሲ */}
  <div className="border p-4 rounded-md space-y-4">
    <div className="flex items-center space-x-4">
      <img src={personAvatar} alt="መምህር ሊዮን" className="w-16 h-16 rounded-full border border-blue-900" />
      <div>
        <h3 className="font-semibold">መምህር ሊዮን</h3>
      </div>
    </div>
    <p className="text-gray-600 text-sm">
      በኦርቶዶክስ ቤተክርስቲያን ትምህርት እና መንፈሳዊ ሕይወት ላይ የሚመራ ጽሁፍ እንዲደርስ እባክዎት ተከታትሉ።
    </p>
  </div>

  {/* ፍለጋ */}
  <div className="border p-4 rounded-md">
    <h3 className="font-semibold mb-2">ፈልግ</h3>
    <div className="flex">
      <input type="text" className="w-full border border-gray-300 rounded-l-md p-2" placeholder="ርዕሶች ፈልግ..." />
      <button className="bg-blue-600 text-white px-4 rounded-r-md">ፈልግ</button>
    </div>
  </div>

  {/* ምድቦች */}
  <div className="border p-4 rounded-md">
    <h3 className="font-semibold mb-2">ምድቦች</h3>
    <ul className="space-y-1 text-gray-700 text-sm">
      <li>መንፈሳዊ ትምህርት (32)</li>
      <li>ቅዱስ መጽሐፍ (27)</li>
      <li>መዝሙር እና ልሳነ መላእክት (18)</li>
      <li>ታሪክ እና ቅዱሳን (44)</li>
      <li>ሥነ ሥርዓት (15)</li>
      <li>የቤተክርስቲያን መርሃ ግብር (23)</li>
    </ul>
  </div>

  {/* ታጎች */}
  <div className="border p-4 rounded-md">
    <h3 className="font-semibold mb-2">ታጎች</h3>
    <div className="flex flex-wrap gap-2">
      {[
        "መስቀል",
        "ጾም",
        "ቅዱሳን",
        "ትምህርት",
        "ሥርዓት",
        "ቅዱስ መጽሐፍ",
        "ማህሌተ ጽዮን",
        "መዝሙር",
        "ሰላም",
        "ተስፋ",
        "እምነት",
      ].map((tag, idx) => (
        <span key={idx} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
          {tag}
        </span>
      ))}
    </div>
  </div>
</aside>

    </div>
  );
};

export default BlogDetails;
