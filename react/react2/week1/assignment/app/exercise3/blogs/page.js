"use client";

import { usePathname } from "next/navigation";

export default function Page() {
  const pathName = usePathname() + "/my-new-post";

  return (
    <>
      <a href={pathName}>My New Post</a>
    </>
  );
}
