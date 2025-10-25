import Image from "next/image"


const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 z-10">
            <Image
                src="/images/bg.png"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
            />
        </div>

        <div className="hero-layout">
          {/* RIGHT SECTION */}
           <header className="flex flex-col justify-center md:w-full w-screen md:px-6 px-5">
                 <div className="flex flex-col gap-7">
                   <div className="hero-text">
                       <h1>Shapping Design</h1>
                       <h1>into Real Projects</h1>
                       <h1>that Deliver Results</h1>
                   </div>
                 </div>
           </header>


          {/* LEFT SECTION */}
        </div>

    </section>
  )
}

export default HeroSection

