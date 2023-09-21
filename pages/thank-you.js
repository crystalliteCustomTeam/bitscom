import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Newhomeanner.module.css'


export default function ThankYou() {

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

                                    <h1 className='font65 black fontf font-bold line60'>
                                        <span className='grdiant font-bold'>Thank You</span>
                                    </h1>

                                    <p className='black fontf font16 font-medium line30'>
                                        Welcome to the community, your personalized experience awaits!
                                    </p>

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
