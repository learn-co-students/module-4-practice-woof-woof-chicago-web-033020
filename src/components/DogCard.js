import React from 'react'

export default function DogCard(props) {
  return (
      <span onClick={() => props.handleClick(props.pup)}>{props.pup.name}</span>
  )
}
