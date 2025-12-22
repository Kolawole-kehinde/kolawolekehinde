import Image from "next/image";
import { abilities } from "@/src/constant";

const FeatureCards = () => {
  return (
    <main className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur">
              <div className="relative w-10 h-10">
                <Image
                  src={imgPath}
                  alt={title}
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
            </div>

            <h3 className="text-white text-2xl font-semibold mt-2">
              {title}
            </h3>

            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FeatureCards;
