"use client";

import styles from "./page.module.css";

export default function Home() {
  const exercises = ["http://localhost:3000/exercise1/part1", 'http://localhost:3000/exercise1/part2', 'http://localhost:3000/exercise2', 'http://localhost:3000/exercise3', 'http://localhost:3000/exercise4']
  return (
    <div className={styles.page}>
      {exercises.map((exercise, index) => (
        <a href={exercise} key={index}>Exercise {index+1}</a>
      ))}
    </div>
  );
}
