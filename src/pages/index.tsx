import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ContactForm from '@/components/Contact';
import FeaturedProject from '@/components/FeaturedProject';

const Home = () => {
  return (
    <>
      <Head>
        <title>Scidyllics</title>
        <meta name="description" content="Explore the future with Scidyllics — a 3D developer portfolio" />
      </Head>

      <div className="page-wrapper">
        <Header />

        <main>
          <Hero />
          
          <section id="projects">
            <FeaturedProject />
          </section>

          <About />

          <section
            id="contact"
            style={{
              padding: '4rem 1rem',
              textAlign: 'center',
              background: '#0d0d0d',
            }}
          >
            <h2 style={{ marginBottom: '1rem' }}>Leave a Message</h2>
            <ContactForm />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
