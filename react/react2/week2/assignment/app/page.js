"use client";

import { usePathname } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const exercises = [usePathname()+"exercise1/part1", usePathname()+'exercise1/part2', usePathname()+'exercise2', usePathname()+'exercise3', usePathname()+'exercise4']
  return (
    <div className={styles.page}>
      {exercises.map((exercise, index) => (
        <a href={exercise} key={index}>Exercise {index+1}</a>
      ))}
    </div>
  );
}
