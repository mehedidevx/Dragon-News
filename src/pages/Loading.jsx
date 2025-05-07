import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
            <h2 className='text-3xl font-bold text-primary'>Loading...</h2>
            
        </div>
    );
};

export default Loading;