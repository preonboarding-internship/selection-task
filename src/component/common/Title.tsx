import React from 'react'
import styled from 'styled-components'

interface ITitle {
  titleType: string
  title: string
  fontSize?: string
  margin?: string
  padding?: string
}

const Title = ({
  titleType,
  title,
  fontSize = '',
  margin = '',
  padding = '',
}: ITitle) => {
  return (
    <TitleStyle
      fontSize={fontSize}
      margin={margin}
      padding={padding}
    >
      {titleType === 'h1' && <h1>{title}</h1>}
      {titleType === 'h2' && <h2>{title}</h2>}
      {titleType === 'h3' && <h3>{title}</h3>}
    </TitleStyle>
  )
}

export default Title

const TitleStyle = styled.div<{
  fontSize: string
  margin: string
  padding: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  text-align: center;
`
