import * as React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ProjectCard from '../components/ProjectCard'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const articles = data.allMarkdownRemark.nodes.filter(node =>
    node.fileAbsolutePath.includes('articles')
  )

  const projects = data.allMarkdownRemark.nodes.filter(node =>
    node.fileAbsolutePath.includes('projects')
  )

  if (articles.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <Grid>
        {projects
          .filter(project => !project.frontmatter.draft)
          .map(project => {
            return <ProjectCard project={project} key={project.fields.slug} />
          })}
      </Grid>

      <ol style={{ listStyle: `none` }}>
        {articles
          .filter(article => !article.frontmatter.draft)
          .map(article => {
            const title = article.frontmatter.title || article.fields.slug

            return (
              <li key={article.fields.slug}>
                <article
                  className="article-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={article.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{article.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          article.frontmatter.description || article.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          draft
        }
        fileAbsolutePath
      }
    }
  }
`
