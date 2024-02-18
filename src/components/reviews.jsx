import React, { useState } from 'react';
import './reviews.css';
import Data from './data';

const Reviews = () => {
    const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
    const pre = () => {
        if (currentPersonIndex !== 0) {
            setCurrentPersonIndex(currentPersonIndex - 1);
        } else {
            setCurrentPersonIndex(Data.length - 1);
        }
    };

    const next = () => {
        if (currentPersonIndex === Data.length - 1) {
            setCurrentPersonIndex(0);
        } else {
            setCurrentPersonIndex(currentPersonIndex + 1);
        }
    };

    const surprise = () => {
        const randomIndex = Math.floor(Math.random() * Data.length);
        setCurrentPersonIndex(randomIndex);
    };

    return (
        <div className='main'>
            <div className="title">Our Reviews</div>
            <div className='box'>
                <div className="image"><img src={Data[currentPersonIndex].image} alt="" /></div>
                <div className="name">{Data[currentPersonIndex].name}</div>
                <div className="job">{Data[currentPersonIndex].job}</div>
                <div className="text">{Data[currentPersonIndex].text}</div>
                <div className='btn'>
                    <button className='nextpre' onClick={pre} >P</button>
                    <button className='nextpre' onClick={next} >N</button>
                </div>
                <div className='btn2'>
                    <button className='surprise' onClick={surprise} >Surprise Me</button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
