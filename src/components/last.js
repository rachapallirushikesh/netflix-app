import React,{useState} from 'react';

export default function Last(){

    const [clickedButton,setClickedButton]=useState(null);
    const [tru,setTru]=useState(false);
    const [customStyle,setCustomStyle]=useState({marginBottom:'.5rem'});


    function handleCLick(event){
        console.log(event.currentTarget.id);
        if(tru){
            setTru(false);
            setCustomStyle({marginBottom:'.5rem'});
        }
        else{
            setTru(true);
            setCustomStyle({marginBottom:'.1rem'});
        }
        const button=event.currentTarget.id;
        setClickedButton(button);
    }


    return(
        <div className='last-page'>
            <div className='last-part'>
                <div id='heading'>Frequently Asked Questions</div>
                <div id='box1' onClick={handleCLick}>
                    <div className='box' style={ (customStyle)}>
                    <div>What is Netflix?</div>
                    <div className='icon'><i class="fa-regular fa-plus"></i></div>
                    </div>
                    {tru && (clickedButton==='box1') && (
                        <div id='info'>
                        {tru && (
                            <ul>
                                <li>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</li>
                                <br></br>
                                <li>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</li>
                            </ul>
                        )}
                    </div>
                    )}
                </div>
                <div id='box2' onClick={handleCLick}>
                    <div className='box' style={customStyle}>
                    <div>How much does Netflix cost?</div>
                    <div className='icon'><i class="fa-regular fa-plus"></i></div>
                    </div>
                    {tru && (clickedButton==='box2') &&(
                        <div id='info'>
                        {tru && (
                            <ul>
                                <li>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</li>
                            </ul>
                        )}
                    </div>
                    )}
                </div>
                <div id='box3' onClick={handleCLick}>
                    <div className='box' style={customStyle}>
                    <div>Where can i watch?</div>
                    <div className='icon'><i class="fa-regular fa-plus"></i></div>
                    </div>
                    {tru && (clickedButton==='box3') && (
                        <div id='info'>
                        {tru &&  (
                            <ul>
                                <li>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</li>
                                <br></br>
                                <li>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</li>
                            </ul>
                        )}
                    </div>
                    )}
                </div>
                <div id='box4' onClick={handleCLick}>
                    <div className='box' style={customStyle}>
                    <div>How do i cancel?</div>
                    <div className='icon'><i class="fa-regular fa-plus"></i></div>
                    </div>
                    {tru && (clickedButton==='box4') && (
                        <div id='info'>
                        {tru && (
                            <ul>
                                <li>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees, start or stop your account anytime.</li>
                            </ul>
                        )}
                    </div>
                    )}
                </div>
                <div id='box5' onClick={handleCLick}>
                    <div className='box' style={customStyle}>
                    <div>What can i watch on Netflix?</div>
                    <div className='icon'><i class="fa-regular fa-plus"></i></div>
                    </div>
                    {tru && (clickedButton==='box5') && (
                        <div id='info'>
                        {tru && (
                            <ul>
                                <li>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</li>
                            </ul>
                        )}
                    </div>
                    )}
                </div>
                <div id='box6' onClick={handleCLick}>
                    <div className='box' style={customStyle}>
                    <div>Is Netflix good for kids?</div>
                    <div className='icon'><i class="fa-regular fa-plus"></i></div>
                    </div>
                    {tru && (clickedButton==='box6') && (
                        <div id='info'>
                        {tru && (
                            <ul>
                                <li>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</li>
                                <br></br>
                                <li>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</li>
                            </ul>
                        )}
                    </div>
                    )}
                </div>
            </div>
            <div className='ll'>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
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
    );
}