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
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <section>
        <ul>
          {data.allMarkdownRemark.edges.map((item, i) => {
            return (
              <li key={i}>
                <p>
                  <Link to={item.node.fields.slug}>
                    {' '}
                    {item.node.frontmatter.title}
                  </Link>
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default IndexPage;
