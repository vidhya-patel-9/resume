import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Certificates from '../components/Sections/Certificates';
import Contact from '../components/Sections/Contact';
import Education from '../components/Sections/Education';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Projects from '../components/Sections/Projects';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
