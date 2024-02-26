import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Newhomeanner.module.css'


export default function ThanksGiving() {

    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <main>
                <section className={styles.thankYou}>
                    <Container fluid>
                        <Row className={styles.bannnerproject}>
                            <Col lg={8} className='mx-auto'>
                                <div className={styles.banerTxt}>
                                    <p className='white fontf font30 font-medium line30 mb-0'>HAPPY</p>
                                    <h1 className='font70 grdiant font-bold fontf line60 w-50 mx-auto'>Thanks</h1>
                                    <p className='white fontf font30 font-medium line30 mb-4'>Giving</p>
                                    <div className={`${styles.bttnsto} justify-content-center`}>
                                        <Link className={styles.bttns2} href="/">Back To Home</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}
