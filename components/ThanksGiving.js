import React from 'react'
import Axios from "axios";
import Image from 'next/image';
import Router, { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/ThanksGiving.module.css'
//
import thnksLogo from '../public/images/thanksGiving/thnksLogo.png'
import thnksHeading from '../public/images/thanksGiving/thnksHeading.png'


const ThanksGiving = () => {

    const [ip, setIP] = useState('');
    const getIPData = async () => {
        const res = await Axios.get('');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])

    const [score, setScore] = useState('Submit');
    const router = useRouter();
    const currentRoute = router.pathname;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            pageUrl: currentRoute,
            giving: 'Thanks Giving'
        }

        const JSONdata = JSON.stringify(data);

        setScore('Sending Data');

        fetch('api/thanks/route', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`)
            if (res.status === 200) {
                console.log(`Response Successed ${res}`)
            }
        })


        var currentdate = new Date().toLocaleString() + ''
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            "Brand": "BitsWits",
            "Page": `${currentRoute}`,
            "Date": currentdate,
            "Time": currentdate,
            "JSON": JSONdata,

        });

        await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });



        const { pathname } = Router
        if (pathname == pathname) {
            window.location.href = '/thank-you';
        }

    }

    return (
        <>
            <div className={styles.getstart}>
                <Container>
                    <Row className={styles.notes}>
                        <Col lg={5}>
                            <div className={styles.post}>
                                <span className='togpost'>
                                    <Image src={thnksHeading} alt="BitsWits" className='img-fluid w-50 d-block mx-auto' />
                                </span>
                                <form onSubmit={handleSubmit} className={styles.giving}>
                                    <input type="text" className={styles.formfree} required name="name" placeholder="Your Name" />
                                    <input type="email" className={styles.formfree} required name="email" placeholder="Your Email" />
                                    <input type="number" className={styles.formfree} required name="phone" placeholder="Your Number" />
                                    <button className={styles.freebtn} type="submit"> {score}</button>
                                </form>
                            </div>
                        </Col>
                        <Col lg={7} className='d-none d-lg-block'>
                            <div className='p-5 text-center'>
                                <Image src={thnksLogo} alt="BitsWits" className='img-fluid w-75 mx-auto' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ThanksGiving
