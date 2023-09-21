import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Header.module.css'
import { Row, Col } from 'react-bootstrap'
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
// images
import logo from '../public/images/icons/footerlogo.png'
import mbllogo from '../public/images/icons/footerlogo.png'
import php from '../public/images/icons/php.png'
import eCom from '../public/images/icons/eCom.png'
import dotnet from '../public/images/icons/dotnet.png'
import crm from '../public/images/icons/crm.png'
import cms from '../public/images/icons/cms.png'
import fullStack from '../public/images/icons/fullStack.png'
import apps from '../public/images/icons/apps.png'
import games from '../public/images/icons/games.png'
import marketing from '../public/images/icons/marketing.png'
import more from '../public/images/icons/more.png'
import company from '../public/images/icons/company.png'
import about from '../public/images/icons/about.png'
import ourbg from '../public/images/icons/ourbg.png'
import web from '../public/images/icons/web.png'
import hosting from '../public/images/icons/hosting.png'
import tailormade from '../public/images/icons/tailormade.png'
import estate from '../public/images/icons/estate.png'
import travel from '../public/images/icons/travel.png'
import b2b from '../public/images/icons/b2b.png'
import b2c from '../public/images/icons/b2c.png'
import health from '../public/images/icons/health.png'
import education from '../public/images/icons/education.png'
import finance from '../public/images/icons/finance.png'
import media from '../public/images/icons/media.png'
import foods from '../public/images/icons/foods.png'
import tickets from '../public/images/icons/tickets.png'
import automotive from '../public/images/icons/automotive.png'
import backarrow from '../public/images/icons/back-arrow.webp'
import music from '../public/images/icons/music.png'
import ride from '../public/images/icons/ride.png'
import bactria from '../public/images/icons/bactria.png'
import Modal from 'react-bootstrap/Modal';
import Bitswitspopup from '../components/Bitswitspopup'
import { RxCross2 } from 'react-icons/rx'
import newImg from '../public/images/1.jpg'


const Header = () => {


    const [show, setShow] = useState(false);

    function modal(e) { e.preventDefault(); setShow(true); }
    function closemodal() { setShow(false); }

    const opnen = () => {
        window.open('../companyprofile.pdf', '_blank');
    }

    const [isActive, setIsActive] = useState(false);
    const [megamenu1, setMegaMenu1] = useState(false);
    const [megamenu2, setMegaMenu2] = useState(false);
    const [megamenu3, setMegaMenu3] = useState(false);
    const [megamenu4, setMegaMenu4] = useState(false);

    const handleMenu = () => {
        setIsActive((prev) => !prev);
    }

    const handleMegaMenu1 = () => {
        setMegaMenu1((prev) => !prev);
    }

    const handleMegaMenu2 = () => {
        setMegaMenu2((prev) => !prev);
    }

    const handleMegaMenu3 = () => {
        setMegaMenu3((prev) => !prev);
    }

    const handleMegaMenu4 = () => {
        setMegaMenu4((prev) => !prev);
    }

    return (
        <>
            <header className={styles.header} id='header'>
                <div className={styles.navLogo}>
                    <Link href="/">
                        <Image alt="bitswits" className='img-fluid'
                            src={logo}
                        />
                    </Link>
                </div>
                <nav className={styles.navBar}>
                    <ul className={isActive ? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
                        <div className={`${styles.navLogo} ${styles.mblLogo}`}>
                            <Link href="/">
                                <Image alt="bitswits" className='img-fluid'
                                    src={mbllogo}
                                />
                            </Link>
                        </div>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMenu}>
                            <Link href='/' className={styles.megaLink}>
                                Home
                            </Link>
                        </li>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMenu}>
                            <a  href='#services' className={styles.megaLink}>
                            SERVICES
                            </a>
                        </li>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMenu}>
                            <a href='#work' className={styles.megaLink}>
                            OUR WORK
                            </a>
                        </li>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMenu}>
                            <a href='#industy' className={styles.megaLink}>
                            OUR INDUSTRIES
                            </a>
                        </li>
                       
                        {/* <li className={`${styles.megaList3} ${styles.navList}`} onClick={handleMegaMenu3}>
                            <Link href='#' className={styles.megaLink}>
                                SERVICES
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu3 ? `${styles.megaMenu3} ${styles.opnMenu3}` : `${styles.megaMenu3}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="bitswits"
                                        src={backarrow}
                                    />
                                </div>
                                <Row className='mt-4 mt-lg-0'>
                                    <Col md={12}>
                                        <Row className={styles.megaRow}>
                                            <Col lg={3}>
                                                <div className={styles.listMain}>

                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <ul className='mb-0 mt-0'>

                                                                    <div className={styles.listHeading}>
                                                                        <div className={styles.megaIcon}>
                                                                            <Image alt="bitswits" className='img-fluid'
                                                                                src={apps} />
                                                                        </div>
                                                                        <h5 className='font14 fontf font-semibold mb-0'>APP</h5>
                                                                    </div>

                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/ios-app-development-company'>
                                                                            <FaAngleRight />
                                                                            <span>iOS App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/mobile-app-development'>
                                                                            <FaAngleRight />
                                                                            <span>Mobile App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/android-app-development-company'>
                                                                            <FaAngleRight />
                                                                            <span>Android App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/flutter-app-development-company'>
                                                                            <FaAngleRight />
                                                                            <span>Flutter App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/react-native-app-development-company'>
                                                                            <FaAngleRight />
                                                                            <span>React Native App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/wearable-app-development-company'>
                                                                            <FaAngleRight />
                                                                            <span>Wearable App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/cross-platform-app-development-company'>
                                                                            <FaAngleRight />
                                                                            <span>Cross Platform App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/web-app-development-company'>
                                                                            <FaAngleRight />
                                                                            <span>Web App Development</span>
                                                                        </Link>
                                                                    </li>


                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={3}>
                                                <div className={styles.listMain}>

                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <ul className='mb-0 mt-0'>

                                                                    <div className={styles.listHeading}>
                                                                        <div className={styles.megaIcon}>
                                                                            <Image alt="bitswits" className='img-fluid'
                                                                                src={web}
                                                                            />
                                                                        </div>
                                                                        <h5 className='font14 fontf font-semibold mb-0'>WEB</h5>
                                                                    </div>

                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/web-development'>
                                                                            <FaAngleRight />
                                                                            <span>Web Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/php-development-service'>
                                                                            <FaAngleRight />
                                                                            <span>PHP Development Services</span>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/e-commerence-development'>
                                                                            <FaAngleRight />
                                                                            <span>e-Commerce Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/enterprise-portal-solution'>
                                                                            <FaAngleRight />
                                                                            <span>Enterprise Portal Solution</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/magento-enterprise-solution'>
                                                                            <FaAngleRight />
                                                                            <span>Magento Enterprise Solution</span>
                                                                        </Link>
                                                                    </li>


                                                                    <div className={`${styles.listHeading} mt-3 pt-1`}>
                                                                        <div className={styles.megaIcon}>
                                                                            <Image alt="bitswits" className='img-fluid'
                                                                                src={hosting}
                                                                            />
                                                                        </div>
                                                                        <h5 className='font14 fontf font-semibold mb-0'>BLOCKCHAIN</h5>
                                                                    </div>

                                                                    <li>
                                                                        <Link onClick={handleMenu} href="/blockchain-development-lp">
                                                                            <FaAngleRight />
                                                                            <span>Blockchain Development</span>
                                                                        </Link>
                                                                    </li>

                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>


                                            </Col>
                                            <Col lg={3}>

                                                <div className={`${styles.listMain} mt-0`}>

                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>

                                                                <div className={`${styles.listMain} ${styles.resList} mt-0`}>

                                                                    <div className={styles.listBody}>
                                                                        <Row>
                                                                            <Col md={12}>
                                                                                <ul className='mb-0 mt-0'>

                                                                                    <div className={styles.listHeading}>
                                                                                        <div className={styles.megaIcon}>
                                                                                            <Image alt="bitswits" className='img-fluid'
                                                                                                src={games}
                                                                                            />
                                                                                        </div>
                                                                                        <h5 className='font14 fontf font-semibold mb-0'>GAME</h5>
                                                                                    </div>



                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='/game-app-development-company-lp'>
                                                                                            <FaAngleRight />
                                                                                            <span>Game App Development</span>
                                                                                        </Link>
                                                                                    </li>

                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='/2d-game-development-company-lp'>
                                                                                            <FaAngleRight />
                                                                                            <span>2D Game Development</span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='/3d-game-development-company-lp'>
                                                                                            <FaAngleRight />
                                                                                            <span>3D Game Development</span>
                                                                                        </Link>
                                                                                    </li>

                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='/nft-game-development-company-lp'>
                                                                                            <FaAngleRight />
                                                                                            <span>Nft Game Development</span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='/blockchain-game-development-company-lp'>
                                                                                            <FaAngleRight />
                                                                                            <span>Blockchain Game Development</span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='#'>
                                                                                            <FaAngleRight />
                                                                                            <span>Game Development</span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='#'>
                                                                                            <FaAngleRight />
                                                                                            <span>2D Art</span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='#'>
                                                                                            <FaAngleRight />
                                                                                            <span>3D Art</span>
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={3} className='d-none d-lg-block'>
                                                <div className={`${styles.listMain} mt-0`}>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <div className={`${styles.listMain} ${styles.resList} mt-0`}>

                                                                    <div className={styles.listBody}>
                                                                        <Row>
                                                                            <Col md={12}>
                                                                                <ul className='mb-0 mt-0'>
                                                                                    <li>
                                                                                        <Image src={newImg} alt='BitsWits' className='img-fluid' />
                                                                                    </li>
                                                                                </ul>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>


                                        </Row>
                                    </Col>

                                </Row>
                            </div>
                        </li> */}
                        {/* <li className={`${styles.megaList2} ${styles.navList}`} onClick={handleMegaMenu2}>
                            <Link href='#' className={styles.megaLink}>
                                OUR COMPANY
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu2 ? `${styles.megaMenu2} ${styles.opnMenu2}` : `${styles.megaMenu2}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="bitswits"
                                        src={backarrow}

                                    />
                                </div>
                                <Row className={`${styles.megaRow} mt-4 mt-lg-0`}>

                                    <Col lg={4}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listBody}>
                                                <ul className='mb-0 mt-0'>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image alt="bitswits" className='img-fluid'
                                                                src={about}
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>ABOUT US</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <p>Based in California, US, our company is driven by a relentless commitment to client satisfaction, fueled by our passion for technology innovation and business process expertise. Since our inception in 2002, we have experienced remarkable growth year after year, currently boasting a thriving in-house team of over 1,000 employees spread across various international locations.</p>
                                                                <Link className={styles.download} onClick={opnen} href='#' download><FaAngleRight className='white font14' />Download our E-brochure</Link>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={2}>
                                        <div className={styles.listMain}>

                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 mt-0'>

                                                            <div className={styles.listHeading}>
                                                                <div className={styles.megaIcon}>
                                                                    <Image alt="bitswits" className='img-fluid'
                                                                        src={company}
                                                                    />
                                                                </div>
                                                                <h5 className='font14 fontf font-semibold mb-0'>COMPANY</h5>
                                                            </div>

                                                            <li>
                                                                <Link onClick={handleMenu} href='/about-us'>
                                                                    <FaAngleRight />
                                                                    <span>About Us</span>
                                                                </Link>
                                                            </li>
                                                          
                                                            
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={ourbg}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </li>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMegaMenu4}>
                            <Link href='#' className={styles.megaLink}>
                                OUR WORK
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu4 ? `${styles.megaMenu4} ${styles.opnMenu4}` : `${styles.megaMenu4}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="bitswits"
                                        src={backarrow}

                                    />
                                </div>
                                <Row className={`${styles.megaRow} mt-4 mt-lg-0`}>
                                    <Col lg={4}>
                                        <div className={styles.boxSpace}>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"
                                                    src={travel}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/travel-app-development" onClick={handleMenu}>
                                                        Travel App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Create Hassle-Free Travel...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox}`}>
                                                <Image alt="bitswits"
                                                    src={estate}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/real-estate-app-development-solutions" onClick={handleMenu}>
                                                        Real Estate App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        A Real Estate App Instilling...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"
                                                    src={bactria}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/bacteria-app-development" onClick={handleMenu}>
                                                        Bacteria App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Bacteria Shield - Cleaning...
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={styles.boxSpace}>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"
                                                    src={music}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/music-streaming-app-development" onClick={handleMenu}>
                                                        Sound App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Developed A Music Streaming...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox}`}>
                                                <Image alt="bitswits"
                                                    src={health}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/prohealth-application-development" onClick={handleMenu}>
                                                        PROHealth App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        AS Medicare - A Pharmacy...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"
                                                    src={ride}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/ez-ride" onClick={handleMenu}>
                                                        Rider App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        EZ Ride is a two-sided market...
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={styles.boxSpace}>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"
                                                    src={foods}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/food-delivery-app-development" onClick={handleMenu}>
                                                        Food App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Food Delivery Services That...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox} ${styles.gameApp}`}>
                                                <Image alt="bitswits"
                                                    src={games}
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/game-app-development" onClick={handleMenu}>
                                                        Game App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Ios And Android Games...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox} ${styles.lastBox}`}>
                                                <div className={`${styles.ourWork} ${styles.cntct}`}>
                                                    <div className={styles.fill}>
                                                        <div>
                                                            <BsFillEnvelopeFill size={20} className={styles.email} />
                                                        </div>
                                                        <div>
                                                            <Link className='font15 font-medium white fontf' href="mailto:info@bitswits.com" onClick={handleMenu}>
                                                                info@bitswits.com
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className={styles.fill}>
                                                        <div>
                                                            <BsFillTelephoneFill size={25} className={styles.email} />
                                                        </div>
                                                        <div>
                                                            <Link className='font15 font-medium white fontf' href="tel:+1 312 379 5987" onClick={handleMenu}>
                                                                +1 312 379 5987
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className={styles.fill}>
                                                        <div>
                                                            <BsFillTelephoneFill size={25} className={styles.email} />
                                                        </div>
                                                        <div>
                                                            <Link className='font15 font-medium white fontf' href="tel:+1 833 500 6007" onClick={handleMenu}>
                                                                +1 833 500 6007
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </li> */}
                        {/* <li className={`${styles.megaList1} ${styles.navList}`} onClick={handleMegaMenu1}>
                            <Link href='#' className={styles.megaLink}>
                                TECHNOLOGIES
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu1 ? `${styles.megaMenu1} ${styles.opnMenu1}` : `${styles.megaMenu1}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="bitswits"
                                        src={backarrow}

                                    />
                                </div>
                                <Row className={styles.megaRow}>
                                    <Col md={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={php}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>PHP</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={6}>
                                                        <ul className='mb-0 mt-0'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-php-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Core PHP</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-cake-php-developer'>
                                                                    <FaAngleRight />
                                                                    <span>CakePHP</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-laravel-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Laravel</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-yii-developer'>
                                                                    <FaAngleRight />
                                                                    <span>YII</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col md={6}>
                                                        <ul className='mb-0 mt-0'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-zend-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Zend</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-codeigniter-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Codeigniter</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-ruby-on-rails-developer'>
                                                                    <FaAngleRight />
                                                                    <span>ROR</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={eCom}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>E-COMMERCE</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={6}>
                                                        <ul className='mb-0 mt-0'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-magento-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Magento</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-magento-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Magento 2</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-shopify-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Shopify</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-symfony-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Symfony</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-opencart-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Opencart</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-virtuemart-developer'>
                                                                    <FaAngleRight />
                                                                    <span>VirtueMart</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col md={6}>
                                                        <ul className='mb-0 mt-0'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-woocommerce-developer'>
                                                                    <FaAngleRight />
                                                                    <span>WooCommerce</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-prestashop-developer'>
                                                                    <FaAngleRight />
                                                                    <span>PrestaShop</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-bigcommerce-developer'>
                                                                    <FaAngleRight />
                                                                    <span>BigCommerce</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-nopcommerce-developer'>
                                                                    <FaAngleRight />
                                                                    <span>NopCommerce</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-zencart-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Zencart</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={dotnet}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>.NET</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 mt-0'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-asp-dot-net-developer'>
                                                                    <FaAngleRight />
                                                                    <span>ASP.NET</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-c-sharp-developer'>
                                                                    <FaAngleRight />
                                                                    <span>C#</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-xamarin-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Xamarin</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-database-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Database Developer</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={crm}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>CRM SOLUTIONS</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 mt-0'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-ms-dynamics-crm-developer'>
                                                                    <FaAngleRight />
                                                                    <span>MS Dynamics CRM</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-salesforce-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Salesforce</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-sugarcrm-developer'>
                                                                    <FaAngleRight />
                                                                    <span>SugarCRM</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hubspot'>
                                                                    <FaAngleRight />
                                                                    <span>HubSpot</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={cms}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>CMS</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 mt-0'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/drupal-cms-development'>
                                                                    <FaAngleRight />
                                                                    <span>Drupal</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-wordpress-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Wordpress</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-joomla-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Joomla</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-sharepoint-developer'>
                                                                    <FaAngleRight />
                                                                    <span>SharePoint</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-umbraco-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Umbraco</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-dot-net-nuke-developer'>
                                                                    <FaAngleRight />
                                                                    <span>DNN</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-craft-cms-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Craft</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={fullStack}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>FULL STACK</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 mt-0'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-java-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Java</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-angular-js-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Angular JS</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-node-js-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Node JS</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-mean-stack-developer'>
                                                                    <FaAngleRight />
                                                                    <span>MEAN Stack</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-mongodb-developer'>
                                                                    <FaAngleRight />
                                                                    <span>MongoDB</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-react-native-developer'>
                                                                    <FaAngleRight />
                                                                    <span>React Native</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={`${styles.listMain} ${styles.resList}`}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={apps}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>MOBILE APPS</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 mt-0'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-android-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Android</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-ios-developer'>
                                                                    <FaAngleRight />
                                                                    <span>iOS</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hybrid-app-development'>
                                                                    <FaAngleRight />
                                                                    <span>Hybrid</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={games}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>GAMES DEVELOPMENT</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 mt-0'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-unity-3d-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Unity 3D</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-flash-game-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Flash Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-coco2dx-game-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Coco2dx Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-ios-game-developer'>
                                                                    <FaAngleRight />
                                                                    <span>iOS Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-html5-game-developer'>
                                                                    <FaAngleRight />
                                                                    <span>HTML5 Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-android-game-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Android Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-react-js-game-developer'>
                                                                    <FaAngleRight />
                                                                    <span>React JS Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-unreal-game-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Unreal Game</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={marketing}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>MARKETING SERVICES</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 mt-0'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-seo-expert'>
                                                                    <FaAngleRight />
                                                                    <span>SEO Experts</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={`${styles.listMain} ${styles.resList}`}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={more}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>MORE</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 mt-0'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-website-designer'>
                                                                    <FaAngleRight />
                                                                    <span>Website Designer</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-python-developer'>
                                                                    <FaAngleRight />
                                                                    <span>Python</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/hire-quality-analyst'>
                                                                    <FaAngleRight />
                                                                    <span>Quality Analyst</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </li> */}
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMenu}>
                            <a href='#about' className={styles.megaLink}>
                                About
                            </a>
                        </li>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMenu}>
                            <a href='#contact' className={styles.megaLink}>
                                Contact
                            </a>
                        </li>
                        <li className={`${styles.navList} ${styles.inqBtn}`} onClick={modal}>
                            <Link href='#'>ENQUIRE NOW</Link>
                        </li>
                        <li>
                            <div className={styles.mbInq}>
                                <div className={`${styles.ourWork} ${styles.cntct}`}>
                                    <div className={styles.fill}>
                                        <div>
                                            <BsFillEnvelopeFill size={20} className={styles.email} />
                                        </div>
                                        <div>
                                            <Link className='font15 font-medium white fontf' href="mailto:info@bitswits.com" onClick={handleMenu}>
                                                info@bitswits.com
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.fill}>
                                        <div>
                                            <BsFillTelephoneFill size={25} className={styles.email} />
                                        </div>
                                        <div>
                                            <Link className='font15 font-medium white fontf' href="tel:+1 312 379 5987" onClick={handleMenu}>
                                                +1 312 379 5987
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.fill}>
                                        <div>
                                            <BsFillTelephoneFill size={25} className={styles.email} />
                                        </div>
                                        <div>
                                            <Link className='font15 font-medium white fontf' href="tel:+1 833 500 6007" onClick={handleMenu}>
                                                +1 833 500 6007
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className={styles.navTogle} onClick={handleMenu}>
                        <span className={isActive ? `${styles.line} ${styles.line1}` : `${styles.line}`}></span>
                        <span className={isActive ? `${styles.line} ${styles.line2}` : `${styles.line}`}></span>
                        <span className={isActive ? `${styles.line} ${styles.line3}` : `${styles.line}`}></span>
                    </div>
                </nav>

                <Modal show={show} onHide={closemodal} className={styles.modalnew}>
                    <Modal.Body> <Bitswitspopup formsaspire='popquote' /> <span onClick={closemodal} className={styles.cross}> <RxCross2 /> </span> </Modal.Body>


                </Modal>


            </header>
        </>
    )
}

export default Header