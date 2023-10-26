import React from 'react'
import ProjectItem from './ProjectItem';
import { ProjectStyles } from '../styles/ProjectStyles';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

import hexcode from '../assets/swiper-images/hexcode.png';


function Projects() {

    SwiperCore.use([Navigation]);


    const projects = [
        {
            title: 'Hexcode Guessing Game',
            stack: ['React', 'React-Bootstrap', 'Javascript'],
            desc: 'A hexcode guessing game that allows programmers to get more familar with identifying hexcodes',
            img: hexcode,
            github: 'https://github.com/kody-samaroo/hexcode-ui',
            website: 'https://thehexcodeguesser.netlify.app/',
            demo: null,
        },
        {
            title: 'Browser Code IDE',
            stack: ['Ruby on Rails', 'React', 'React-Bootstrap'],
            desc: 'A web broswer friendly development environment that allows programmers to write code and see the results of their builds',
            img: 'https://user-images.githubusercontent.com/73686621/115886524-0339e780-a41f-11eb-99b8-7a8b561e97d6.png',
            github: 'https://github.com/jodycola/Code-Bucket',
            website: 'https://code-bucket.netlify.app/',
            demo: 'https://youtu.be/bqG-OQ9KRnQ'
        },
        {
            title: 'Chatroom',
            stack: ['Ruby on Rails', 'Action Cable', 'React', 'Styled-Components, Redis'],
            desc: 'A messaging application where users can send and receive messages in real time',
            img: 'https://user-images.githubusercontent.com/73686621/129642799-d1f066e7-83fa-482a-95df-9804f16e658d.png',
            github: 'https://github.com/jodycola/Let-s-Chat',
            website: null,
            demo: 'https://youtu.be/fHikvpwC8KU'
        },
        {
            title: 'TypeScript Weather App',
            stack: ['TypeScript', 'React', 'Web Scrapping'],
            desc: 'Search for weather data and forecast for cities in the US. Webscrapping Openweather API',
            img: 'https://user-images.githubusercontent.com/73686621/129249752-59e859ae-1cd9-464a-97df-fe31b23b08c2.png',
            github: 'https://github.com/jodycola/TypeScript-Weather-App',
            website: 'https://typescript-weather.netlify.app/',
            demo: null
        }
    ]

  return (
    <ProjectStyles>
        <div className="projects">
            <h2> Projects </h2>
            <div className="project-items">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
            >
                {projects.map((project, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <ProjectItem
                                title={project.title}
                                stack={project.stack}
                                desc={project.desc}
                                img={project.img}
                                github={project.github}
                                website={project.website}
                                demo={project.demo}
                            />
                        </SwiperSlide>
                    );
                })}
                </Swiper>
            </div>
        </div>
        </ProjectStyles>
  )
}

export default Projects