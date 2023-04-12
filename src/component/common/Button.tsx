import React from 'react'
import styled from 'styled-components'
import COLORS from '../../constant/root'

interface IButton {
  buttonType?: string
  text: string
  dataTestid?: string
  bgColor?: string
  color?: string
  isDisabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  buttonType = 'primaryType',
  text,
  dataTestid,
  bgColor = '',
  color = '',
  isDisabled = false,
  onClick,
}: IButton) => {
  return (
    <ButtonStyle
      buttonType={buttonType}
      data-testid={dataTestid}
      onClick={onClick}
      bgColor={bgColor}
      color={color}
      disabled={isDisabled}
    >
      {text}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button<{
  buttonType: string
  bgColor: string
}>`
  height: 50px;
  padding: 0 50px;
  ${({ buttonType }) => handleButtonType(buttonType)}
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: 10px;
`

const handleButtonType = (buttonType: string) => {
  switch (buttonType) {
    case 'primaryType':
      return `
        background-color: ${COLORS.primary};
        color: ${COLORS.white};
      `
    case `transparent`:
      return `
        background-color: transparent;
        color: ${COLORS.black}
      `
  }
}
