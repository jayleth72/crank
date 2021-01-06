import React from "react"
import styles from "../css/banner.module.css"
import logo from "../images/crank_white_acro.png"

const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <img src={logo} alt="crank with hank logo" />
      <p>{info}</p>
      {children}
    </div>
  )
}

export default Banner
