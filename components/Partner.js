import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Partner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import right from '../public/images/homebanner/right-arrow.webp'
import laptop from '../public/images/partner/laptop.webp'
import servicecard from '../public/images/partner/service-card.webp'

import hybird from '../public/images/partnerpoiny/d-hybrid.webp'
import native from '../public/images/partnerpoiny/d-native.webp'

const Partner = () => {


    function openZendeskChat(e) {
        e.preventDefault();
        if (typeof zE !== 'undefined') {
          zE('webWidget', 'open')
        }
      }

    let prtnrSlider = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className={styles.hearfelt}>
            <Container>
                <Row className={`${styles.project} justify-content-between`}>
                    <Col lg={12}>
                        <h3 className="f-20 white f-montserrat f-700 mb-2 letterspace t-center">Platforms</h3>
                    </Col>
                    <Col lg={12}>
                        <h2 className="f-50 f-playfair f-700 white t-center"> <span className='grdiant'>
                            Best App Making Company</span> <br className="d-lg-block d-none" />
                            Technologies We Used
                        </h2>
                        <p className='font16 f-montserrat white mb-5 t-center'>
                            Bitswits turns inventive ideas into groundbreaking mobile apps! Our award-winning app developers know hybrid and native technologies, so your project is in good hands. With us, your project will be a success from start to finish!
                        </p>
                    </Col>
                </Row>
                
                <div className='d-lg-block d-none'>
                    <Row className='gy-5'>
                        <Col lg={6}>
                            <div className={styles.rightpadding}>
                                <h3 className="white f-30 f-playfair f-700 mb-3">Hybrid <br className="d-none d-xl-block" /> <span className='grdiant'>App Development</span> </h3>
                                <Image alt="bitswits" src={hybird} className='img-fluid mt-2 mb-4' />
                                <p className="f-16 white f-500 f-montserrat mb-4 ">
                                    BitsWits take pride in developing hybrid apps that are visually stunning and perform exceptionally well. Our team of skilled hybrid app developers leverages the latest technologies to create fast, secure, and user-friendly apps, ensuring your business stays ahead of the curve with:
                                </p>

                                <ul className='p-0'>
                                    <li className="f-14 white f-500 f-montserrat">1. Cross-platform Compatibility.</li>
                                    <li className="f-14 white f-500 f-montserrat">2. Accelerated Development Cycle.</li>
                                    <li className="f-14 white f-500 f-montserrat">3. Customizable UI/UX Design.</li>
                                    <li className="f-14 white f-500 f-montserrat">4. Cost-Effective Single Codebase Solution.</li>
                                </ul>

                                <Link href="#" onClick={openZendeskChat} className={styles.arrowBtn}>
                                    <span className="grdiant f-poppins f-600 f-capitalize">Talk To Our Experts</span>

                                </Link>

                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.leftpadding}>
                                <h3 className="white f-30 f-playfair f-700 mb-3">Native <br className="d-none d-xl-block" />  <span className='grdiant'>App Development</span> </h3>
                                <Image alt="bitswits" src={native} className='img-fluid mt-2 mb-4' />
                                <p className="f-16 white f-500 f-montserrat mb-4 ">
                                    BitsWits specializes in creating native applications that provide users with the best experience. With our native app developers, we deeply understand the most popular operating systems and programming languages to ensure that any app developed with us will have professional performance. Our key focus includes:
                                </p>

                                <ul className='p-0'>
                                    <li className="f-14 white f-500 f-montserrat">1. High Performance Platform-Optimization.</li>
                                    <li className="f-14 white f-500 f-montserrat">2. Access To Device Features & Integration.</li>
                                    <li className="f-14 white f-500 f-montserrat">3. Customized UI/UX Application Design.</li>
                                    <li className="f-14 white f-500 f-montserrat">4. Robust & Adaptable Mobile Application.</li>
                                </ul>
                                <Link href="#" onClick={openZendeskChat} className={styles.arrowBtn}>
                                    <span className="grdiant f-poppins f-600 f-capitalize">Talk To Our Experts</span>

                                </Link>

                            </div>
                        </Col>
                    </Row>
                </div>

                <div className='d-lg-none d-block'>
                    <Slider {...prtnrSlider}>
                        <div className={styles.rightpadding}>
                            <h3 className="white f-30 f-playfair f-700 mb-3">Hybrid <br className="d-none d-xl-block" /> <span className='grdiant'>App Development</span> </h3>
                            <Image alt="bitswits" src={hybird} className='img-fluid mt-2 mb-4' />
                            <p className="f-16 white f-500 f-montserrat mb-4 ">
                                BitsWits take pride in developing hybrid apps that are visually stunning and perform exceptionally well. Our team of skilled hybrid app developers leverages the latest technologies to create fast, secure, and user-friendly apps, ensuring your business stays ahead of the curve with:
                            </p>

                            <ul className='p-0'>
                                <li className="f-14 white f-500 f-montserrat">1. Cross-platform Compatibility.</li>
                                <li className="f-14 white f-500 f-montserrat">2. Accelerated Development Cycle.</li>
                                <li className="f-14 white f-500 f-montserrat">3. Customizable UI/UX Design.</li>
                                <li className="f-14 white f-500 f-montserrat">4. Cost-Effective Single Codebase Solution.</li>
                            </ul>

                            <Link href="#" onClick={openZendeskChat} className={styles.arrowBtn}>
                                <span className="grdiant f-poppins f-600 f-capitalize">Talk To Our Experts</span>

                            </Link>

                        </div>
                        <div className={styles.leftpadding}>
                            <h3 className="white f-30 f-playfair f-700 mb-3">Native <br className="d-none d-xl-block" />  <span className='grdiant'>App Development</span> </h3>
                            <Image alt="bitswits" src={native} className='img-fluid mt-2 mb-4' />
                            <p className="f-16 white f-500 f-montserrat mb-4 ">
                                BitsWits specializes in creating native applications that provide users with the best experience. With our native app developers, we deeply understand the most popular operating systems and programming languages to ensure that any app developed with us will have professional performance. Our key focus includes:
                            </p>

                            <ul className='p-0'>
                                <li className="f-14 white f-500 f-montserrat">1. High Performance Platform-Optimization.</li>
                                <li className="f-14 white f-500 f-montserrat">2. Access To Device Features & Integration.</li>
                                <li className="f-14 white f-500 f-montserrat">3. Customized UI/UX Application Design.</li>
                                <li className="f-14 white f-500 f-montserrat">4. Robust & Adaptable Mobile Application.</li>
                            </ul>
                            <Link href="#" onClick={openZendeskChat} className={styles.arrowBtn}>
                                <span className="grdiant f-poppins f-600 f-capitalize">Talk To Our Experts</span>

                            </Link>

                        </div>
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default Partner