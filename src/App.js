import React, { useEffect, useState } from "react";
import DogList from "./components/DogList";

export default function App() {
  const [breedlist, setbreedlist] = useState([]);
  const [breed, setbreed] = useState("hound");
  const [image, setimage] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((data) => data.json())
      .then((data) => {
        const res = Object.keys(data.message);
        setbreedlist(res);
      });
  }, []);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/hound/images/random/50`)
      .then((data) => data.json())
      .then((data) => setimage(data.message))
      .catch((error) => console.log(error));
  }, [breed]);

  const handlechange = (e) => {
    setbreed(e.target.value);
  };
  return (
    <>
      <div>
        <select
          className="p-20 w-screen bg-red-500 text-3xl "
          value={breed}
          onChange={handlechange}
        >
          {breedlist.map((list, index) => (
            <option className="text-3xl" key={index}>
              {list}
            </option>
          ))}
        </select>
        <div className="col-span-2">
          <DogList images={image} />
        </div>
      </div>
    </>
  );
}
