import React from 'react'
import { Link } from 'gatsby'

const ProjectCard = ({ project }) => {
  return (
    <Link to={project.fields.slug} itemProp="url">
      <h2>{project.frontmatter.title}</h2>
    </Link>
  )
}

export default ProjectCard
