import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const FlexedBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: #fff;
  border-radius: 4px;
`;


const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "ryan-hamilton.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 520) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)


const IndexPage = () => (
  <Layout>
    <SEO title="Ryan Hamilton" keywords={[`product designer`, `ux designer`, `cincinnati`]} />

    <FlexedBox>
      <div style={{ overflow: 'hidden', width: '50%' }}>
        <Image style={{ borderRadius: '0 4px 4px 0' }} />
      </div>
      <div style={{ width: '50%', padding: '2rem' }}>
        <h1>Ryan <abbr title="Armstrong">A</abbr>. Hamilton</h1>

        <p>Cincinnati based product designer. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>

        <Link to="/contact/" className="button">Contact</Link>
        <Link to="/work/" className="button">Work</Link>
      </div>
    </FlexedBox>
  </Layout>
)

export default IndexPage
