import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '@/components/Header';
import Footernewfy from '@/components/Footernewfydesign';
import Zendesk, { ZendeskAPI } from "../pages/zendex";
const ZENDESK_KEY = "325da280-f4f0-4c80-997f-ea4de45eb2f1";
import Script from 'next/script';


export default function App({ Component, pageProps }) {

  const handleLoaded = () => {
    zE('webWidget:on', 'open', function () {
    });
  };

  

  return (
    <>

      <Header />

      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11331242978"></Script>
            <Script>
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());
                gtag('config', 'AW-11331242978');`}
            </Script>

      <Component {...pageProps} />

      <Footernewfy />

      <div>
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
      </div>

    </>
  )
}

