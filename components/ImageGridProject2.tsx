import Image from "next/image";
import React from "react";

const ImageGridProject2 = () => {
  // Generate file paths for images from "gallery15.jpg" to "gallery27.jpg"
  const imagePaths = Array.from({ length: 15 }, (_, i) => `/images/gallery/gallery${i + 15}.jpg`);

  return (
    <div className="">
      <div className="columns-1 gap-2 sm:columns-2 sm:gap-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-2">
        {imagePaths.map((path, index) => (
          <Image 
            key={index} 
            src={path} 
            alt={`Gallery Image ${index + 15}`} 
            width={500} 
            height={500} 
            sizes="(max-width: 768px) 100vw, 33vw"
            className="rounded-3xl" 
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGridProject2;
