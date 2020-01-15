import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import NaslovnicaStyle from "../styles/index.module.css"

const NaslovnicaPage = props => {
  const items = [
    {
      src: props.data.kazaliste.childImageSharp.fluid,
      altText: "Prljavo kazalište",
      caption: "Prljavo kazalište",
      captionText: "Kultura",
    },

    {
      src: props.data.glazba.childImageSharp.fluid,
      altText: "Kralj lavova",
      caption: "Kralj lavova",
      captionText: "Film",
    },
    {
      src: props.data.sport.childImageSharp.fluid,
      altText: "Hrvatska-Engleska",
      caption: "Hrvatska-Engleska",
      captionText: "Sport",
    },
    {
      src: props.data.ostalo.childImageSharp.fluid,
      altText: "Ero s onoga svijeta",
      caption: "Ero s onoga svijeta",
      captionText: "Kultura",
    },
    {
      src: props.data.once.childImageSharp.fluid,
      altText: "Bilo jednom u Hollywoodu",
      caption: "Bilo jednom u Hollywoodu",
      captionText: "Film",
    },
    {
      src: props.data.orasar.childImageSharp.fluid,
      altText: "Orašar",
      caption: "Orašar",
      captionText: "Kultura",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        {/* <img src={item.src} alt={item.altText} /> */}
        <Img
          fluid={item.src}
          alt={item.altText}
          className={NaslovnicaStyle.crouselImage}
          imgStyle={{
            objectFit: "fill", //PROMIJENITI
          }}
        />
        <Link to="/dogadaji">
          <CarouselCaption
            captionText={item.captionText}
            captionHeader={item.caption}
            id={NaslovnicaStyle.caption}
          />
        </Link>
      </CarouselItem>
    )
  })

  return (
    <Layout>
      <div className={NaslovnicaStyle.divCarousel}>
        <Carousel
          className={NaslovnicaStyle.Carousel}
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
      <div className={NaslovnicaStyle.divRest}>
        <div className={NaslovnicaStyle.rest}>
          <h2 className={NaslovnicaStyle.categoryTitle}>Kategorije</h2>
          <div className={NaslovnicaStyle.cardContainer}>
            <div className={NaslovnicaStyle.card}>
              <Img
                className={NaslovnicaStyle.cardImage}
                fluid={props.data.cultureIcon.childImageSharp.fluid}
              />
              <h4
                className={NaslovnicaStyle.category}
                id={NaslovnicaStyle.kultura}
              >
                Kultura
              </h4>
              <p className={NaslovnicaStyle.categoryDescription}>
                From showrooms to sole agents, we have all the tools you need to
                take your
              </p>
              <Button
                className={NaslovnicaStyle.categoryButton}
                outline
                color="success"
              >
                Pogledajte više
              </Button>
            </div>
            <div className={NaslovnicaStyle.card}>
              <Img
                className={NaslovnicaStyle.cardImage}
                fluid={props.data.sportIcon.childImageSharp.fluid}
              />
              <h4
                className={NaslovnicaStyle.category}
                id={NaslovnicaStyle.sport}
              >
                Sport
              </h4>
              <p className={NaslovnicaStyle.categoryDescription}>
                From showrooms to sole agents, we have all the tools you need to
                take
              </p>
              <Button
                className={NaslovnicaStyle.categoryButton}
                outline
                color="primary"
              >
                Pogledajte više
              </Button>
            </div>
            <div className={NaslovnicaStyle.card}>
              <Img
                className={NaslovnicaStyle.cardImage}
                fluid={props.data.filmIcon.childImageSharp.fluid}
              />
              <h4
                className={NaslovnicaStyle.category}
                id={NaslovnicaStyle.film}
              >
                Film
              </h4>
              <p className={NaslovnicaStyle.categoryDescription}>
                All the insights you require to get your vehicles off the
                production line and
              </p>
              <Button
                className={NaslovnicaStyle.categoryButton}
                outline
                color="danger"
              >
                Pogledajte više
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NaslovnicaPage

export const query = graphql`
  query {
    orasar: file(relativePath: { eq: "orasar1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    once: file(relativePath: { eq: "once1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    glazba: file(relativePath: { eq: "kralj.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    kazaliste: file(relativePath: { eq: "parni.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sport: file(relativePath: { eq: "sp.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    ostalo: file(relativePath: { eq: "ero.jpg" }) {
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
  }
`
