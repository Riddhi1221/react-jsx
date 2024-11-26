import React from 'react'
import Header from '../../Components/Header'
import Button from '../../Components/Form/Button'

const About = () => {
  return (
    <Header>
      About
      <Button >About Page</Button>
      <Button variant='outlined' css={{padding : "10px 40px"}}>About Page</Button>
    </Header>
  )
}

export default About
