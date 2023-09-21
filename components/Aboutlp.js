import React from 'react'
import styles from '@/styles/Aboutlp.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import icon1 from '../public/images/about/icon1.svg'
import icon2 from '../public/images/about/icon2.svg'
import icon3 from '../public/images/about/icon3.svg'
import icon4 from '../public/images/about/icon4.svg'
import icon5 from '../public/images/about/icon5.svg'
import icon6 from '../public/images/about/icon6.svg'
import thumb1 from '../public/images/about/thumbnail-1.png'
import thumb2 from '../public/images/about/thumbnail-2.png'
import thumb3 from '../public/images/about/thumbnail-3.png'
import thumb4 from '../public/images/about/thumbnail-4.png'
import thumb5 from '../public/images/about/thumbnail-5.png'
import thumb6 from '../public/images/about/thumbnail-6.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Aboutlp = () => {

    var awardslogo = {
        dots: true,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <>
            <section className={styles.aboutus} id='about'>

                <Container>
                    <Row className='aboutfold'>
                        {/* <Col md={2}>
                            <h3 className='font20 fontf font-semibold mt-1 letterspace black'>About Us</h3>
                        </Col> */}
                        <Col lg={12}>
                        <h3 className='font20 fontf font-semibold mt-1 letterspace black t-center'>About Us</h3>
                            <h2 className='font50 black fontf font-bold line60 t-center'>The Mobile <span className='grdiant'>App Development Company </span> Thriving to Master Innovation! </h2>

                            <p className='font18 fontf font-medium my-4 black t-center'>Our expert<span className='grdiant'> mobile app developers </span> work with the world’s leading start-ups, mid-level companies and enterprises to create advanced user experiences. </p>

                            <p className='font18 fontf font-medium black t-center'>Witness the brilliance of our diverse portfolio which includes sound, food, pro-health improvement, real estate, traveling, and much more.  </p>

                            {/* <Button className={styles.aboutbtn}>CALL NOW!</Button> */}

                            {/* <div className="mt-4">
                                <div className="row f-center align-items-start">
                                    <div className="col-lg-3">
                                        <div className={styles.counterBox}>
                                            <h3 className="font50 font-bold white mb-0">
                                                12+
                                            </h3>
                                            <p className="font14 font-bold white">Year Of Experiance</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className={styles.counterBox}>
                                            <h3 className="font50 font-bold white mb-0">
                                                300+
                                            </h3>
                                            <p className="font14 font-bold white">Our Employess</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className={styles.counterBox}>
                                            <h3 className="font50 font-bold white mb-0">
                                                500+
                                            </h3>
                                            <p className="font14 font-bold white">Applications Developed and Designed</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className={styles.counterBox}>
                                            <h3 className="font50 font-bold white mb-0">
                                                92%
                                            </h3>
                                            <p className="font14 font-bold white">Client Retention</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </Col>
                    </Row>
                </Container>


            </section>


        </>
    )
}

export default Aboutlp