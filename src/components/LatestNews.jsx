import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3'>
            <p className='bg-[#D72050] px-4 py-2 text-white font-semibold'>Latest</p>

            <Marquee pauseOnHover={true}>
                <Link className='font-medium' to={"/news"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi amet iure nulla praesentium error non repellendus suscipit vel omnis est? Amet nemo repellendus asperiores assumenda possimus. Consectetur non qui maxime.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;