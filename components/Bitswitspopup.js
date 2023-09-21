import React from 'react'
import styles from '@/styles/Bitswitspopup.module.css'
import Link from 'next/link'
import axios from "axios";
import { useState } from "react";
import Router from 'next/router'

const Freequote = (props) => {


  const [score, setScore] = useState('Submit');

  const handleSubmit = async (e) => {
    e.preventDefault()


    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
     
      
        "datainarray" : {
          "Name"  : e.target.first.value,
          "Email" : e.target.email.value,
          "Phone" : e.target.phone.value,
          "Message"   : e.target.message.value,
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
    <>

      <div className={styles[props.formsaspire]}>
        <h4 className="t-center font30 fw500 colortextgrey font-f">Get A Free Quote</h4>

        <form className={styles.formalign} onSubmit={handleSubmit}>
          <label className={styles.label}>Full Name*</label>
          <input type="text" className={styles.formfree} required name="first" placeholder="Your name..." />

          <label className={styles.label}>Email Address*</label>
          <input type="email" className={styles.formfree} required name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Type Email Address" />

          <label className={styles.label}>Phone *</label>
          <input type="number" className={styles.formfree} required name="phone" placeholder="123-456-7890" />

          <label className={styles.label}>Message *</label>
          <textarea className={styles.formfree} required name="message" rows="2" placeholder="Type Your Message Here"></textarea>
          <button className={styles.freebtn} type="submit">{score} </button>
        </form>


        {props.show ?

          <div className='mt-4'>
            <Link className={styles.freediscuss} href="#">LET'S DISCUSS</Link>
            <Link className={styles.freehomenumer} href="tel:(213) 289 3888">(213) 289 3888</Link>
          </div>


          : ''}



      </div>


    </>
  )
}

export default Freequote