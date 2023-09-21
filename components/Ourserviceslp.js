import React from 'react'
import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import styles from '@/styles/Ourservices.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const Ourservices = ({ services, title, title2, para, }) => {


    return (
        <>
            <section className={styles.ourservices} id='services'>
                <Container>
                    <Row className={`${styles.project} justify-content-between`}>

                        {title &&
                            <Col lg={12}>
                                <h5 className='font20 fontf font-semibold mt-1 letterspace white center'> {title} </h5>
                            </Col>

                        }


                        <Col lg={12}>
                            {title2 &&
                                <>
                                    {title2}
                                </>
                            }
                            {para &&
                                <>
                                    {para}
                                </>
                            }
                        </Col>
                        {/* <Col lg={3}>
                            <Link className={styles.bttns1} href="#">Book a Call</Link>
                        </Col> */}
                    </Row>
                    <Row className='mt-3 mt-lg-5 pb-lg-5 ourservicesfaqs'>
                        <Col lg={6}>

                            {services.map((item) => (
                                <div key={item.id}>
                                    <div key={item.id} className={item.data == item.click1 ? 'white font20 font-medium padd border1 cursor2 ani' : 'white font20 font-medium padd border1 cursor3 ani'} onClick={() => item.fun(item.click1)}>
                                        {item.title}
                                    </div>

                                    {item.data == item.click1 &&
                                        <>
                                            <div key={item.id} className='lightgrey padd font13 ani newwidth'>
                                                {item.text}
                                            </div>
                                        </>
                                    }

                                </div>
                            ))
                            }




                        </Col>


                        <Col lg={6} className='d-lg-block' >

                            {services.map((item) => (

                                <>
                               
                                    {item.data == item.click1 &&
                                        <div className={styles.imgapost} key={item.id}>
                                            <Image alt="bitswits" src={item.img} className={item.data == item.click1 ? styles.bottom4 : styles.bottom4} />
                                        </div>
                                    }
                                    
                                </>

                            ))
                            }




                        </Col>


                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Ourservices