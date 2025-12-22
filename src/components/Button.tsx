"use client";

import Image from "next/image";

interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
}

const Button = ({ text, className, id }: ButtonProps) => {
  return (
    <a
      id={id}
      aria-label={text}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle">
          <p className="text">{text}</p>
          <div className="arrow-wrapper">
            <Image
              src="/images/arrow-down.svg"
              alt="Arrow icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Button;
