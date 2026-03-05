import Hero from '../components/Hero';
import AboutOrganization from '../components/AboutOrganization';
import RepairSolutions from '../components/RepairSolutions';
import RepairProcess from '../components/RepairProcess';
import LatestBlogs from '../components/LatestBlogs';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Hero />
      <AboutOrganization />
      <RepairSolutions />
      <RepairProcess />
      <FAQ />
      <LatestBlogs />
      <ContactSection />
    </div>
  );
};

export default Home;




