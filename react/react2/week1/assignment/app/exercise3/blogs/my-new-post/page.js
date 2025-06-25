"use client";

import { usePathname } from "next/navigation";

export default function Page() {
  const pathName = usePathname();
  const pathNameArray = pathName.split("/");
  const title = pathNameArray[pathNameArray.length - 1];

  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
