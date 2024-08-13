import Header from "@/components/Header";
import Conclusion from "@/components/about/Conclusion";
import Family from "@/components/about/Family";
import ImageContainer from "@/components/about/ImageContainer";
import Intro from "@/components/about/Intro";

interface Props {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: Props) {
  return (
    <div className="flex flex-col">
        <Header />
        <Intro />
        <Family />

        <Conclusion />

        <ImageContainer />
      {children}
    </div>
  );
}
