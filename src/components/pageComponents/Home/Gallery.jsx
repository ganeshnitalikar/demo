import React from "react";
import { useSelector } from "react-redux";

const Gallery = () => {
  const { data } = useSelector((state) => state.college);

  return (
    <section id="gallery" className="p-8">
      <h2 className="text-3xl font-bold text-center mb-4">Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        {data?.galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="College"
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
