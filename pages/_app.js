import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '@/components/Header';
import Footernewfy from '@/components/Footernewfydesign';

export default function App({ Component, pageProps }) {





  return (
    <>




      <Header />

      <Component {...pageProps} />

      <Footernewfy />

    </>
  )
}
