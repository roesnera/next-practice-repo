import styles from './page.module.css'
import Footer from "./Footer";
import Navbar from "./Navbar";
import HomeTopSection from "./HomeTopSection";
import HomeBottomSection from "./HomeBottomSection";


export default function Home() {
  return ( <>
        <Navbar />
        <div className="main">
            <HomeTopSection />
            <HomeBottomSection />
        </div>
        <Footer />
    </>)
}
