import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"
import { Formik } from "formik"
import * as EmailValidator from "email-validator"
import * as Yup from "yup"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="Contact" subtitle="Hank" />

      <div className={styles.center}>
        <div>
          <p>
            Feel free to get in touch with me!&nbsp;&nbsp; I'll do my best to
            get back to you ASAP.
          </p>
        </div>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Submitting")
          }}
          validationSchema={Yup.object.shape({
            name: Yup.string().required("Please enter your name"),
            email: Yup.string().email().required("Email is required"),
            message: Yup.string().required("Please enter a message"),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props
            return (
              <form
                action="https://formspree.io/jay.letheby@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className={styles.form}
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={styles.formControl}
                    placeholder="your name"
                  />
                  {errors.name && touched.name && (
                    <div className="input-Feedback">errors.name</div>
                  )}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={styles.formControl}
                    placeholder="email@email.com"
                  />
                  {errors.email && touched.email && (
                    <div className="input-Feedback">errors.email</div>
                  )}
                  <textarea
                    name="message"
                    id="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    rows="10"
                    className={styles.formControl}
                    placeholder="your message"
                  />
                  {errors.message && touched.message && (
                    <div className="input-Feedback">errors.message</div>
                  )}
                </div>
                <div>
                  <div>
                    <input
                      type="submit"
                      value="submit here"
                      disabled={isSubmitting}
                      className={styles.submit}
                    />
                  </div>
                </div>
              </form>
            )
          }}
        </Formik>
      </div>
    </section>
  )
}

export default Contact
