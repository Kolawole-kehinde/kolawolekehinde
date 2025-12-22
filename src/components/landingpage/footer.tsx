import { socialImgs } from "@/src/constant";
import Image from "next/image";

interface SocialImage {
  imgPath: string;
  alt?: string;
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Terms & Condition */}
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        {/* Social Icons */}
        <div className="socials">
          {socialImgs?.map((socialImg: SocialImage, index: number) => (
            <div key={index} className="icon">
              <Image
                src={socialImg.imgPath}
                alt={socialImg.alt || "social icon"}
                width={20}
                height={20}
                priority
              />
            </div>
          ))}
        </div>

        {/* Footer Rights */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Kolawole Kehinde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
