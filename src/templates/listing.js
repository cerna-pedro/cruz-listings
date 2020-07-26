import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql} from 'gatsby'
import Layout from '../components/Layout'


export const ListingTemplate = ({
  description,
  title,
  helmet,
}) => {

  return (
    <section >
      {helmet || ''}
      <div >
        <div >
          <div >
            <h1 >
              {title}
            </h1>
            <p>{description}</p>


          </div>
        </div>
      </div>
    </section>
  )
}



const Listing = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <ListingTemplate
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}


export default Listing

export const pageQuery = graphql`
  query ListingByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
