import React from 'react';
import styled from 'styled-components';
import useFetchData from '../../hooks/useFetchData';

// components
import Person from '../../components/Person';

const PeopleWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 850px;
`

export default () => {
  const { data: { results }, isLoading, error } = useFetchData('https://swapi.co/api/people/');

  const showLoading = () => <div>Spinner</div>

  const showPeople = () => {
    if (!isLoading && results && results.length > 0) {
      return results.map(({ name, height, mass, gender, species }) => <Person name={name} height={height} mass={mass} gender={gender} species={species} />)
    }
    return;
  }

  return (
    <PeopleWrapper>
      {error && <div>{error}</div>}
      {isLoading ? showLoading() : showPeople()}
    </PeopleWrapper>
  )
}
