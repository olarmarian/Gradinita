import React from 'react'
import video from '../assets/adunare.mp4'
import { Button } from './Button'
import {
    Link
  } from 'react-router-dom'

export const Addition = () =>{
    return(
        <div>
            <div className="home-btn">
            <Button  icon="fas fa-home" route="/"/>
            </div>
            <video id="vid" controls>
                <source id="mp4" src={video} type="video/mp4"/>
            </video>
            <div className="btn-section">
                <Button icon="fas fa-arrow-left" route="/learning"/>
                <Button icon="fas fa-gamepad" route="/game"/>
            </div>
            
        </div>
    )
}