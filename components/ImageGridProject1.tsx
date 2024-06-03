import Image from "next/image";
import React from "react";

const ImageGridProject1 = () => {
  // Generate file paths for images from "ai-photos" folder
  const imagePaths = Array.from({ length: 14 }, (_, i) => `/images/gallery/gallery${i + 1}.jpg`);

  return (
    <div className="">
      <div className="columns-1 gap-2 sm:columns-2 sm:gap-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-2">
        {imagePaths.map((path, index) => (
          <Image sizes="(max-width: 768px) 100vw, 33vw"	         width={500}
          height={500} key={index} src={path} alt={`AI Photo ${index + 1}`} className="rounded-3xl" />
        ))}
      </div>
    </div>
  );
};

export default ImageGridProject1;
