import React, { useState } from "react"
import Title from "./Title"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiSeminars {
      nodes {
        company
        date
        title
        strapiId
        desc {
          name
          id
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const {
    allStrapiSeminars: { nodes: seminars },
  } = data
  const [value, setValue] = useState(0)
  const { company, date, title, desc } = seminars[value]

  return (
    <section className="section jobs">
      <Title title="experience - Seminars" />
      <div className="jobs-center">
        <div className="btn-container">
          {seminars.map((seminar, index) => {
            return (
              <button
                key={seminar.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {seminar.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>Udemy</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More Info
      </Link>
    </section>
  )
}

export default Jobs
