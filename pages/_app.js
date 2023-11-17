import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '@/components/Header';
import Footernewfy from '@/components/Footernewfydesign';
import Zendesk, { ZendeskAPI } from "../pages/zendex";
const ZENDESK_KEY = "325da280-f4f0-4c80-997f-ea4de45eb2f1";
//
import styles from '@/styles/Header.module.css'
//
import Pixel from '@/components/Pixel'; // Import the Pixel component
import Pixel2 from '@/components/Pixel2';
import ThanksGiving from '@/components/ThanksGiving';


export default function App({ Component, pageProps }) {

  // =======================================
  const router = useRouter();

  const [show, setShow] = useState('');
  function modal() {
    setShow(true);
  }
  function closemodal() {
    setShow(false);
  }
  // =======================================

  const handleLoaded = () => {
    zE('webWidget:on', 'open', function () {
    });
  };

  const gt1 = 'https://www.googletagmanager.com/gtag/js?id=AW-11331242978';
  const gt2 = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());
  gtag('config', 'AW-11331242978');`;

  // =======================================
  const thanks = router.pathname == '/thanks-giving'
  // =======================================


  return (
    <>
      <div onLoad={modal}>
        <Header />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gt1) }}></script>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gt2) }}></script>

      <Pixel />
      <Pixel2 />

      <Component {...pageProps} />

      <Footernewfy />

      {thanks ?
        <Modal show={show} centered onHide={closemodal} onLoad={modal} className='thanksgiving'>
          <Modal.Body>
            <ThanksGiving /> <span onClick={closemodal} className={styles.cross}>x</span>
          </Modal.Body>
        </Modal>
        :

        ''
      }

      <div>
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
      </div>

    </>
  )
}

