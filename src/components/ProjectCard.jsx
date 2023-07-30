import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Card = styled.div`
  border-radius: 8px;
  border: 1px solid var(--color-text-light);
  background-color: #ffffff;
  padding: 16px;

  flex: 1;

  &:hover {
    box-shadow: 2px 2px 0 0 var(--color-shadow);
  }
`

const CardHeading = styled.h3`
  margin: 0;
`

const ProjectCard = ({ project }) => {
  return (
    <Link to={project.fields.slug} itemProp="url">
      <Card>
        <CardHeading>{project.frontmatter.title}</CardHeading>
      </Card>
    </Link>
  )
}

export default ProjectCard
