import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import DogadajiStyle from "../styles/dogadaji.module.css"
import { Button } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Swal from "sweetalert2"
import $ from "jquery"
import "../styles/style.css"

const evnt = ["Siri", "Alexa", "Google"]

function ok() {
  Swal.fire("Vaša kupnja je uspješno obavljena!", "", "success")
}

/* function myFunction() {
  var input, filter, cards, cardContainer, h5, title, i
  input = document.getElementById("search")
  filter = input.value.toUpperCase()
  cardContainer = document.getElementById("cardCont")
  cards = cardContainer.getElementsByClassName("card")
  for (i = 0; i < cards.length; i++) {
    title = cards[i].querySelector(".category p.cardTitle")
    if (title.innerText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = ""
    } else {
      cards[i].style.display = "none"
    }
  }
} */

const DogadajiPage = props => {
  //dodano
  const [searchInput, setSearchInput] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const handleChange = val => {
    setSearchInput(val)
    console.log("value", val)
  }
  useEffect(() => {
    const results = evnt.filter(eve => eve.toLowerCase().includes(searchInput))
    setSearchResult(results)
  }, [searchInput])
  //do tu
  return (
    <Layout>
      <div className={DogadajiStyle.page}>
        <div className={DogadajiStyle.pageDiv}>
          <h3 className={DogadajiStyle.pageTitle}>Događaji</h3>
          <div id={DogadajiStyle.searchContainer}>
            <Img
              className={DogadajiStyle.searchImage}
              fluid={props.data.searchIcon.childImageSharp.fluid}
            />
            <input
              type="text"
              //ovdje
              value={searchInput}
              onChange={e => handleChange(e.target.value)}
              id={DogadajiStyle.search}
              placeholder="Pretraživanje"
            />
            {searchResult.map(item => (
              <div
                className={DogadajiStyle.cardContainer}
                id={DogadajiStyle.cardCont}
              >
                <div className={DogadajiStyle.card}>
                  <div className={DogadajiStyle.cardImage}>
                    <Img
                      className={DogadajiStyle.image}
                      fluid={props.data.glazba.childImageSharp.fluid}
                    />
                  </div>
                  <div className={DogadajiStyle.content}>
                    <p className={DogadajiStyle.cardTitle}>{item}</p>
                    <div className={DogadajiStyle.category}>
                      <p className={DogadajiStyle.categoryTitle}>Kultura</p>
                      <Img
                        className={DogadajiStyle.categoryImage}
                        fluid={props.data.cultureIcon.childImageSharp.fluid}
                      />
                    </div>
                    <div className={DogadajiStyle.dateLocation}>
                      <p className={DogadajiStyle.location}>Pulska arena</p>
                      <p className={DogadajiStyle.date}>17.01.2020. u 20:00</p>
                    </div>
                  </div>
                  <div className={DogadajiStyle.priceButton}>
                    <p className={DogadajiStyle.price}>80,00 kn</p>
                    <Button
                      className={DogadajiStyle.button}
                      outline
                      color="danger"
                      onClick={ok}
                    >
                      Kupi ulaznice
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            {/* do tu */}
          </div>
          <div className={DogadajiStyle.cardContainer} id="cardCont">
            <div className={DogadajiStyle.card}>
              <div className={DogadajiStyle.cardImage}>
                <Img
                  className={DogadajiStyle.image}
                  fluid={props.data.glazba.childImageSharp.fluid}
                />
              </div>
              <div className={DogadajiStyle.content}>
                <p className={DogadajiStyle.cardTitle}>Parni valjak</p>
                <div className={DogadajiStyle.category}>
                  <p className={DogadajiStyle.categoryTitle}>Kultura</p>
                  <Img
                    className={DogadajiStyle.categoryImage}
                    fluid={props.data.cultureIcon.childImageSharp.fluid}
                  />
                </div>
                <div className={DogadajiStyle.dateLocation}>
                  <p className={DogadajiStyle.location}>Pulska arena</p>
                  <p className={DogadajiStyle.date}>17.01.2020. u 20:00</p>
                </div>
              </div>
              <div className={DogadajiStyle.priceButton}>
                <p className={DogadajiStyle.price}>80,00 kn</p>
                <Button
                  className={DogadajiStyle.button}
                  outline
                  color="danger"
                  onClick={ok}
                >
                  Kupi ulaznice
                </Button>
              </div>
            </div>
            <div className={DogadajiStyle.card}>
              <div className={DogadajiStyle.cardImage}>
                <Img
                  className={DogadajiStyle.image}
                  fluid={props.data.ostalo.childImageSharp.fluid}
                />
              </div>
              <div className={DogadajiStyle.content}>
                <p className={DogadajiStyle.cardTitle}>Kralj lavova</p>
                <div className={DogadajiStyle.category}>
                  <p className={DogadajiStyle.categoryTitle}>Film</p>
                  <Img
                    className={DogadajiStyle.categoryImage}
                    fluid={props.data.filmIcon.childImageSharp.fluid}
                  />
                </div>
                <div className={DogadajiStyle.dateLocation}>
                  <p className={DogadajiStyle.location}>Cinestar Split</p>
                  <p className={DogadajiStyle.date}>05.02.2020. u 17:00</p>
                </div>
              </div>
              <div className={DogadajiStyle.priceButton}>
                <p className={DogadajiStyle.price}>35,00 kn</p>
                <Button
                  className={DogadajiStyle.button}
                  outline
                  color="danger"
                  onClick={ok}
                >
                  Kupi ulaznice
                </Button>
              </div>
            </div>
            <div className={DogadajiStyle.card}>
              <div className={DogadajiStyle.cardImage}>
                <Img
                  className={DogadajiStyle.image}
                  fluid={props.data.sport.childImageSharp.fluid}
                />
              </div>
              <div className={DogadajiStyle.content}>
                <p className={DogadajiStyle.cardTitle}>Hajduk-Dinamo</p>
                <div className={DogadajiStyle.category}>
                  <p className={DogadajiStyle.categoryTitle}>Sport</p>
                  <Img
                    className={DogadajiStyle.categoryImage}
                    fluid={props.data.sportIcon.childImageSharp.fluid}
                  />
                </div>
                <div className={DogadajiStyle.dateLocation}>
                  <p className={DogadajiStyle.location}>Poljud</p>
                  <p className={DogadajiStyle.date}>22.01.2020. u 15:00</p>
                </div>
              </div>
              <div className={DogadajiStyle.priceButton}>
                <p className={DogadajiStyle.price}>100,00 kn</p>
                <Button
                  className={DogadajiStyle.button}
                  outline
                  color="danger"
                  onClick={ok}
                >
                  Kupi ulaznice
                </Button>
              </div>
            </div>
            <div className={DogadajiStyle.card}>
              <div className={DogadajiStyle.cardImage}>
                <Img
                  className={DogadajiStyle.image}
                  fluid={props.data.glazba.childImageSharp.fluid}
                />
              </div>
              <div className={DogadajiStyle.content}>
                <p className={DogadajiStyle.cardTitle}>Parni valjak</p>
                <div className={DogadajiStyle.category}>
                  <p className={DogadajiStyle.categoryTitle}>Kultura</p>
                  <Img
                    className={DogadajiStyle.categoryImage}
                    fluid={props.data.cultureIcon.childImageSharp.fluid}
                  />
                </div>
                <div className={DogadajiStyle.dateLocation}>
                  <p className={DogadajiStyle.location}>Pulska arena</p>
                  <p className={DogadajiStyle.date}>17.01.2020. u 20:00</p>
                </div>
              </div>
              <div className={DogadajiStyle.priceButton}>
                <p className={DogadajiStyle.price}>80,00 kn</p>
                <Button
                  className={DogadajiStyle.button}
                  outline
                  color="danger"
                  onClick={ok}
                >
                  Kupi ulaznice
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DogadajiPage

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
    cultureIcon: file(relativePath: { eq: "culture.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sportIcon: file(relativePath: { eq: "sport.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    filmIcon: file(relativePath: { eq: "film.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    searchIcon: file(relativePath: { eq: "searchModro.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
