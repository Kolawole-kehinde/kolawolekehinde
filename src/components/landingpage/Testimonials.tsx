"use client";

import { testimonials } from "@/src/constant";
import GlowCard from "../GlowCard";
import TitleHeader from "../TitleHeader";


export interface TestimonialItem {
  imgPath: string;
  name: string;
  mentions: string;
  review: string;
}

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding my-20">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials?.map((testimonial: TestimonialItem, index: number) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  {/* <p className="text-white-50">{testimonial.mentions}</p> */}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
