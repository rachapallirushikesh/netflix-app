import React from 'react';
import logo from '../images/logo.svg';

export default function Nav(){
    return(
        <div className='background'>
            <div className='nav'>
                <div>
                    <img src={logo} alt='logo' id='logo'/>
                </div>
                <div className='top-left'>
                    <div className='select'>
                        <select id='select'>
                            <option>English</option>
                            <option>हिंदी</option>
                            <option>తెలుగు</option>
                        </select>
                    </div>
                    <button id='top-button'>Sign In</button>
                </div>
            </div>
            <div className='nav-body'>
                <div id='nav-body'>
                    <h2>The biggest Indian hits. Ready to watch here from ₹149.</h2>
                    <p id='p1'>Join today. Cancel anytime.</p>
                    <p id='p2'>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className='buttons'>
                    <div id='input'>
                        <input type='email' placeholder='Email Address' />
                    </div>
                    <div id='start'>
                        <button>Get Started <span><i class="fa-regular fa-greater-than"></i></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}