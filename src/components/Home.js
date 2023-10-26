import React from 'react';
import resume from '../assets/resume.pdf';
import profile from '../assets/pfp.jpeg';
import { HomeStyles } from '../styles/HomeStyles';
import { AiFillGithub, AiFillLinkedin, AiOutlineFile } from 'react-icons/ai';



export default function Home() {

    const bio = "Hi, I am software engineer proficient in JavaScript, Java and Ruby with an academic background in information technology, data analytics and data management. I made this portfolio in React to showcase my developer skills and highlight my work experience. My resume is also available below as well as my contact email, feel free to le me know your thoughts."

    function downloadCV(){
        window.open(resume)
    }

    return (
        <HomeStyles>
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
                <AiFillGithub
                    className="github-icon"
                    onClick={() => window.open('https://github.com/kody-samaroo?tab=repositories')}
                />
                <AiFillLinkedin
                    className="linkedin-icon"
                    onClick={() => window.open('https://www.linkedin.com/in/kody-samaroo/')}
                />
                <AiOutlineFile
                    className="resume-icon"
                    onClick={downloadCV}
                />
            </div>

            <br/>
            <div className="home-about">
                {bio}
            </div>
        </div>
        </HomeStyles>
    )
}