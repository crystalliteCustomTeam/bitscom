import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Hireus.module.css'
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

const Hireus = (props) => {

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
            <section className={`${styles.resources} ${styles[props.bgColor]}`}>
                <section className={styles.hireUs}>
                    <Container>

                        <Row className={`${styles.project} justify-content-between`}>
                            <Col lg={12}>
                                <h5 className='font20 fontf font-semibold mt-1 mb-3 letterspace black t-center'>Why Hire Us?</h5>
                            </Col>
                            <Col lg={12}>
                                <h2 className="black f-50 f-700 f-playfair t-center">
                                    What Makes <span className='grdiant'>Bitswits The Most
                                        Recommended Mobile App  Development</span> Company?
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <p className="black text-center f-16 f-400 t-justify mt-3 mb-4">
                                    As the leading mobile app development agency, we've gathered top-notch resources to create exceptional solutions for mobile applications. We have been crafting and will continue to develop unique apps across various platforms, including iOS, Android, Xamarin, and beyond. Our unbridled passion for the most cutting-edge technologies fuels us to continually evolve and innovate, allowing us to instantly provide unparalleled solutions to our valued clients.
                                </p>
                                <a href='#contact' className={`${styles.btnHire}`}>
                                    Get Free Consultation
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* <section className={`${styles.team} mt-4 mt-lg-5`}>
                    <Row className={styles.teamRow}>
                        <Col lg={12}>
                            <Slider {...teamSlider} className='mt-3'>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team1}

                                    />
                                    <p className='f-14 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Skilled Team
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team2}

                                    />
                                    <p className='f-14 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Guaranteed <br /> Innovation
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team3}

                                    />
                                    <p className='f-14 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Result-Driven <br /> Approach
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team4}

                                    />
                                    <p className='f-14 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Quality & Security
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team5}

                                    />
                                    <p className='f-14 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Increase ROI
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team6}

                                    />
                                    <p className='f-14 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Non-Disclosure <br /> Agreement
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team7}

                                    />
                                    <p className='f-14 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        In-Depth Domain <br /> Knowledge
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team8}

                                    />
                                    <p className='f-14 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Integrity <br /> Transparency
                                    </p>
                                </div>
                                <div className={styles.slideBox}>
                                    <Image alt="bitswits" className='img-fluid mx-auto'
                                        src={team9}

                                    />
                                    <p className='f-14 f-500 f-montserrat white mb-0 mt-2 f-uppercase'>
                                        Quick and Easy  <br /> Communication
                                    </p>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </section> */}
            </section>
        </>
    )
}

export default Hireus