import React from 'react'
import styles from '@/styles/Ourportfoliolp.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourportfolio1 from '../public/images/ourportfoliolp/1.jpg'
import ourportfolio2 from '../public/images/ourportfoliolp/2.jpg'
import ourportfolio3 from '../public/images/ourportfoliolp/3.jpg'
import ourportfolio4 from '../public/images/ourportfoliolp/4.jpg'
import ourportfolio5 from '../public/images/ourportfoliolp/5.jpg'
import ourportfolio6 from '../public/images/ourportfoliolp/6.jpg'
import ourportfolio7 from '../public/images/ourportfoliolp/7.jpg'


import Image from 'next/image';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Ourportfoliolp = () => {

    var awardslogo = {
        dots: false,
        arrows: true,
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
                    dots: false,
                    arrows: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                    arrows: false,
                }
            },
        ]
    };

    return (
        <>
            <section className={styles.ourportfolio} id='work'>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={12}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace black t-center'>Work</h5>
                        </Col>
                        <Col lg={12}>
                            <h2 className='font65 black fontf font-bold line60 black t-center'>Our <span className='grdiant'>Portfolio</span></h2>
                        </Col>
                        {/* <Col lg={3}>
                            <Link className={styles.bttns1} href="/our-work">View All Work</Link>
                        </Col> */}
                    </Row>

                    <Slider {...awardslogo} className='mt-lg-5 pt-3 ourarrows2'>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio1} className="img-fluid  mb-4" />
                            <a className='fontf font25 black font-bold mt-4' href='#header'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </a>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio2} className="img-fluid  mb-4" />
                            <a className='fontf font25 black font-bold mt-4' href='#header'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </a>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio3} className="img-fluid  mb-4" />
                            <a className='fontf font25 black font-bold mt-4' href='#header'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </a>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio4} className="img-fluid mb-4" />
                            <a className='fontf font25 black font-bold mt-5' href='#header'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </a>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio5} className="img-fluid mb-4" />
                            <a className='fontf font25 black font-bold mt-5' href='#header'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </a>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio6} className="img-fluid mb-4" />
                            <a className='fontf font25 black font-bold mt-5' href='#header'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </a>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio7} className="img-fluid mb-4" />
                            <a className='fontf font25 black font-bold mt-5' href='#header'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </a>
                        </div>
                      
                    </Slider>
                 
                </Container>
            </section>

        </>
    )
}

export default Ourportfoliolp