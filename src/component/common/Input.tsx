import styled from 'styled-components'
import COLORS from '../../constant/root'

interface IInput {
  inputType?: string
  type?: string
  item?: string
  errorMessage?: string
  placeholder?: string
  dataTestid?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input = ({
  inputType = 'textType',
  type = 'text',
  item = '',
  errorMessage,
  placeholder,
  dataTestid,
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
      {item.length > 0 && errorMessage ? (
        <p className='inValid'>{errorMessage}</p>
      ) : null}
    </InputStyle>
  )
}

export default Input

const InputStyle = styled.div<{
  inputType: string
}>`
  input {
    border: 1px solid ${COLORS.primary};
    border-radius: 5px;
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
