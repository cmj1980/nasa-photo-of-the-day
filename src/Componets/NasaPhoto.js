import React from 'react';
import styled, { keyframes } from  'styled-components';


const kf = keyframes`



`

const StyledWrapper = styled.div`
background-color: 

`


const NasaPhoto = (props) => {
    return (
        <StyledWrapper className='photo-wrapper'>
            <div className="nav-bar">
                <img className='App-logo' src='logo192.png'></img>
                <h1>Welcome to my APOD</h1>
                <button>Login</button>
              </div>
            <h2>{props.photo.title}</h2>
            <img src={props.photo.hdurl} />
            <p>{props.photo.date}</p>
            <p className='details'>{props.photo.explanation}</p>
        </StyledWrapper>
    )
}

export default NasaPhoto;

