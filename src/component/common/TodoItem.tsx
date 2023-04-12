import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import COLORS from '../../constant/root'

interface ITodoItem {
  id: string
  content: string
}

const TodoItem = ({ id, content }: ITodoItem) => {
  return (
    <TodoItemStyle>
      <label htmlFor={id}>
        <input
          type='checkbox'
          id={id}
        />
        <span>{content}</span>
      </label>
      <ButtonsStyle>
        <Button
          dataTestid='modify-button'
          text='수정'
          bgColor={COLORS.gray}
        />
        <Button
          dataTestid='delete-button'
          text='삭제'
          bgColor={COLORS.red}
          color={COLORS.white}
        />
      </ButtonsStyle>
    </TodoItemStyle>
  )
}

export default TodoItem

const TodoItemStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    cursor: pointer;

    input {
      width: 20px;
    }
  }
`

const ButtonsStyle = styled.div`
  display: flex;
  gap: 5px;

  button {
    padding: 5px 10px;
    border-radius: 5px;
  }
`
