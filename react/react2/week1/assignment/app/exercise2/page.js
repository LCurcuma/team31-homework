"use client";

import { useState, useEffect } from "react";
import React from "react";

export default function Page() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=AT9pqz2uwwKtX0fPqXfmuJYeJ36lybfO62KSfLXt"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // const images = data.photos();
        // setData(images);
        setData(data);
      });
  }, []);

  console.log(data);

  return (
    <>
      {data?.photos?.map((image) => (
        <img key={image.id} src={image.img_src}></img>
      ))}
    </>
  );
}
