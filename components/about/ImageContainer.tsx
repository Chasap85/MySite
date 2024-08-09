import Image from "next/image";

export default function ImageContainer() {
  return (
    <div className="mx-24 space-y-48">
      <div className="flex justify-start items-center">
        <div className="flex-wrap mr-48">
          <Image
            src="/images/nien.jpg"
            alt=""
            width={500}
            height={500}
            className="float-left"
          />
        </div>
        <div className="flex flex-col justify-start items-start ml-12 ">
          <h3 className="text-2xl border-b-4 border-[--black] p-4">
            My Wife Nien 🥰
          </h3>
          <p className="font-medium text-[15px] py-12">
            Picture of her while we were eating sushi :)
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-start items-start ml-12 ">
          <h3 className="text-2xl border-b-4 border-[--black] p-4">Layla 🥲</h3>
          <p className="font-medium text-[15px] py-12">
            While we were out hiking in Red Rock Canyon, Las Vegas
          </p>
        </div>
        <div className="flex-wrap ml-48">
          <Image
            src="/images/Layla.jpg"
            alt=""
            width={500}
            height={500}
            className="float-right"
          />
        </div>
      </div>

      <div className="w-full">
        <Image
          src="/images/mtb.jpg"
          width={1300}
          height={100}
          alt=""
          className="mx-auto"
        />
        <p className="text-center py-8">Mountain Biking in Texas</p>
      </div>

      <div className="flex justify-start items-center">
        <div className="flex-wrap mr-12">
          <Image
            src="/images/proposal.jpg"
            alt=""
            width={500}
            height={500}
            className="float-left"
          />
        </div>
        <div className="flex flex-col justify-start items-start mx-12 ">
          <h3 className="text-2xl border-b-4 border-[--black] p-4">Proposal</h3>
          <p className="font-medium text-[15px] py-12">
            After I proposed to my wife during our light saber crafting
          </p>
        </div>
        <div className="flex-wrap mr-12">
          <Image
            src="/images/grad.jpg"
            alt=""
            width={500}
            height={500}
            className="float-left"
          />
        </div>
        <div className="flex flex-col justify-start items-start ml-12 ">
          <h3 className="text-2xl border-b-4 border-[--black] p-4">
            Graduation
          </h3>
          <p className="font-medium text-[15px] py-12">
            Posing during my graduation.
          </p>
        </div>
      </div>

      <div>
        <Image
          src="/images/chicago.jpg"
          width={900}
          height={800}
          alt=""
          className="mx-auto"
        />
        <p className="text-center py-8">Chicago</p>
      </div>

      <div className="flex justify-start items-center">
        <div className="flex-wrap mr-12">
          <Image
            src="/images/att.jpg"
            alt=""
            width={500}
            height={500}
            className="float-left"
          />
        </div>
        <div className="flex flex-col justify-start items-start mx-12 ">
          <h3 className="text-2xl border-b-4 border-[--black] p-4">
            AT&T Park
          </h3>
          <p className="font-medium text-[15px] py-12">
            Watching the Giants play at AT&T Park against the Reds
          </p>
        </div>
        <div className="flex-wrap mr-12">
          <Image
            src="/images/mom.jpg"
            alt=""
            width={500}
            height={500}
            className="float-left"
          />
        </div>
        <div className="flex flex-col justify-start items-start ml-12 ">
          <h3 className="text-2xl border-b-4 border-[--black] p-4">
            Las Vegas Aviators
          </h3>
          <p className="font-medium text-[15px] py-12">
            Pictured here with my mom at the Las Vegas Aviators game
          </p>
        </div>
      </div>

      <div className="flex justify-start items-center">
        <div className="flex-wrap mr-48">
          <Image
            src="/images/drew.jpg"
            alt=""
            width={500}
            height={500}
            className="float-left"
          />
        </div>
        <div className="flex flex-col justify-start items-start ml-12 ">
          <h3 className="text-2xl border-b-4 border-[--black] p-4">Drew 😎</h3>
          <p className="font-medium text-[15px] py-12">
            My bestman and cousin Drewy at my wedding
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-start items-start ml-12 ">
          <h3 className="text-2xl border-b-4 border-[--black] p-4">Lost Dog</h3>
          <p className="font-medium text-[15px] py-12">
            The begiinning of one of my favorite mountain bike trails
          </p>
        </div>
        <div className="flex-wrap ml-48">
          <Image
            src="/images/lostDog.jpg"
            alt=""
            width={500}
            height={500}
            className="float-right"
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/images/nienWed.jpg"
          width={400}
          height={800}
          alt=""
          className="mx-auto"
        />
        <div className="space-y-4">
          <h1 className="font-black text-4xl">Lastly...</h1>
          <p className="text-xl">My Wife on our wedding day</p>
        </div>
      </div>
    </div>
  );
}
