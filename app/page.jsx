import Hero from '@/components/Hero'
import Featured from '../components/Featured';
import Categories from '../components/Categories';
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Tagline from '../components/Tagline';

export default function Home() {
  return (
    <section className=" ">
      <Hero />
      <Tagline />
      <Featured  />
      <Categories />
      <FAQ />
      <Contact />
    </section>
  );
}
