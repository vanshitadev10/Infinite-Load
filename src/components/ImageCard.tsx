import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

export interface ImageProp {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface Prop {
  imageData: ImageProp;
  index: number;
}

const variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
}

const ImageCard = ({ imageData, index }: Prop) => {
  return (
    <MotionDiv
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{
        delay: index * 0.25,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      className="max-w-sm rounded relative w-full">
      <div className="relative w-full h-[37vh]">
        <Image
          src={imageData.url}
          alt={imageData.title}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {imageData.title}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              Img
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {+imageData.id - (+imageData.albumId-1)*50}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{imageData.albumId}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default ImageCard;