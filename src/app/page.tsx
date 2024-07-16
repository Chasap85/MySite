import Image from "next/image";
import Card from "./components/global/Card/Card";
import NavBar from "./components/global/NavBar/page";
import Hero from "./components/global/Hero/Hero";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between py-12">
      {/* <NavBar /> */}
      {/* hero */}
      <Hero />
      {/* Synapse */}
      <h3 className="text-4xl">Synapse!</h3>
      {/* Cards section */}
      <div className="flex flex-row justify-around my-4 w-full animate-fade-in">
        <Card>
          <h4 className="m-4">Project 1</h4>
          <p>Project description</p>
          <div className="">
            <Image
              className="" 
              src="/nature.png"
              alt="Project 1"
              width={400}
              height={400}
            />
          </div>
        </Card>
        <Card>
          <h4 className="m-4">Project 2</h4>
          <p>Project description</p>
          <div className="">
            <Image
              className="" 
              src="/mtb.png"
              alt="Project 1"
              width={300}
              height={200}
            />
          </div>
        </Card>
        <Card>
          <h4 className="m-4">Project 3</h4>
          <p>Project description</p>
          <div className="">
            <Image 
              src="/tree.png"
              alt="Project 1"
              width={300}
              height={300}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
