import React from "react";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  // Generate dynamic image paths from "gallery15.jpg" to "gallery27.jpg"
  const dynamicImagePaths = Array.from({ length: 13 }, (_, i) => ({
    src: `/images/gallery/gallery${i + 15}.jpg`,
    alt: `Gallery Image ${i + 15}`,
    title: `Gallery Image ${i + 15}`,
  }));

  return (
    <div className="container mx-auto flex justify-center items-center max-w-7xl p-4 md:p-12">
      <div className="masonry">
        {/* Render dynamic images */}
        {dynamicImagePaths.map((image, index) => (
          <div className="brick" key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              title={image.title}
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="rounded-3xl"
            />
          </div>
        ))}
      </div>
      {/* .masonry */}
    </div>
  );
};

export default page;
