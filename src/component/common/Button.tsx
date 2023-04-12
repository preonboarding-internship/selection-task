import React from 'react'

interface IButton {
  text: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ text, onClick }: IButton) => {
  return <button onClick={onClick}>{text}</button>
}

export default Button
