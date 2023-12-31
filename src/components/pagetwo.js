import React from 'react';
import TV from '../images/tv.png';
import video from '../videos/video1.m4v';

export default function Pagetwo(){
    return(
        <div className='page-two'>
            <div className='part'>
                <div className='part-one'>
                    <h2>Enjoy on your TV</h2>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    <div></div>
                </div>
                <div className='part-two'>
                    <div className='hello'>
                        <div className='part-two-inside'>
                            <img src={TV} alt='TV' />
                            <div>
                                <video autoPlay muted loop playsInline src={video} id='video'></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}