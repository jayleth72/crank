import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about barefoot homeschooling" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>The Crank Story</h4>
          <p>
            Alderaan? I'm not going to Alderaan. I've got to go home. It's late,
            I'm in for it as it is. He is here. Don't act so surprised, Your
            Highness. You weren't on any mercy mission this time. Several
            transmissions were beamed to this ship by Rebel spies. 
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
