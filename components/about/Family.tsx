import Image from "next/image";

export default function Family() {
  return (
    <div className="mt-24">
      <h1 className="text-3xl pb-8">Family</h1>
      <div className="flex flex-col mx-20">
        <div className="">
          <div className="lg:flex-wrap  sm:w-[400px] lg:w-[600px]">
            <Image
              src="/images/generation.jpg"
              width={600}
              height={500}
              alt="Family"
              className="float-left mr-8 mb-4"
            />
          </div>
          <div className="space-y-8 font-medium text-[14px] xl:text-[18px]">
            <p>
              I share my life with my amazing wife, Nien, and our adventurous
              dog, Layla. We&apos;re always out exploring trails and taking
              trips, with Layla proudly leading the pack as our fearless guide.
              My wife and I are extremely close and I proposed to her at
              Disneyland—cheesy I know, but I couldn&apos;t believe it myself.
              To add a twist, I proposed with Star Wars actors on my side while
              we were building our light sabers. A unique Kyber crystal was in
              my pocket that belonged to her. She couldn&apos;t believe it. But
              after our light sabers were built I had then found out she&apos;s
              a Sith Lord. I guess you can say we&apos;re perfectly balanced.
            </p>
            <p>
              Music is the heartbeat of our family gatherings. Whether it&apos;s
              jamming with my parents, siblings, and wife, or just creating our
              own tunes, it&apos;s an absolute blast and a great way to bond. My
              in-laws share this love for music, and it&apos;s been an
              incredible way to connect. Recording songs with my sisters-in-law
              showed me how talented they are, and our trips to music festivals
              have been unforgettable. They&apos;ve truly become a cherished
              part of my life.
            </p>
            <p>
              My dad is a constant source of inspiration, finding ways to
              connect through music and his expertise in IT and systems
              architecture. He&apos;s an incredible pianist, filling our
              childhood home with the sounds of Gershwin. My mom was the
              ultimate fun-bringer, cheering me on at every baseball game and
              giving me the freedom to explore whatever sparked my interest. One
              unforgettable adventure was when my mom, two sisters, grandfather,
              and I embarked on a two-month road trip from Las Vegas to Alaska
              in an RV. It was hands down one of the best trips of my life! We
              explored national parks and museums, but the real highlights were
              reeling in loads of salmon, landing a 50-pound halibut, and
              starting campfires almost every night. It was an epic journey
              filled with laughs and memories that I&apos;ll cherish forever.
            </p>
            <p className="flex items-center justify-center text-xl font-black">
              Family is extremely important in my life and I couldn&apos;t go on
              without them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
