import React from 'react'
import { Card } from 'semantic-ui-react'

const ProjectCard = (props) => {
  return (
    <Card as='a' href={props.url} target="_blank">
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className="date">BUILT IN {props.year}</span>
        </Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
           {props.icon}
        </Card.Content>
    </Card>
  )
}

export default ProjectCard