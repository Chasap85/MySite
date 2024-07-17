import Image from "next/image";
import Card from "./components/global/Card/Card";
import NavBar from "./components/global/NavBar/page";
import Hero from "./components/global/Hero/Hero";
import InfoSection from "./components/global/Info/Info";
import Footer from "./components/global/Footer/Footer";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between py-4">
      <Hero />
      <InfoSection />
      <Footer />
    </div>
  );
}
