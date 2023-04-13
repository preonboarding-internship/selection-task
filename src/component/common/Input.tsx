import styled from 'styled-components'
import COLORS from '../../constant/root'

interface IInput {
  inputType?: string
  type?: string
  placeholder?: string
  dataTestid?: string
  children?: React.ReactNode
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input = ({
  inputType = 'textType',
  type = 'text',
  placeholder,
  dataTestid,
  children,
  onChange,
}: IInput) => {
  return (
    <InputStyle inputType={inputType}>
      <input
        data-testid={dataTestid}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
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
