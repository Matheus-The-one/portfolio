import Image from "next/image";
import { WorkContainer } from "./WorkContainer";
import { WorkLeft } from "./WorkLeft";
import { WorkRight } from "./WorkRight";
import { WorkTile } from "./workTiles";

interface WorkContentProps {
  work: WorkTile;
  progress?: number;
}

const stackStyles = [
  { rotate: "2deg", translateX: "8%", translateY: "-4%", scale: "0.88", zIndex: 1, opacity: 0.6 },
  { rotate: "-1.5deg", translateX: "3%", translateY: "3%", scale: "0.93", zIndex: 2, opacity: 0.8 },
  { rotate: "0deg", translateX: "0%", translateY: "0%", scale: "1", zIndex: 3, opacity: 1 },
];

export default function WorkContent({ work, progress = 0 }: WorkContentProps) {
  const { title, description, image, images } = work;
  const displayImages = images && images.length > 1 ? images : null;

  return (
    <WorkContainer>
      <WorkLeft progress={progress}>
        <div className="text-2xl font-medium md:text-3xl xl:text-4xl">
          {description}
        </div>
        <span className="text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
          {title}
        </span>
      </WorkLeft>
      <WorkRight progress={progress}>
        {displayImages ? (
          <div className="relative w-full" style={{ height: "320px" }}>
            {displayImages.map((img, i) => {
              const styleIndex = Math.max(0, stackStyles.length - displayImages.length + i);
              const s = stackStyles[styleIndex];
              return (
                <div
                  key={img.src}
                  className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
                  style={{
                    transform: `rotate(${s.rotate}) translateX(${s.translateX}) translateY(${s.translateY}) scale(${s.scale})`,
                    zIndex: s.zIndex,
                    opacity: s.opacity,
                  }}
                >
                  <Image
                    src={img.src}
                    alt={title}
                    width={img.width}
                    height={img.height}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="drop-shadow-2xl sm:mt-10 md:mt-24">
            <Image
              src={image.src}
              alt={title}
              width={image.width}
              height={image.height}
            />
          </div>
        )}
      </WorkRight>
    </WorkContainer>
  );
}
