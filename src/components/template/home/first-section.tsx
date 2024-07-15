import Image from "next/image";
import Link from "next/link";

export default function FirstSection() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="relative h-full w-full overflow-hidden z-0">
          <div className="hidden lg:block">
            <Image
              src="/images/home/medic-first-section.jpg"
              alt="Medic First Section Large"
              fill
              className="object-cover"
            />
          </div>
          <div className="block lg:hidden">
            <Image
              src="/images/home/medic-first-section-sm.jpg"
              alt="Medic First Section Small"
              fill
              className="object-contain"
            />
          </div>
          <div className="lg:hidden absolute inset-0  top-1/3">
            <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-90"></div>
          </div>
          <div className="absolute h-fit lg:w-1/3 w-fit lg:top-2/4 bottom-0 lg:left-36 left-1/4 border-black p-4 flex flex-col z-10 font-sans gap-y-3">
            <div
              className="text-md font-bold tracking-widest"
              style={{ color: "hsl(202, 85%, 50%)" }}
            >
              CARING FOR LIFE
            </div>
            <div
              className="text-4xl font-bold font-serif"
              style={{ color: "hsl(231, 55%, 27%)" }}
            >
              Leading the way In Medical Excellence
            </div>
            <div className="pt-8">
              <button className="bg-blue-300 hover:bg-blue-400 animation-all ease-in-out duration-300 hover:scale-105 hover:rotate-1 text-black px-8 py-2 rounded-full">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full text-black font-bold flex flex-col justify-start items-center text-center">
        <h1
          className="text-3xl tracking-wider mt-10"
          style={{ color: "hsl(202, 85%, 50%)" }}
        >
          Welcome to Aetheris
        </h1>
        <h1
          className="pt-6 text-4xl font-bold font-serif"
          style={{ color: "hsl(231, 55%, 27%)" }}
        >
          A Great Place to Receive Care
        </h1>
        <div className="w-full flex justify-center pt-4">
          <Link href="/aboutUs">
            <div className="flex items-center text-md text-blue-400 hover:text-blue-600 tracking-tight font-semibold">
              Learn More
              <div className="ml-2 w-4 h-4 relative">
                <Image
                  src="/symbols/right-arrow.png"
                  fill
                  alt="Symbol of a right arrow"
                  className="objectFit-contain"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
