/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./bio.css"
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.JPG/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div id="bio">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(2 / 2),
          marginBottom: 0,
          minWidth: 10,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        I am <strong>{author.name}</strong>, a software developer based in
        Spain.
      </p>
    </div>
  )
}

export default Bio
