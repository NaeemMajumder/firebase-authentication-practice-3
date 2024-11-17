
const NewsCard = ({singleNews}) => {
  return (


    // {
    //     "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
    //     "others_info": {
    //       "is_todays_pick": false,
    //       "is_trending": true
    //     },
    //     "category_id": "01",
    //     "rating": {
    //       "number": 4.5,
    //       "badge": "Excellent"
    //     },
    //     "total_view": 488,
    //     "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
    //     "author": {
    //       "name": "Jimmy Dane",
    //       "published_date": "2022-08-24 17:27:34",
    //       "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    //     },
    //     "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
    //     "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
    //     "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
    //   },



    <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
      {/* Author and Date */}
      <div className="flex items-center px-4 py-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={singleNews.author.img}
          alt="John Doe"
        />
        <div className="ml-3">
          <h3 className="text-sm font-semibold">{singleNews.author.name}</h3>
          <p className="text-xs text-gray-500">{singleNews.author.published_date}</p>
        </div>
      </div>

      {/* Thumbnail Image */}
      <img
        className="w-full h-48 object-cover"
        src={singleNews.image_url}
        alt="Article Thumbnail"
      />

      {/* Title */}
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold text-gray-800">
          {singleNews.title}
        </h2>
      </div>

      {/* Details */}
      <div className="px-4 py-2 text-sm text-gray-600">
        <p>
            {singleNews.details.substring(0, 150)}...
        </p>
        <a href="#" className="text-blue-600 font-semibold">
          Read More
        </a>
      </div>

      {/* Rating and Views */}
      <div className="flex justify-between items-center px-4 py-3 border-t">
        <div className="flex items-center">
          <span className="text-yellow-500">{Array(5).fill("⭐")}</span>
          <span className="ml-2 text-sm font-medium">{singleNews.rating.badge} ({singleNews.rating.number})</span>
        </div>
        <div className="text-sm text-gray-500">👁️ {singleNews.total_view} Views</div>
      </div>
    </div>
  );
};

export default NewsCard;
