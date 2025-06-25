"use client";

import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const pathName = usePathname() + "/blogs";
  const searchParams = useSearchParams();
  const date = searchParams.get("date") || "2024-01-01";
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=AT9pqz2uwwKtX0fPqXfmuJYeJ36lybfO62KSfLXt`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setImage(data[0]);
        } else {
          setImage(null);
        }
      });
  }, [date]);

  console.log(image);
  const [year, month, day] = date.split("-");

  return (
    <>
      <a href={pathName}>Blogs</a>
      <h1>{image?.caption}</h1>
      <img
        src={`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${image?.image}.jpg`}
      ></img>
    </>
  );
}
