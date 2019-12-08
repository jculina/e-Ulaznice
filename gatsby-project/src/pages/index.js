import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import "../styles/index.css"
import Img from "gatsby-image"

const NaslovnicaPage = props => {
  return (
    <Layout>
      <main>
        <p class="main-p-title">Najpopularnije</p>
        <div id="main-container-najpopularnije">
          <div class="main-container-item-najpopularnije">
            <p class="main-item-najpopularnije-kategorija">Glazba</p>
            <Img
              className="main-najpopularnije-img"
              fluid={props.data.glazba.childImageSharp.fluid}
            />
            <p class="main-item-najpopularnije-dogadaj">
              Koncert Parnog valjka
            </p>
          </div>
          <div class="main-container-item-najpopularnije">
            <p class="main-item-najpopularnije-kategorija">Kazalište</p>
            <Img
              className="main-najpopularnije-img"
              fluid={props.data.kazaliste.childImageSharp.fluid}
            />
            <p class="main-item-najpopularnije-dogadaj">Orašar</p>
          </div>
          <div class="main-container-item-najpopularnije">
            <p class="main-item-najpopularnije-kategorija">Sport</p>
            <Img
              className="main-najpopularnije-img"
              fluid={props.data.sport.childImageSharp.fluid}
            />
            <p class="main-item-najpopularnije-dogadaj">Hajduk-Dinamo</p>
          </div>
          <div class="main-container-item-najpopularnije">
            <p class="main-item-najpopularnije-kategorija">Ostalo</p>
            <Img
              className="main-najpopularnije-img"
              fluid={props.data.ostalo.childImageSharp.fluid}
            />
            <p class="main-item-najpopularnije-dogadaj">Kralj lavova</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default NaslovnicaPage

export const query = graphql`
  query {
    glazba: file(relativePath: { eq: "naslovnica_glazba.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    kazaliste: file(relativePath: { eq: "naslovnica_kazaliste.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sport: file(relativePath: { eq: "naslovnica_sport.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    ostalo: file(relativePath: { eq: "naslovnica_ostalo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
