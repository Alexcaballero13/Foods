import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css"

const Landing = () => {
  return (
    <div className={styles.entrance}>
      <Link to='/Home'>
        <button className={styles.button1}>Home</button>
      </Link>
    </div>
  )
}

export default Landing