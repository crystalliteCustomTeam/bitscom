import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '@/components/Header';
import Footernewfy from '@/components/Footernewfydesign';
import Zendesk, { ZendeskAPI } from "../pages/zendex";
const ZENDESK_KEY = "325da280-f4f0-4c80-997f-ea4de45eb2f1";
import Script from 'next/script';
import Pixel from '@/components/Pixel'; // Import the Pixel component
import Pixel2 from '@/components/Pixel2';

export default function App({ Component, pageProps }) {

  const handleLoaded = () => {
    zE('webWidget:on', 'open', function () {
    });
  };

  const gt1 = 'https://www.googletagmanager.com/gtag/js?id=AW-11331242978';
  const gt2 = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());
  gtag('config', 'AW-11331242978');`;


  

  return (
    <>

      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gt1) }}></script>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gt2) }}></script>

     

      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11331242978"></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());
                gtag('config', 'AW-11331242978');`}
      </Script> */}
      <Pixel />
      <Pixel2 />

      <Component {...pageProps} />

      <Footernewfy />

      <div>
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
      </div>

    </>
  )
}

