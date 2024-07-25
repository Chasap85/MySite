import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "@/components/Link";
import SubHeader from "@/components/SubHeader";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between py-4">
      <SubHeader />
      <Hero />
      <Link />
      <Footer />
    </div>
  );
}
