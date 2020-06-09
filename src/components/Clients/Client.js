import React from "react"
import Image from "gatsby-image"
import styles from "../../css/client.module.css"
import { BsPeopleCircle } from "react-icons/bs"
import AniLink from "gatsby-plugin-transition-link"

const Client = ({ client }) => {
  const {
    name,
    shortBio,
    workoutPersona,
    favouriteExercise,
    starSign,
    afterImage,
  } = client
  let mainImage = afterImage.fluid

  return (
    <article className={styles.client}>
      <div className={styles.imgContainer}>
        <Image
          fluid={mainImage}
          className={styles.img}
          alt="featured client photo"
        />
        <AniLink
          paintDrip
          hex="#222"
          className={styles.link}
          to={`/clients/${shortBio}`}
        >
          {name + "'s "} story
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.workout}>
            <BsPeopleCircle className={styles.icon} />
            {workoutPersona}
          </h4>
          <div className={styles.details}>
            <h6>Star Sign: {starSign}</h6>
            <h6>Favourite exercise: {favouriteExercise}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Client
