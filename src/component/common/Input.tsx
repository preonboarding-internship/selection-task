import React from 'react'
import styled from 'styled-components'
import COLORS from '../../constant/root'

interface IInput {
  inputType?: string
  type?: string
  placeholder?: string
  dataTestid?: string
  children?: React.ReactNode
}

const Input = ({
  inputType = 'textType',
  type = 'text',
  placeholder,
  dataTestid,
  children,
}: IInput) => {
  return (
    <InputStyle inputType={inputType}>
      <input
        data-testid={dataTestid}
        type={type}
        placeholder={placeholder}
      />
      {children}
    </InputStyle>
  )
}

export default Input

const InputStyle = styled.div<{
  inputType: string
}>`
  border: 1px solid ${COLORS.primary};
  border-radius: 5px;

  input {
    padding: 15px 30px;
  }

  ${({ inputType }) => handleInputType(inputType)}
`

const handleInputType = (inputType: string) => {
  switch (inputType) {
    case 'textType':
      return ``
  }
}
