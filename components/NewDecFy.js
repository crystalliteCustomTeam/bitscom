import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/NewDecFy.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import team1 from '../public/images/hire/1.webp'
import team2 from '../public/images/hire/2.webp'
import team3 from '../public/images/hire/3.webp'
import team4 from '../public/images/hire/4.webp'
import team5 from '../public/images/hire/5.webp'
import team6 from '../public/images/hire/6.webp'
import team7 from '../public/images/hire/7.webp'
import team8 from '../public/images/hire/8.webp'
import team9 from '../public/images/hire/9.webp'


const NewDecFy = () => {

    let teamSlider = {
        centerMode: true,
        centerPadding: '80px',
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 3,
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.resources}>
                <section className={`${styles.team}`}>
                    <Row className={styles.teamRow}>
                        <Col lg={12}>
                            <Slider {...teamSlider}>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team1}

                                    />
                                    <p className='font11 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Skilled Team
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team2}

                                    />
                                    <p className='font11 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Guaranteed <br /> Innovation
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team3}

                                    />
                                    <p className='font11 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Result-Driven <br /> Approach
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team4}

                                    />
                                    <p className='font11 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Quality & Security
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team5}

                                    />
                                    <p className='font11 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Increase ROI
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team6}

                                    />
                                    <p className='font11 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                       12+ Years <br /> Of Experience
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team6}

                                    />
                                    <p className='font11 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                       500+ <br /> Dedicated Developers
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team6}

                                    />
                                    <p className='font11 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                       6500+ <br /> Happy Clients
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team6}

                                    />
                                    <p className='font11 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                      10000+ <br /> PROJECTS DELIVERED
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team7}

                                    />
                                    <p className='font11 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        In-Depth Domain <br /> Knowledge
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team8}

                                    />
                                    <p className='font11 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Integrity <br /> Transparency
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team9}

                                    />
                                    <p className='font11 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Quick and Easy  <br /> Communication
                                    </p>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </section>
            </section>
        </>
    )
}

export default NewDecFy
