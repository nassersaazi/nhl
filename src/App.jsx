import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  Products,
  About,
  RequestQuote
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <About />
      </section>
      <section className='padding-x py-10'>
        <Products />
      </section>
      <section className='padding'>
        <RequestQuote />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;