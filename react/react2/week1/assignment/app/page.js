"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";

export default function Home() {
  const ex1 = usePathname() + "exercise1";
  const ex2 = usePathname() + "exercise2";
  const ex3 = usePathname() + "exercise3";
  const ex4 = usePathname() + "exercise4";
  const ex5 = usePathname() + "exercise5";

  return (
    <div className={styles.page}>
      <a href={ex1}>Exercise 1</a>
      <a href={ex2}>Exercise 2</a>
      <a href={ex3}>Exercise 3</a>
      <a href={ex4}>Exercise 4</a>
      <a href={ex5}>Exercise 5</a>
    </div>
  );
}
