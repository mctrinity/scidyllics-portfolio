import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';


const Home = () => {
  return (
    <>
      <Head>
        <title>AIverse</title>
        <meta name="description" content="Explore the future with AIverse 3D web experience" />
      </Head>

      <div className="page-wrapper">
        <Header />
        <main>
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
