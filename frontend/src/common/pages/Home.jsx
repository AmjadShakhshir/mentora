import Marketing from '../components/Marketing';
import Features from '../components/Features/Features';
import Community from '../components/Community';
import Niche from '../components/Niche';
import Testimonials from '../components/Testimonials/Testimonials';
import CaseStudies from '../components/CaseStudies/CaseStudies';

const Home = () => {
    return (
        <div>
            <Marketing />
            <Features />
            <Community />
            <Niche />
            <Testimonials />
            <CaseStudies />
        </div>
    )
}

export default Home