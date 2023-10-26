import React from 'react';
import WorkItem from './WorkItem';
import { WorkStyles } from '../styles/WorkStyles';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

export default function Journeys() {

    SwiperCore.use([Navigation]);

    const works = [
        {
            company: 'Ever Ready Group',
            img: 'https://static.wixstatic.com/media/39d575_44171a19d48f4e3f96e388222be676f5~mv2.jpg/v1/fit/w_2500,h_1330,al_c/39d575_44171a19d48f4e3f96e388222be676f5~mv2.jpg',
            date: '03/23 - current',
            desc: 'I assisted in the purchasing of high valued goods while maintaining an efficent supply chain. I organized databases, spreadsheets and communicated with both suppliers and consumers in order to maximize profits. I have learned to write complex Excel and SQL formulas to track down data in order to solve multi-layered problems.'
        },
        {
            company: 'Dun & Bradstreet',
            img: 'https://peprofessional.com/wp-content/uploads/2021/08/d-and-b-f1-1024x770.png',
            date: '09/21 - 08/22',
            desc: 'I worked as a software engineer for Dun & Bradstreet for a year. I specialized in automating and intergrated microservices. I built apis, troubleshooted customer issues and wrote code for complex JSON objects. My time there taught me a lot about cloud based technologies, agilie idealogies and versioning control.'
        },
        {
            company: 'Flatiron Bootcamp',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMeSulUZ5RiJtpz1ybIqUNrmy3Ss8qIPbN207HZEgdcgm2TtYQTNum7S4FFOrjrhm-P4&usqp=CAU',
            date: '11/20 - 04/21',
            desc: 'I enrolled in Flatiron\'s coding bootcamp the end of 2020 during the pandemic as a way to learn some skills remotely. It was an immersive experience where I spent close to 60 hours a week learning Ruby, React, building full stack projects and learning the basics of computer science. I learned so much quickly as well as the skills to step into new codebases and stacks.'
        },
        {
            company: 'Merck & Co.',
            img: 'https://agiobrandsolutions.com/wp-content/uploads/2020/05/merck-co-inc-logo-vector.png',
            date: '03/2019 - 07/2020',
            desc: "I worked as an ETL data analyst for Merck's eDiscovery legal department. I performed data analysis on large structured datasets and formated unstructured data. I worked with CRMs like Salesforce to perform and present findings for our team and consistently followed proper data intergrity protocols."
        }
    ]

    return (
        <WorkStyles>
        <div className="work">
            <h2> Work Experience </h2>
            <div className="work-items">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                >
                {works.map((work, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <WorkItem
                                company={work.company}
                                img={work.img}
                                date={work.date}
                                desc={work.desc}
                            />
                        </SwiperSlide>
                    );
                })}
                </Swiper>
            </div>
        </div>
        </WorkStyles>
    )
}