import React from 'react'
import {
  PersonWrapper,
  Name,
  Details,
  Attributes,
  Square,
  IconWrapper
} from './styles';

// components
import Icon from '../../library/Icon';

export default ({ name, height, mass, gender, species }) => {
  const getSpecies = (url) => {
    // get the index in the string
    const index = url[0].length - 2;

    // get the type of species (1 or 2)
    const type = url[0].charAt(index);

    switch (type) {
      case '1':
        return "fa fa-user-circle";
      case '2':
        return "fa fa-android";
      default:
        return "fas fa-question";
    }
  }

  return (
    <PersonWrapper>
      <IconWrapper>
        <Icon icon={getSpecies(species)} />
      </IconWrapper>
      <Details>
        <Name>{name}</Name>
        <Attributes>
          <span>HEIGHT: {height}</span>
          <Square>&#x025AA;</Square>
          <span>MASS: {mass}</span>
          <Square>&#x025AA;</Square>
          <span>GENDER: {gender}</span>
        </Attributes>
      </Details>
    </PersonWrapper>
  )
}
