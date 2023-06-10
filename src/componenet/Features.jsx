import React from 'react'
import FeatureCard from './UI/FeatureCard'
import { serviceData } from "../data/serviceData"
import Container from './UI/Container'
const Features = () => {
  return (
    <Container className="md:grid md:grid-cols-2 lg:grid-cols-4">
      {serviceData.map(({ title, subtitle, bg, icon },index) => {
        return <FeatureCard key={index} title={title} bg={bg} subtitle={subtitle} />
      })}
    </Container>
  )
}

export default Features