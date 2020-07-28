import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query ListingQuery {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 2400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              description
            }
          }
        }
      }
    }
  `);
  console.log(data.allMarkdownRemark.edges);
  console.log(
    data.allMarkdownRemark.edges[0].node.frontmatter.featuredimage
      .childImageSharp.fluid
  );
  return (
    <Layout>
      <section>
        <ul>
          {data.allMarkdownRemark.edges.map((item, i) => {
            return (
              <li key={i}>
                <Link to={item.node.fields.slug}>
                  {' '}
                  {item.node.frontmatter.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default IndexPage;
