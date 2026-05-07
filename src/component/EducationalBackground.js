import React, { useEffect } from 'react';
import './EducationalBackground.css'
import Pendidikan from './images/pendidikan.png'
import Aos from "aos";
import "aos/dist/aos.css";

export default function EducationalBackground() {

    useEffect(() => {
        Aos.init({ once: true });
    }, []);

    return (
        <div id='Education' className='edu-wrapper'>

            <h2 className='edu-title' data-aos="fade-up">
                Educational Background
            </h2>

            <div className='edu-container'>

                <div className='edu-left' data-aos="fade-right">
                    <img src={Pendidikan} alt="pendidikan" />
                </div>

                <div className='edu-right'>

                    <div className='edu-card' data-aos="fade-up">
                        <h3>Sekolah Dasar</h3>
                        <p>MI Ma'arif NU Kedungrandu</p>
                        <span>2006 - 2011</span>
                    </div>

                    <div className='edu-card' data-aos="fade-up" data-aos-delay="100">
                        <h3>SMP</h3>
                        <p>SMPN 2 Karanglewas</p>
                        <span>2013 - 2016</span>
                    </div>

                    <div className='edu-card' data-aos="fade-up" data-aos-delay="200">
                        <h3>SMK (RPL)</h3>
                        <p>SMK Telkom Sandhy Putra Purwokerto</p>
                        <span>2016 - 2018</span>
                    </div>

                    <div className='edu-card' data-aos="fade-up" data-aos-delay="300">
                        <h3>Kuliah (S1 RPL)</h3>
                        <p>Institut Teknologi Telkom Purwokerto</p>
                        <span>2018 - 2022</span>
                    </div>

                </div>
            </div>

        </div>
    );
}