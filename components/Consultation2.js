import React from 'react'
import Link from 'next/link'
import styles from '../styles/Consultation.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Consultation2 = () => {
    return (
        <>
            <section className={styles.consult}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h3 className="grdiant f-20 f-700 f-montserrat">Need Help?</h3>
                            <h2 className="white font40 f-700 f-playfair mt-3 mb-5">
                                Looking For Expert Guidance On
                                Your <span className='grdiant'>Mobile App Development</span> Project?
                            </h2>
                            <Link href='#' className={`${styles.btnConslt}`}>
                                Get A Free Consultation
                            </Link>
                            <Link href='#' className={`${styles.btnConslt1}`}>
                                Get A Free Consultation
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Consultation2