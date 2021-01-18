import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  max-width: 90rem;
  margin: 4rem auto;
  display: flex;
  align-items: center;
`
const Navigate = styled.div`
  width: 4rem;
  height: 4rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 3rem;
    height: 3rem;
    color: white;
  }
`

export const NavigateLeft = styled(Navigate)`
  margin-right: 1rem;
`

export const NavigateRight = styled(Navigate)`
  margin-left: 1rem;
`

export const List = styled.div`
  background: violet;
  width: 100%;
  overflow-x: hidden;
`

export const Track = styled.div`
  display: flex;
  transition: all 0.5s ease-out;

  ${({ translateX, width }) => css`
    transform: translateX(${translateX}px);
    width: ${width}px;
  `}
`

export const Chart = styled.div`
  height: 40rem;
  flex: 1 0;
  background: white;
  border: 1px solid red;
  color: white;
  font-size: 4rem;
  font-weight: 600;
  overflow-y: hidden;
`
