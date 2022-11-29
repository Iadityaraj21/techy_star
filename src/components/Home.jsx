import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
   
    <>
    <div className='home' id='home'>
    <main>
        <h1>TechyStar</h1>
        <p>Solution to all your problems</p>
    </main>
    
    </div>;

    <div className='home2'>

        <img src={vg} alt="Graphics" />

        <div>
            <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability.
            </p>
        </div>
    </div>
    
    <div className="home3" id='about'>

        <div>
            <h1>
                Who we are?
            </h1>
            <p>
            TechyStar is a professional software selling portal for offering brand free PHP applications. 
            we ve 200+ industry-specific PHP and Desktop based apps ready to buy. We professional software
             development firm & a marketplace for readymade PHP applications with brand free source code 
             including reselling rights. Start your own software business just in minutes
            </p>
        </div>
    </div>

    <div className='home4' id='brands'>

        <div>
            <h1>Brands</h1>

            <article>

                <div style={{
                    animatinDelay:"0.3s",
                }}>

                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>

                <div style={{
                    animatinDelay:"0.5s",
                }}>

                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>

                <div style={{
                    animatinDelay:"0.7s",
                }}>

                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>

                <div style={{
                    animatinDelay:"1s",
                }}>

                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>

    </>
  );
};


export default Home;
