import React from "react";

const ImageGrid = () => {
  // Generate file paths for images from "ai-photos" folder
  const imagePaths = Array.from({ length: 14 }, (_, i) => `/ai-photos/ai${i + 1}.jpg`);

  return (
    <div className="">
      <div className="columns-1 gap-2 sm:columns-2 sm:gap-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-2">
        {imagePaths.map((path, index) => (
          <img key={index} src={path} alt={`AI Photo ${index + 1}`} className="rounded-3xl" />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
