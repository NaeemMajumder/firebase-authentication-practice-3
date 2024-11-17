import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavBar = () => {
    const [category, SetCategory] = useState([]);

    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=>res.json())
        .then(data=>SetCategory(data.data.news_category));
    },[])

    return (
        <div>
            <h2 className="font-semibold mb-4">All Category ({category.length})</h2>

            <div className="flex flex-col gap-3">
                {
                    category.map((cate)=>(
                        <NavLink to={`/category/${cate.category_id}`} className="btn" key={cate.category_id}>{cate.category_name}</NavLink>
                    ))
                }

            </div>
        </div>
    );
};

export default LeftNavBar;