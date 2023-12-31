import React from 'react';
import device from '../images/device.png';
import video2 from '../videos/video2.m4v';

export default function Pagefour(){
    return(
        <div className='page-two'>
            <div className='part'>
                <div className='part-one'>
                    <h2>Watch everywhere</h2>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    <div></div>
                </div>
                <div className='part-two'>
                    <div className='hello'>
                        <div className='part-two-inside'>
                            <img src={device} alt='device' />
                            <div>
                                <video autoPlay muted loop playsInline src={video2} id='video2'></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}