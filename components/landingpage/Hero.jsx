import { words } from "@/constant"
import Image from "next/image"
import Button from "../Button"


const HeroSection = () => {


    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute inset-0 z-10">
                <Image
                    src="/images/bg.png"
                    alt="Background Image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="hero-layout">
                {/* RIGHT SECTION */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-6 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Shapping
                                <span className="slide">
                                    <span className="wrapper">
                                        {
                                            words?.map((word) => (
                                                <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                    <Image
                                                        src={word.imgPath}
                                                        alt={word.text}
                                                        width={20}
                                                        height={20}
                                                        className="xl:size-12 md:size-10 size-7 p-1 md:p-2 rounded-full bg-white-50"
                                                    />
                                                    <span>{word.text}</span>
                                                </span>
                                            ))
                                        }
                                    </span>
                                </span>
                            </h1>

                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, Im khenncool, a developer based in Nigeria with a passion for code
                        </p>
                        <Button
                            className="w-60 h-12 md:w-80 md:h-16"
                            id="button"
                            text="See My Work"
                        />

                    </div>

                </header>


                {/* LEFT SECTION */}
            </div>

        </section>
    )
}

export default HeroSection

