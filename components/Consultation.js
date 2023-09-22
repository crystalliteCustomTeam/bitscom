import React from 'react'
import Link from 'next/link'
import styles from '../styles/Consultation.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Consultation = () => {
    return (
        <>
            <section className={styles.consult}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h3 className="grdiant f-18 f-700 f-montserrat">GET A FREE CONSULTATION</h3>
                            <h2 className="white f-50 f-700 f-playfair mt-3 mb-5">
                                Looking For Expert Guidance On
                                Your <span className='grdiant'>Mobile App Development</span> Project?
                            </h2>
                            <a href='#contact' className={`${styles.btnConslt}`}>
                                Claim Your Complimentary Consultancy Session Today
                            </a>

                            <a href='#contact' className={`${styles.btnConslt1}`}>
                            Get A Free Consultation
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Consultation