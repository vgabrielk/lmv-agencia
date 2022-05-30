import Header from './Header'
import HomePage from './HomePage'
import Head from 'next/head';
import Services from './Services';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderView from './Slider';
<Head>
  <title>Create Next App</title>
  <meta property='og:title' content='Agência LMV' />
  <meta name='Agência LMV' content='Agência de design e desenvolvimento LMV' />
  <link rel='icon' href='/favicon.ico' />
</Head>

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Services />
      <SliderView />
    </>
  )
}
