import Head from 'next/head'
import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Newhomeanner.module.css'
import Script from 'next/script'


export default function ThankYou() {

    const gt1 = `gtag('event', 'conversion', {'send_to' : 'AW-11331242978/i9_NCJ6ql-QYEOKXlJsq'});`

    useEffect(() => {
        // Access Token
        const accessToken = 'EAAH0ODVYws4BO9IGjGVZBoqyWQv6U0wnW3hnrGCPeeLfBm7ThxVl5DYETD3ih5t4qS2ep9twufdPbfExA9PCPiC3qRrgMQtSFiHiL5hLO2jIstRvw6sX8sIvaBUSUtRbZBaZAN4ZBglr8DuclALYcWMQ0CZC0pSsRVADb5B9Gie6sfiQ4bZAl2TwYm0akXybTfVgZDZD';

        // Pixel ID
        const pixelId = '815377486247146';

        // Generate a unique event_id 
        const eventId = Math.random().toString(36).substring(7);

        // server event data
        const eventData = {
            event_id: eventId,
            event_name: 'ViewContent',
            event_time: Math.floor(Date.now() / 1000),
            custom_data: {
                currency: 'USD',
                value: 100.0,
            },
            enableStandardPixel: true,
        };

        axios.post(`https://graph.facebook.com/v12.0/${pixelId}/events`, {
            data: [eventData],
            access_token: accessToken,
        })
            .then(response => {
                console.log('Event sent to Facebook:', response.data);
            })
            .catch(error => {
                console.error('Error sending event to Facebook:', error);
            });
    }, []);

    
    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gt1) }}></Script>

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
