import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div className='card p-5 bg-base-100 shadow-md'>
            <div className=' overflow-hidden mb-5'>
                <img className='rounded-2xl w-full' src={news.image_url} alt="" />
            </div>
            <h2>{news.title}</h2>
            <p>{news.details}</p>
            <div>
            <Link className='btn btn-secondary mt-4' to={`/category/${news.category_id}`}>Back to Category</Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;