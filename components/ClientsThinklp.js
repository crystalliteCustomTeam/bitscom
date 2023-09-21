import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/ClientsThinklp.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
//images
import soulsound from '../public/images/clients/soulsound.png'
import prohealth from '../public/images/clients/prohealth.png'
import glowspa from '../public/images/clients/glowspa.png'
import blisstravel from '../public/images/clients/blisstravel.png'
import markplace from '../public/images/clients/markplace.png'

import ezride from '../public/images/clients/ezride.jpg'
import findfood from '../public/images/clients/findfood.jpg'

import slidebefore from '../public/images/clients/stars.png'

function ClientsThinklp() {

    var clientsthink = {
        dots: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
    };

    var clientsthinkMbl = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <>
            <section className={styles.ourClients}>
                <Container>
                    <Row className={styles.clients}>
                        <Col lg={12}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace black mb-0 t-center'>Reviews</h5>
                        </Col>
                        <Col lg={12}>
                            <h2 className='font50 black fontf font-bold line60 mb-0 t-center'>
                                Feedback From  <br /> <span className='grdiant'>Our Valued Clients!</span>

                            </h2>
                        </Col>
                        {/* <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                View All
                            </Link>
                        </Col> */}
                        <Col lg={12}>
                            <div className='mt-5'>
                                <Slider {...clientsthink} className={`${styles.clintSlider} clintSlider`}>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={soulsound}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-1 mb-0`}>
                                                            BitsWits was a lifesaver for our business. We needed to create an app that could be used on
                                                            multiple platforms, but we didn’t have a lot of technical know-how or additional development
                                                            resources. Their team made it easy for us and delivered exactly what we needed. They stayed on
                                                            top of our project and kept us informed throughout the process. We wouldn't hesitate to
                                                            recommend them for any of your app development needs!
                                                        </p>
                                                        <h5 className='font16 font-semibold fontf black mt-3 mb-0'>
                                                            Bryce Carlos
                                                        </h5>
                                                        <p className='font14 fontf black mt-1 mb-0 pb-0'>
                                                            CEO / Founder Soul Sound
                                                        </p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>
                                                                Soul Sound Application
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2021</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>
                                                                Mobile App Development
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={prohealth}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-3 mb-0`}>

                                                            We hired mobile app developers to create a completely new mobile app for our company. The team
                                                            at BitsWits was really professional, efficient, and knowledgeable in the latest technologies and
                                                            trends. We couldn't be happier with the results and will definitely be recommending them to
                                                            anyone looking for top-notch mobile app development company.

                                                        </p>
                                                        <h5 className='font16 font-semibold fontf black mt-4 mb-0'>
                                                            Aden Ward
                                                        </h5>
                                                        <p className='font14 fontf black mt-1 mb-0 pb-0'>
                                                            CO-FOUNDER PRO HEALTH
                                                        </p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>
                                                                Pro Health Application
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2018</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>
                                                                Web Design & Mobile Development
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={findfood}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-3 mb-0`}>
                                                            We recently worked with BitsWits to build a custom mobile app for our business. Their mobile app
                                                            development company team was very knowledgeable and professional throughout the entire process,
                                                            providing expert guidance and support every step of the way. We would highly recommend them to
                                                            anyone looking for a reliable and cost-effective mobile app development solution.
                                                        </p>
                                                        <h5 className='font16 font-semibold fontf black mt-4 mb-0'>
                                                            Annabella Josh
                                                        </h5>
                                                        <p className='font14 fontf black mt-1 mb-0 pb-0'>
                                                            CEO - Find Food
                                                        </p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>
                                                                Find Food Application
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2022</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design, Mobile Application And Marketing</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={ezride}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-3 mb-0`}>
                                                            We were looking for a reliable team of Flutter app developers, and we found the perfect fit in
                                                            BitsWits. Their expertise and commitment to quality resulted in an exceptional app that exceeded
                                                            our expectations. We highly recommend their services!

                                                        </p>
                                                        <h5 className='font16 font-semibold fontf black mt-4 mb-0'>
                                                            Abraham Jones
                                                        </h5>
                                                        <p className='font14 fontf black mt-1 mb-0 pb-0'>
                                                            CO-FOUNDER EZ Ride
                                                        </p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>
                                                                EZ Ride Application
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2017</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>
                                                                Desktop & Mobile Application Development
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={blisstravel}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-3 mb-0`}>
                                                            We're very satisfied with the results of our working relationship with BitsWits.
                                                            We were able to create a high-quality mobile app that not only met our specifications but
                                                            exceeded them in every way. The entire team was friendly and professional throughout the entire
                                                            process, and we would definitely recommend their services to anyone looking for a reliable
                                                            custom app development company.

                                                        </p>
                                                        <h5 className='font16 font-semibold fontf black mt-4 mb-0'>
                                                            Chavi Miles
                                                        </h5>
                                                        <p className='font14 fontf black mt-1 mb-0 pb-0'>
                                                            Co-Founder / Bliss Travel
                                                        </p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>
                                                                Bliss Travel Application
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2022</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>
                                                                Blockchain And Mobile Application
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={markplace}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-3 mb-0`}>
                                                            BitsWits have done a great job making an attractive and eye-catching IOS application.
                                                            I am grateful to the team for delivering this application perfectly on very short notice.
                                                            Thanks a lot.

                                                        </p>
                                                        <h5 className='font16 font-semibold fontf black mt-4 mb-0'>
                                                            Andrew Drake
                                                        </h5>
                                                        <p className='font14 fontf black mt-1 mb-0 pb-0'>
                                                            Founder and CEO / Mark Place
                                                        </p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>
                                                                Mark Place Application
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2022</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>
                                                                Blockchain And Mobile Application
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>



                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={glowspa}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-3 mb-0`}>
                                                            Hiring Flutter app developers from BitsWits was one of the best decisions I have ever made. They
                                                            are highly skilled and knowledgeable professionals who understand customer needs and deliver
                                                            well-crafted solutions to us. Overall, we are extremely satisfied with their service and highly
                                                            recommend them to anyone looking for reliable and cost-effective Flutter solutions.

                                                        </p>
                                                        <h5 className='font16 font-semibold fontf black mt-4 mb-0'>
                                                            Winnie Brooks
                                                        </h5>
                                                        <p className='font14 fontf black mt-1 mb-0 pb-0'>
                                                            Founder and CEO / Glow Spa
                                                        </p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>
                                                                Glow Spa Application
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2022</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>
                                                                Blockchain And Mobile Application
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*========== slider for mobile =========*/}

            <section className={styles.ourClientsMbl}>
                <Container>
                    <Row className={styles.clients}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace black mb-0'>Reviews</h5>
                        </Col>
                        <Col lg={7}>
                            <h4 className='font50 black fontf font-bold line60 mb-0'>
                                <span className='grdiant'>What Clients</span> <br />
                                Think About US
                            </h4>
                        </Col>
                        <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                View All
                            </Link>
                        </Col>
                        <Col lg={12}>
                            <div className='mt-5'>
                                <Slider {...clientsthinkMbl} className={`${styles.clintSlider} clintSlidermbl`}>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={soulsound}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-2 mb-0`}>BitsWits was a lifesaver for our business. We needed to create an app that could be used on
                                                            multiple platforms, but we didn’t have a lot of technical know-how or additional development
                                                            resources. Their team made it easy for us and delivered exactly what we needed. They stayed on
                                                            top of our project and kept us informed throughout the process. We wouldn't hesitate to
                                                            recommend them for any of your app development needs!</p>
                                                        <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                            Bryce Carlos
                                                        </h5>
                                                        <p className='font12 fontf black mt-1 mb-0 pb-3'>CEO / Founder Soul Sound</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>Soul Sound Application</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={prohealth}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-2 mb-0`}>We hired mobile app developers to create a completely new mobile app for our company. The team
                                                            at BitsWits was really professional, efficient, and knowledgeable in the latest technologies and
                                                            trends. We couldn't be happier with the results and will definitely be recommending them to
                                                            anyone looking for top-notch mobile app development company.</p>
                                                        <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                            Aden Ward
                                                        </h5>
                                                        <p className='font12 fontf black mt-1 mb-0 pb-3'>Co-Founder ProHealth</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>ProHealth Application</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={findfood}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-2 mb-0`}> We recently worked with BitsWits to build a custom mobile app for our business. Their mobile app
                                                            development company team was very knowledgeable and professional throughout the entire process,
                                                            providing expert guidance and support every step of the way. We would highly recommend them to
                                                            anyone looking for a reliable and cost-effective mobile app development solution.</p>
                                                        <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                            Annabella Josh
                                                        </h5>
                                                        <p className='font12 fontf black mt-1 mb-0 pb-3'> CEO Find Food </p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>Find Food Application</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={ezride}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-2 mb-0`}>We were looking for a reliable team of Flutter app developers, and we found the perfect fit in
                                                            BitsWits. Their expertise and commitment to quality resulted in an exceptional app that exceeded
                                                            our expectations. We highly recommend their services!</p>
                                                        <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                            Abraham Jones
                                                        </h5>
                                                        <p className='font12 fontf black mt-1 mb-0 pb-3'>Co-Founder EZ Ride</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>EZ Ride Application</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>




                                        </Row>
                                    </div>


                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={blisstravel}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-2 mb-0`}> We're very satisfied with the results of our working relationship with BitsWits.
                                                            We were able to create a high-quality mobile app that not only met our specifications but
                                                            exceeded them in every way. The entire team was friendly and professional throughout the entire
                                                            process, and we would definitely recommend their services to anyone looking for a reliable
                                                            custom app development company.</p>
                                                        <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                            Chavi Miles
                                                        </h5>
                                                        <p className='font12 fontf black mt-1 mb-0 pb-3'>Co-Founder Bliss Travel</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>Bliss Travel Application</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>




                                        </Row>
                                    </div>

                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={markplace}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-2 mb-0`}>  BitsWits have done a great job making an attractive and eye-catching IOS application.
                                                            I am grateful to the team for delivering this application perfectly on very short notice.
                                                            Thanks a lot.</p>
                                                        <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                            Andrew Drake
                                                        </h5>
                                                        <p className='font12 fontf black mt-1 mb-0 pb-3'>Co-Founder Mark Place</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>Mark Place Application</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>




                                        </Row>
                                    </div>

                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={glowspa}

                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image alt="bitswits" className='img-fluid'
                                                            src={slidebefore}

                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-2 mb-0`}>  Hiring Flutter app developers from BitsWits was one of the best decisions I have ever made. They
                are highly skilled and knowledgeable professionals who understand customer needs and deliver
                well-crafted solutions to us. Overall, we are extremely satisfied with their service and highly
                recommend them to anyone looking for reliable and cost-effective Flutter solutions.</p>
                                                        <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                        Winnie Brooks
                                                        </h5>
                                                        <p className='font12 fontf black mt-1 mb-0 pb-3'>Co-Founder Glow Spa</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>Glow Spa Application</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>




                                        </Row>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ClientsThinklp