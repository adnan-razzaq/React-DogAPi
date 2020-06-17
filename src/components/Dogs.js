import React from "react";

export default function Dogs({ image }) {
  return (
    <div className="bg-red-800 h-64">
      <img className="w-full h-full" src={image} alt="" />
    </div>
  );
}
