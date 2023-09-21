import React from 'react'
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
//css
import styles from '@/styles/NewBannerFy.module.css'
//images
import icon1 from '../public/images/banner/icon1.png'
import icon2 from '../public/images/banner/icon2.png'
import icon4 from '../public/images/banner/icon4.png'
import rev1 from '../public/images/newbanner/one.png'
import rev2 from '../public/images/newbanner/two.png'
//
import news1 from '/public/images/new1/1.webp'
import news2 from '/public/images/new1/2.webp'
import news3 from '/public/images/new1/3.webp'
import news4 from '/public/images/new1/4.webp'
import news5 from '/public/images/new1/5.webp'
import Router from 'next/router'

const NewBannerFy = (props) => {

    const [show, setShow] = useState(false);

    function modal(e) { e.preventDefault(); setShow(true); }
    function closemodal() { setShow(false); }



    const handleSubmit = async (e) => {

        e.preventDefault()


        // const data = {
        //     firstName: event.target.fname.value,
        //     lastName: event.target.lname.value,
        //     email: event.target.email.value,
        //     company: event.target.company.value,
        //     service: event.target.service.value,
        //     source: event.target.source.value,
        //     budget: event.target.budget.value,
        //     message: event.target.message.value,
        // }

        // const JSONdata = JSON.stringify(data)

        // setScore('Wating For Send Data');



        // fetch('https://wp23.cryscampus.com/BrandsWebsite/public/api/clients-information/bitswits', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSONdata
        // }).then((res) => {
        //     console.log('Response received')
        //     if (res.status === 200) {
        //         console.log('Response succeeded!')
        //     }
        // })


        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({


            "datainarray": {
                "Name": e.target.first.value,
                "Email": e.target.email.value,
                "Phone": e.target.phone.value,
                "Message": e.target.message.value,
            }



        }
        );



        let response = await fetch("https://brandsapi.cryscampus.com/public/api/bitswitscom/leadform", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        let data = await response.text();
        console.log(data);


        const { pathname } = Router
        if (pathname == pathname) {
            Router.push('/thank-you')
        }



    }



    return (
        <section className={`${styles.newbanner} ${styles[props.banClass]}`}>
            <Container fluid className='mx-xl-5 px-xxl-5 pe-xl-4'>
                <Row className={`${styles.bannnerproject}`}>
                    <Col lg={8}>
                        <div className={`${styles.banerTxt} ps-0 ps-md-3 ps-lg-0`}>

                            {props.subtitle ?
                                <p className="f-montserrat font-bold f-20 mb-4 white lheight24"> {props.subtitle}</p>
                                :
                                ''
                            }


                            {props.title ?
                                <h1 className='font65 white fontf font-bold line60 mb-4'>{props.title}</h1>
                                :
                                ''
                            }



                            {props.title2 ?
                                <p className="f-18 white f-montserrat mb-4 line30 font-bold">
                                    {props.title2}
                                </p>
                                :
                                ''
                            }




                            {props.text ?
                                <p className="f-18 white f-montserrat mb-2 line30 font-regular">
                                    {props.text}
                                </p>
                                :
                                ''
                            }






                            {props.text ?
                                <p className="f-18 white f-montserrat mb-3 mb-xxl-4 line30 font-medium">
                                    {props.text2}
                                </p>
                                :
                                ''
                            }

                            <div className={`${styles.bttnsto} mt-5`}>
                                <Link className={styles.bttns1} onClick={modal} href="#">
                                    Book A Call
                                </Link>
                                <Link className={styles.bttns2} href="#">
                                    Live Chat
                                </Link>
                            </div>

                            <div className={`mt-4 mb-3`}>
                                <div className='newbit2'>
                                    <Image src={news1} alt="bitswits" className='img-fluid' />
                                    <Image src={news2} alt="bitswits" className='img-fluid' />
                                    <Image src={news3} alt="bitswits" className='img-fluid' />
                                    <Image src={news4} alt="bitswits" className='img-fluid' />
                                    {/* <Image src={news5} alt="bitswits" className='img-fluid' /> */}
                                </div>
                            </div>

                            {/* <div className={`mt-5`}>
                                {props.img1 ?
                                    <>
                                        {props.img1}

                                        {props.img2}


                                    </>



                                    :

                                    ''

                                }
                            </div> */}


                        </div>
                    </Col>
                    <Col lg={4} className='p-xl-0'>
                        <div className={styles.bannerform}>
                            <div className={styles.make}>
                                <div className={styles.free}>
                                    <p className='font16 texttran font-bold fontf white'>
                                        Make an obligation-free enquiry
                                    </p>
                                </div>
                                <form className={styles.formsbanner} onSubmit={handleSubmit}>
                                    <input type='text' className={styles.forminput} name='first' placeholder='Name' required />
                                    <input type='number' className={styles.forminput} name='phone' placeholder='Phone Number' required />
                                    <input type='email' className={styles.forminput} name='email' placeholder='Email Address' required />
                                    <textarea className={styles.formarea} name='message' required placeholder='Message'></textarea>
                                    <div className={`${styles.take} d-flex`}>
                                        <p className='white font11 font-semibold fontf m-0'>We take your privacy seriously.<br className='d-block' /> Read our <strong>Privacy Notice</strong>.</p>
                                        <input type='Submit' className={styles.notice} />
                                    </div>
                                </form>
                            </div>

                            <div className={styles.read}>
                                <div className={`${styles.free} text-center`}>
                                    <p className='font16 font-bold fontf white'>OUR OFFICES</p>
                                </div>

                                <div className={styles.locations}>
                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="bitswits" src={icon1} className='img-fluid' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font10 font-bold fontf mb-0 white'>USA</p>
                                            {/* <Link href="#" className='font10 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link> */}
                                        </div>

                                    </div>
                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="bitswits" src={icon2} className='img-fluid mt-2' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font10 font-bold fontf mb-0 white'>Middle East</p>
                                            {/* <Link href="#" className='font10 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link> */}
                                        </div>
                                    </div>

                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="bitswits" src={icon4} className='img-fluid mt-1' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font10 font-bold fontf mb-0 white'>Asia</p>
                                            {/* <Link href="#" className='font10 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default NewBannerFy
