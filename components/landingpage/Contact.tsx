"use client";

import TitleHeader from "../TitleHeader";
import Image from "next/image";
import CustomInput from "../CustomInput";
import { useContactForm } from "@/src/hooks/useContactForm";

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    onSubmit,
    loading,
  } = useContactForm();

  return (
    <section id="contact" className="flex-center py-10">
      <div className="w-full h-full md:px-10">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid-12-cols mt-16">
          {/* Left Side */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-7"
              >
                <CustomInput
                  control={control}
                  name="name"
                  label="Your Name"
                  placeholder="What’s your good name?"
                />

                <CustomInput
                  control={control}
                  name="email"
                  type="email"
                  label="Your Email"
                  placeholder="What’s your email address?"
                />

                <CustomInput
                  control={control}
                  name="message"
                  label="Your Message"
                  multiline
                  rows={5}
                  placeholder="How can I help you?"
                />

                <button
                  type="submit"
                  disabled={!isValid || loading}
                  className="cta-button group disabled:opacity-60"
                >
                  <div className="bg-circle" />
                  <p className="text">
                    {loading ? "Sending..." : "Send Message"}
                  </p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Right Side */}
          <div className="xl:col-span-7 min-h-96 flex justify-center items-center">
            <div className="relative w-[662px] h-[555px]">
              <Image
                src="/images/contactme.png"
                alt="Contact illustration"
                fill
                className="object-cover rounded-[20px]"
                sizes="(max-width: 768px) 100vw, 662px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
