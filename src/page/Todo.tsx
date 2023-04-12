import React from 'react'
import styled from 'styled-components'
import Input from '../component/common/Input'
import TodoItem from '../component/common/TodoItem'
import Button from '../component/common/Button'

const Todo = () => {
  return (
    <TodoStyle>
      <TodoUl>
        <TodoItem
          id='todo1'
          content='Todo 1'
        />
        <TodoItem
          id='todo2'
          content='Todo 2'
        />
      </TodoUl>
      <InputAreaStyle>
        <Input
          dataTestid='new-todo-input'
          placeholder='할 일을 입력하세요.'
        />
        <Button
          buttonType='primaryType'
          dataTestid='new-todo-add-button'
          text='추가'
        />
      </InputAreaStyle>
    </TodoStyle>
  )
}

export default Todo

const TodoStyle = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
  padding: 20px;
`

const TodoUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const InputAreaStyle = styled.div`
  display: flex;
  margin-top: 20px;

  input {
    padding: 0 20px;
    font-size: 18px;
  }

  button {
    margin-left: 3px;
    border-radius: 5px;
  }
`
