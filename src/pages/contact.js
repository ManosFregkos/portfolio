import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="contact me" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in Touch</h3>
          <form action="https://formspree.io/f/xleozopa" method="POST">
            <div className="form-group">
              <input
                name="name"
                type="text"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                className="form-control"
                name="email"
              />
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="message"
              ></textarea>
              <button type="submit" className="submit-btn btn">
                submit here
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
