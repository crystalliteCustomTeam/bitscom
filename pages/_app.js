import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '@/components/Header';
import Footernewfy from '@/components/Footernewfydesign';
import Zendesk, { ZendeskAPI } from "../pages/zendex";
const ZENDESK_KEY = "325da280-f4f0-4c80-997f-ea4de45eb2f1";
import Script from 'next/script';
import Pixel from '@/components/Pixel'; // Import the Pixel component

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

  const mod = `https://www.facebook.com/tr?id=850012750160683&ev=PageView&noscript=1`
  const mod1 = `
  !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '850012750160683');
fbq('track', 'PageView');
  
  `

  return (
    <>

      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gt1) }}></script>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gt2) }}></script>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mod) }}></script>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mod1) }}></script>

      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11331242978"></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());
                gtag('config', 'AW-11331242978');`}
      </Script> */}
      <Pixel />

      <Component {...pageProps} />

      <Footernewfy />

      <div>
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
      </div>

    </>
  )
}

