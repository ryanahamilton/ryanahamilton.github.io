/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Icon from '../components/Icon/Icon'

import './layout.css'



const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Helmet>
        <script src="http://use.edgefonts.net/source-sans-pro.js" />
      </Helmet>
        {/*<Header siteTitle={data.site.siteMetadata.title} />*/}
        <div className="container">
          <div className="layout">
            <main>{children}</main>
            <footer className="footer">
              <span>
                <a className="button-circle" href="https://twitter.com/ryanahamilton" target="_blank" rel="noopener noreferrer"><Icon icon="twitter" accessibilityLabel="Twitter" /></a>
                <a className="button-circle" href="https://instagram.com/ryanahamilton" target="_blank" rel="noopener noreferrer"><Icon icon="instagram" accessibilityLabel="Instagram" /></a>
                <a className="button-circle" href="https://www.linkedin.com/in/ryanhamilton" target="_blank" rel="noopener noreferrer"><Icon icon="linkedin" accessibilityLabel="LinkedIn" /></a>
                <a className="button-circle" href="https://github.com/ryanahamilton" target="_blank" rel="noopener noreferrer"><Icon icon="github" accessibilityLabel="GitHub" /></a>
              </span>
              <span>©{new Date().getFullYear()} Ryan Hamilton.</span>
            </footer>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
