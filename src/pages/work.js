import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const WorkPage = () => (
  <Layout>
    <SEO title="Work"  />

    <div
      style={
        {
          backgroundColor: '#fff',
          borderRadius: '4px',
        }
      }
    >
      <Link to="/">&gt; Back home</Link>
      <h1>Work</h1>
    </div>
  </Layout>
)

export default WorkPage
