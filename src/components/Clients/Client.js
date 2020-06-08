import React from "react"
import Image from "gatsby-image"
import styles from "../../css/client.module.css"
import { BsPeopleCircle } from "react-icons/bs"
import AniLink from "gatsby-plugin-transition-link"

const Client = ({ client }) => {
  const { name, shortbio, afterImage } = client
  let mainImage = afterImage.fluid

  return (
    <article className={styles.client}>
      <div className={styles.imgContainer}>
        <Image
          fluid={mainImage}
          className={styles.img}
          alt="featured client photo"
        />
        <AniLink paintDrip hex="#222" className={styles.link} to={`/clients/${shortbio}`}>
          details
        </AniLink>  
      </div>
    </article>
  )
}

export default Client
