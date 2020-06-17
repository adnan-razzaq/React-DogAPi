import React from "react";
import Dogs from "./Dogs";

export default function DogList({ images }) {
  return (
    <div className="grid md:grid-cols-4 gap-10 sm:grid-cols-2">
      {images.map((dog, index) => (
        <Dogs key={index} image={dog} />
      ))}
    </div>
  );
}
