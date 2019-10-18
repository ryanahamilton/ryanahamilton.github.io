import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact"  />

    <div
      style={
        {
          backgroundColor: '#fff',
          borderRadius: '4px',
        }
      }
    >
      <Link to="/">&gt; Back home</Link>
      <h1>Contact</h1>
    </div>
  </Layout>
)

export default ContactPage
