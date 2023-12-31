import React from "react";
import child from '../images/child.png';

export default function Pagefive(){
    return(
        <div className='page-two'>
            <div className='part-part'>
                <div className='part-two'>
                    <div className='hello'>
                        <div className='part-two-inside'>
                            <img src={child} alt='child' />
                        </div>
                    </div>
                </div>
                <div className='part-one'>
                    <h2>Create profiles for kids</h2>
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    <div></div>
                </div>
            </div>
        </div>
    );
}