import React from 'react'
import styles from '@/styles/Ready.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ready = () => {


    function openZendeskChat(e) {
        e.preventDefault();
        if (typeof zE !== 'undefined') {
          zE('webWidget', 'open')
        }
      }


    let teamSlider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    };



    return (
        <>
            <section className={styles.pont}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className='pb-3 f-50 fontf f-700 black t-center'> <span className='grdiant'>Ready For Success?</span>  <br></br> Brace Yourself for What Happens Next</h2>
                        </Col>
                    </Row>
                    <Row className={ `${styles.phone} gy-3` }>
                        <Col lg={4}>
                            <h4 className='black font70 fontf f-700  t-center'>01</h4>
                            <h3 className='f-40 fontf f-700 black t-center'>Talk To Our <span className='grdiant'>Experts</span> </h3>
                            <p className='font16 font-medium pt-2 pb-2'>Contact us without obligation by email or phone
                                and secure your free consultation.</p>

                            <a className={styles.btno} href="#contact">
                                Get Free Consultation
                            </a>

                        </Col>
                        <Col lg={4}>
                            <h4 className='black font70 fontf f-700  t-center'>02</h4>
                            <h3 className='f-40 fontf f-700 black t-center'>Get A <span className='grdiant'>Quote</span> </h3>
                            <p className='font16 font-medium pt-2 pb-2'>Get an exact cost breakdown structure <br></br> of your
                                app</p>

                            <Link className={styles.btno}  onClick={openZendeskChat} href="#">
                                Chat Now
                            </Link>

                        </Col>
                        <Col lg={4}>
                            <h4  className='black font70 fontf f-700  t-center'>03</h4>
                            <h3 className='f-40 fontf f-700 black t-center'>Build An <span className='grdiant'>MVP</span> </h3>
                            <p className='font16 font-medium pt-2 pb-2'>We develop MVPs that are ready <br></br> to tap the
                                market</p>

                            <Link className={styles.btno} href="tel:(718) 734-2945">
                                Call Now
                            </Link>

                        </Col>
                    </Row>

                    <Slider {...teamSlider} className={styles.secure}>

                        <div>
                        <h4 className='black font70 fontf f-700  t-center'>01</h4>
                            <h3 className='f-40 fontf f-700 black t-center'>Talk To Our <span className='grdiant'>Experts</span> </h3>
                            <p className='font16 font-medium pt-2 pb-2'>Contact us without obligation by email or phone
                                and secure your free consultation.</p>

                            <Link className={styles.btno} href="#">
                                Get Free Consultation
                            </Link>
                        </div>
                        <div>
                        <h4 className='black font70 fontf f-700  t-center'>02</h4>
                            <h3 className='f-40 fontf f-700 black t-center'>Get A <span className='grdiant'>Quote</span> </h3>
                            <p className='font16 font-medium pt-2 pb-2'>Get an exact cost breakdown structure <br></br> of your
                                app</p>

                            <Link className={styles.btno} href="#">
                                Chat Now
                            </Link>
                        </div>
                        <div>
                        <h4  className='black font70 fontf f-700  t-center'>03</h4>
                            <h3 className='f-40 fontf f-700 black t-center'>Build An <span className='grdiant'>MVP</span> </h3>
                            <p className='font16 font-medium pt-2 pb-2'>We develop MVPs that are ready <br></br> to tap the
                                market</p>

                            <Link className={styles.btno} href="#">
                                Call Now
                            </Link>
                        </div>


                    </Slider>
                </Container>
            </section>

        </>
    )
}

export default Ready