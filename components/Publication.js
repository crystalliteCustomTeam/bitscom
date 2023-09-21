import React from 'react'
import styles from '@/styles/Publication.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Slider from 'react-slick'
import publication1 from '/public/images/publication/1.webp'
import publication2 from '/public/images/publication/2.webp'
import publication3 from '/public/images/publication/3.webp'
import publication4 from '/public/images/publication/4.webp'
import publication5 from '/public/images/publication/5.webp'
import publication6 from '/public/images/publication/6.webp'
import publication7 from '/public/images/publication/7.webp'
import publication8 from '/public/images/publication/8.webp'
import publication9 from '/public/images/publication/9.webp'
import publication10 from '/public/images/publication/10.webp'
import publication11 from '/public/images/publication/11.webp'
import publication12 from '/public/images/publication/12.webp'

const Publication = () => {


  const bloglisting = [
    {
      image: publication1,
    },
    {
      image: publication2,

    },
    {
      image: publication3,

    },
    {
      image: publication4,

    },
    {
      image: publication5,

    },
    {
      image: publication6,

    },
    {
      image: publication7,

    },

    {
      image: publication8,

    },
    {
      image: publication9,

    },
    {
      image: publication10,

    },
    {
      image: publication11,

    },
    {
      image: publication12,

    },

  ]

  let rangSlider = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className={`${styles.publi} d-lg-block d-none`}>
        <Container>
          <Row className={`${styles.project} justify-content-between`}>
            <Col lg={12}>
              <h3 className="f-20 f-montserrat f-700 mb-2 letterspace t-center">Publications</h3>
            </Col>
            <Col lg={12}>
              <h2 className='f-50 f-playfair f-700 black t-center'> Many <span className='grdiant'>Got Featured In Major</span> <br></br> Publications Just By Working With Us.
              </h2>
            </Col>
          </Row>
          <Row className="gy-3 mt-4">
            {bloglisting.map((item, i) =>
              <Col md={2} key={i} className='imgspacetop'>
                <div className={styles.publicationimg}>
                  <Image alt="bitswits" src={item.image} className='img-fluid' />
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>
      <section className={`${styles.publi} d-lg-none d-block`}>
        <Container>
          <Row className="gy-3">
            <Col md={12}>
              <h3 className='t-center f-18 f-montserrat f-700 orange'>PUBLICATIONS</h3>
              <h2 className='f-50 t-center black f-playfair'> Many Got Featured In Major <br></br>   Publications Just    By Working With Us.
              </h2>
            </Col>
          </Row>
          <Row className="gy-3 mt-4">
            <Slider {...rangSlider} className={styles.rangSlide}>
              {bloglisting.map((item, i) =>
                <Col md={2} key={i} className='imgspacetop'>
                  <div className={styles.publicationimg}>
                    <Image alt="bitswits" src={item.image} className='img-fluid' />
                  </div>
                </Col>
              )}
            </Slider>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Publication