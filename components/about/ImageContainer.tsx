import Image from "next/image";

export default function ImageContainer() {
  return (
    <div className="xs:px-4 md:px-24 space-y-48">

      {/* Nien */}
      <div className="xs:flex xs:flex-col md:flex-row md:justify-between items-center xs:space-y-8 md:space-y-0">
        <div className="">
          <Image
            src="/images/nien.jpg"
            alt=""
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="p-4 items-center justify-center space-y-12">
          <h3 className="text-2xl border-b-4 border-[--black] text-center w-[14rem]">
            My Wife Nien 🥰
          </h3>
          <p className="font-medium text-[15px] max-w-[35ch]">
            Picture of her while we were eating sushi :)
          </p>
        </div>
      </div>

      {/* Layla */}
      <div className="xs:flex xs:flex-col md:flex-row md:justify-between items-center xs:space-y-8 md:space-y-0">
        <div className="p-4 items-center justify-center space-y-12">
          <h3 className="text-2xl border-b-4 border-[--black] text-center w-[14rem]">Layla 🥲</h3>
          <p className="font-medium text-[15px] max-w-[35ch]">
            While we were out hiking in Red Rock Canyon, Las Vegas
          </p>
        </div>
        <div className="">
          <Image
            src="/images/Layla.jpg"
            alt=""
            width={500}
            height={500}
            className=""
          />
        </div>
      </div>

      {/* Mountain Biking */}
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

      {/* side by side */}
      <div className="flex xs:flex-col lg:flex-row lg:justify-between items-center xs:space-y-8 md:space-y-0">
        <div className="">
          <Image
            src="/images/proposal.jpg"
            alt=""
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="p-4 items-center justify-center space-y-12 xs:pt-12 md:pt-0">
          <h3 className="border-b-4 border-[--black] text-center w-[8rem]">Proposal</h3>
          <p className="font-medium text-[12px] max-w-[35ch]">
            After I proposed to my wife during our light saber crafting
          </p>
        </div>
        <div className="xs:pt-12 md:pt-0">
          <Image
            src="/images/grad.jpg"
            alt=""
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="p-4 items-center justify-center space-y-12 xs:pt-12 md:pt-0">
          <h3 className="border-b-4 border-[--black] text-center w-[8rem]">
            Graduation
          </h3>
          <p className="font-medium text-[12px]">
            Posing during my graduation.
          </p>
        </div>
      </div>

      {/* Chicago */}
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

      {/* side by side */}
      <div className="flex xs:flex-col lg:flex-row lg:justify-between items-center xs:space-y-8 md:space-y-0">
        <div className="">
          <Image
            src="/images/att.jpg"
            alt=""
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="p-4 items-center justify-center space-y-12 xs:pt-12 md:pt-0">
          <h3 className="border-b-4 border-[--black] text-center w-[8rem]">
            AT&T Park
          </h3>
          <p className="font-medium text-[15px] max-w-[35ch]">
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
        <div className="p-4 items-center justify-center space-y-12 xs:pt-12 md:pt-0">
          <h3 className="text-2xl border-b-4 border-[--black] p-4">
            Las Vegas Aviators
          </h3>
          <p className="font-medium text-[15px] max-w-[35ch]">
            Pictured here with my mom at the Las Vegas Aviators game
          </p>
        </div>
      </div>

      {/* drew */}
      <div className="xs:flex xs:flex-col md:flex-row md:justify-between items-center xs:space-y-8 md:space-y-0">
        <div className="">
          <Image
            src="/images/drew.jpg"
            alt=""
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="p-4 items-center justify-center space-y-12">
          <h3 className="text-2xl border-b-4 border-[--black] text-center w-[14rem]">Drew 😎</h3>
          <p className="font-medium text-[15px] max-w-[35ch]">
            My bestman and cousin Drewy at my wedding
          </p>
        </div>
      </div>


      {/* Trail start */}
      <div className="xs:flex xs:flex-col md:flex-row md:justify-between items-center xs:space-y-8 md:space-y-0">
        <div className="p-4 items-center justify-center space-y-12">
          <h3 className="text-2xl border-b-4 border-[--black] text-center w-[14rem]">Lost Dog</h3>
          <p className="font-medium text-[15px] max-w-[35ch]">
            The begiinning of one of my favorite mountain bike trails
          </p>
        </div>
        <div className="">
          <Image
            src="/images/lostDog.jpg"
            alt=""
            width={500}
            height={500}
            className=""
          />
        </div>
      </div>


      {/* Last Photo */}
      <div className="xs:flex xs:flex-col md:flex-row md:justify-between items-center xs:space-y-8 md:space-y-0">
        <Image
          src="/images/nienWed.jpg"
          width={400}
          height={800}
          alt=""
          className=""
        />
        <div className="space-y-4 p-4">
          <h1 className="font-black xs:text-xl md:text-4xl">Lastly...</h1>
          <p className="xs:text-base md:text-xl">My Wife on our wedding day</p>
        </div>
      </div>
    </div>
  );
}
