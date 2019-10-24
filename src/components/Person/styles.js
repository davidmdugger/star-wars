import styled from 'styled-components';

const PersonWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 5% 4%;
  :nth-child(even) {
    background-color: ${({ theme: { colors } }) => colors.grey};
  }
`

const Name = styled.div`
  font-family: ${({ theme: { fonts } }) => fonts.main};
  font-size: 60px;
  font-weight: 200;
  line-height: 1;
`

const Details = styled.div`
  flex: 15;
`

const Attributes = styled.div`
  font-family: ${({ theme: { fonts } }) => fonts.main};
  font-size: 24px;
  font-weight: 600;
`

const Square = styled.span`
  font-size: 16px;
  margin: 0 2%;
`

const IconWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`

export {
  PersonWrapper,
  Name,
  Details,
  Attributes,
  Square,
  IconWrapper
}