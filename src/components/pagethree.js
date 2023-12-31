import React from 'react';
import mobile from '../images/mobile.jpg';
import box from '../images/boxshot.png';

export default function Pagethree(){
    return(
        <div className='page-three'>
            <div className='inside-page-three'>
                <div className='left'>
                    <div className='left-inside'>
                        <div className='left-in-in'>
                            <img src={mobile} alt='mobile'/>
                            {/* <div className='absolute'>
                                <div className='pic'>
                                    <img src={box} alt='box'/>
                                </div>
                                <div className='text'>
                                    <div>Stranger Things</div>
                                    <div style={{color:'blue'}}>downloading...</div>
                                </div>
                                <div className='download' style={{color:'white'}}><i class="fa-regular fa-circle-down"></i></div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <h2>Download your shows to watch offline</h2>
                    <p>Save your favourites easily and always have something to watch.</p>
                    <div></div>
                </div>
            </div>
        </div>
    );
}