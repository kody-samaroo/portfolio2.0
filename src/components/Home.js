import React from 'react';
import resume from '../assets/resume.pdf';
import profile from '../assets/pfp.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/Home.css";


export default function Home() {

    const bio = "A software engineer proficient in JavaScript, React and Ruby frameworks with a background study in  information technology, data analytics and data management. I am a competent team member able to shine in any role and empower other team members around me. I am motivated to use new technologies to find simple solutions to solve complex problems."

    function downloadCV(){
        window.open(resume)
    }

    return (
        <div className="home">
            <div className="home-splash">
                <img className="home-img" src={profile} alt="Profile"/>

                <div className="home-name">
                    <p> Kody Samaroo </p>
                </div>
                <div className="home-bio">
                    <p> Software Engineer </p>
                </div>
            </div>

            <div className="home-icons">
                <FontAwesomeIcon icon="fa-brands fa-github"
                    className="github-icon"
                    onClick={() => window.open('https://github.com/jodycola?tab=repositories')}
                />
                <FontAwesomeIcon icon="fa-brands fa-linkedin"
                    className="linkedin-icon"
                    onClick={() => window.open('https://www.linkedin.com/in/kody-samaroo/')}
                />
            </div>

            <br/>
            <div className="home-about">
                {bio}
            </div>

            <br/>

            <div className="home-buttons">
                <button
                    class="btn btn-dark btn-outline-light"
                    onClick={downloadCV}
                > View Resume
                </button>
            </div>
        </div>

    )
}