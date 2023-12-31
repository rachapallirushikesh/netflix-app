import React from 'react';

export default function Footer(){
    return(
        <div className='footer'>
            <div className='foot'>Questions? Call <span style={{textDecorationLine:'underline'}}>000-800-919-1694</span></div>
            <div className='main'>
                <div id='main1'>
                    <div>FAQ</div>
                    <div>Investor Relations</div>
                    <div>Privacy</div>
                    <div>Speed Test</div>
                </div>
                <div id='main2'>
                    <div>Help Center</div>
                    <div>Jobs</div>
                    <div>Cookie Preferences</div>
                    <div>Legal Notice</div>
                </div>
                <div id='main3'>
                    <div>Account</div>
                    <div>Ways to Watch</div>
                    <div>Cooporate Information</div>
                    <div>Only on Netflix</div>
                </div>
                <div id='main4'>
                    <div>Media Center</div>
                    <div>Terms of Use</div>
                    <div>Contact Us</div>
                </div>
            </div>
            <div className='select-one'>
                <select id='select-one'>
                    <option>English</option>
                    <option>हिंदी</option>
                    <option>తెలుగు</option>
                </select>
            </div>      
            <p>Netflix India</p>     
        </div>
    );
}