import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import DogadajiStyle from "../styles/dogadaji.module.css"
import { Button } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Swal from "sweetalert2"
import SEO from "../components/seo"
import "../styles/style.css"
import eventsList from "../data/dogadaji.json"
import DogadajImage from "../components/dogadajImage"
import IconImage from "../components/iconImage"

function ok() {
  Swal.fire({
    title: "Jeste li sigurni da želite kupiti ovu ulaznicu?",
    text: "Nakon pristanka na kupnju nećete moći odustati!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "success",
    cancelButtonColor: "#ff0000",
    confirmButtonText: "Da",
    cancelButtonText: "Odustani",
  }).then(result => {
    if (result.value) {
      Swal.fire("Vaša kupnja je uspješno obavljena!", "", "success")
    }
  })
}

const DogadajiPage = props => {
  const [searchInput, setSearchInput] = useState("sport")
  const [searchResult, setSearchResult] = useState([])
  const handleChange = e => {
    setSearchInput(e.target.value)
  }
  useEffect(() => {
    const results = eventsList.filter(eve =>
      eve.captionText.toLowerCase().includes(searchInput.toLowerCase())
    )
    setSearchResult(results)
  }, [searchInput])
  return (
    <Layout>
      <SEO title="Događaji" />
      <div className={DogadajiStyle.page}>
        <div className={DogadajiStyle.pageDiv}>
          <h3 className={DogadajiStyle.pageTitle}>Događaji</h3>
          <div id={DogadajiStyle.searchContainer} style={{ display: "none" }}>
            <Img
              className={DogadajiStyle.searchImage}
              fluid={props.data.searchIcon.childImageSharp.fluid}
            />
            <input
              type="text"
              value={searchInput}
              onChange={handleChange}
              id={DogadajiStyle.search}
              placeholder="Pretraživanje"
            />
          </div>
          <div
            className={DogadajiStyle.cardContainer}
            id={DogadajiStyle.cardCont}
          >
            {searchResult.map(item => (
              <div className={DogadajiStyle.card}>
                <div className={DogadajiStyle.cardImage}>
                  <DogadajImage
                    className={DogadajiStyle.image}
                    filename={item.image.src}
                  />
                </div>
                <div className={DogadajiStyle.content}>
                  <p className={DogadajiStyle.cardTitle}>{item.caption}</p>
                  <div className={DogadajiStyle.category}>
                    <p className={DogadajiStyle.categoryTitle}>
                      {item.captionText}
                    </p>

                    <div className={DogadajiStyle.categoryImage}>
                      <IconImage filename={item.icon.src} />
                    </div>
                  </div>
                  <div className={DogadajiStyle.dateLocation}>
                    <p className={DogadajiStyle.location}>{item.place}</p>
                    <p className={DogadajiStyle.date}>{item.date}</p>
                  </div>
                </div>
                <div className={DogadajiStyle.priceButton}>
                  <p className={DogadajiStyle.price}>{item.price}</p>
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
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DogadajiPage

export const query = graphql`
  query {
    searchIcon: file(relativePath: { eq: "search.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
