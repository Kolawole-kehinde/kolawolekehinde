"use client";

import Image from "next/image";
import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
}

const Button = ({ text, className, id }: ButtonProps) => {
  return (
    <a id={id} className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle">
          <p className="text text-center">{text}</p>
          <div className="arrow-wrapper">
            <Image
              src="/images/arrow-down.svg"
              alt="arrow"
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
