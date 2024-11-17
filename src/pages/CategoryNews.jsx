import { Link, useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    let {data: newsData } = useLoaderData();
    return (
        <div>
            <h2 className="font-semibold mb-4">Dragon News Home</h2>
            <p className="text-gray-500 font-medium">Total news in this category: {newsData.length}</p>

            <div>

                {
                    newsData.map((singleNews)=> <NewsCard key={singleNews._id} singleNews={singleNews} />)
                }

            </div>
        </div>
    );
};

export default CategoryNews;