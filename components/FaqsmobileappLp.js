import React from 'react'
import styles from '@/styles/FaqsLp.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion';
import { FaAngleDown } from 'react-icons/fa';


const FaqsLp = () => {

    return (
        <>
            <section className={styles.faqsLp}>
                <Container className='faqsLp'>
                    <h3 className="font50 grdiant f-montserrat f-700 text-center mb-5">
                        Frequently Asked Questions
                    </h3>

                    <Row className='mt-4'>
                        <Accordion defaultActiveKey="00">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                What is mobile application development?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                Mobile application development creates software applications that run on mobile devices and other connected devices, such as wearables, automotive systems, cameras, and more. It requires skill sets in design, development, testing, deployment, and maintenance to create innovative user experiences across multiple platforms. With that being said, businesses hire mobile app developers to stay ahead of the competition and deliver market-leading products to their customers.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                Does bitswits offers hybrid and native app development?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                BitsWits has a team of the best mobile app developers expert in providing customized development solutions, whether Hybrid or Native mobile application development is required. Our developers always come up with creative and innovative app ideas that are best in your interest.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Why choose bitswits as a mobile app development company?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                BitsWits is a top mobile app development company due to its decent clientele, commitment to excellence, and innovative mobile app development solutions. We enjoy the top spot in the application development industry with affordable packages and professional services.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Is there any customer support available?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                Yes, BitsWits offers 24/7 incredible customer support, even post-mobile apps development USA. We do not let our customers hang in the middle with any query that may bring trouble to them.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How to choose a mobile app development company?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                Checking client portfolios, communicating your requirements clearly, and considering the development cost will help you choose the best mobile app development agency. BitsWits practices open communication so that the solution to your query is answered adequately to provide you with the utmost satisfaction.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What industries does bitswits cater to?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                At BitsWits, we specialize in developing innovative and efficient mobile applications for various industries across the United States. We offer customized mobile solutions from e-commerce to healthcare and gaming to meet each client's specific requirements and business. We are a mobile application development company dedicated to creating apps that cater to each client's unique needs.
                                </Accordion.Body>
                            </Accordion.Item>

                      

                        </Accordion>


                    </Row>
                </Container>


            </section>



        </>
    )
}

export default FaqsLp