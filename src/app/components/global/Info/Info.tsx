import Image from "next/image";
import Card from "../Card/Card";

export default function InfoSection() {
  return (
    <div className="flex flex-col justify-center mt-4 p-10 items-center min-w-full animate-fade-in bg-project-bg bg-cover bg-center rounded-[40px]">
      <h3 className="text-4xl text-[--brown] p-10">Synapse!</h3>
      <div className="flex flex-row justify-around xs:flex-col w-full xs:justify-center xs:items-center">
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
            <Image src="/tree.png" alt="Project 1" width={300} height={300} />
          </div>
        </Card>
      </div>
    </div>
  );
}
