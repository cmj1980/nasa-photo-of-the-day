import React from 'react';

const NasaPhoto = (props) => {
    return (
        <div className='photo-wrapper'>
            <h2>{props.photo.title}</h2>
            <img src={props.photo.hdurl} />
            <p>{props.photo.date}</p>
            <p className='details'>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;

