import * as React from "react"
import { graphql } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

const BlogIndex = ({ data, location }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingTop: "20vh",
        textAlign: "center",
      }}
    >
      <div>
        <h3>PNG image</h3>
        <GatsbyImage
          image={data.png.childImageSharp.gatsbyImageData}
          alt="png image"
        />
      </div>
      <div>
        <h3>WEBP image</h3>
        <GatsbyImage
          image={data.webp.childImageSharp.gatsbyImageData}
          alt="webp image"
        />
      </div>
      <div>
        <h3>AVIF image</h3>
        <GatsbyImage
          image={data.avif.childImageSharp.gatsbyImageData}
          alt="avif image"
        />
      </div>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    avif: file(name: { eq: "damian-rogulski" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: TRACED_SVG, formats: [AVIF])
      }
    }
    png: file(name: { eq: "damian-rogulski" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: TRACED_SVG, formats: [AUTO])
      }
    }
    webp: file(name: { eq: "damian-rogulski" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: TRACED_SVG, formats: [WEBP])
      }
    }
  }
`
