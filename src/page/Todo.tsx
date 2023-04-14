import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Input from '../component/common/Input'
import Button from '../component/common/Button'
import { CREATETODO, DELETETODO, GETTODO } from '../api/todo'
import { FormStyle } from './SignUp'
import { ICreateTodo, IGetTodo } from '../interface/todo'
import COLORS from '../constant/root'
import TodoItem from '../component/common/TodoItem'

const Todo = () => {
  const [todos, setTodos] = useState<IGetTodo[]>([])
  const [form, setForm] = useState<ICreateTodo>({
    id: 1,
    todo: '',
    isCompleted: false,
    userId: 1,
  })
  useEffect(() => {
    ;(async () => {
      setTodos(await GETTODO())
    })()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await CREATETODO({
        id: form.id,
        todo: form.todo,
        isCompleted: form.isCompleted,
        userId: form.userId,
      })
    } catch (error) {
    } finally {
    }
  }

  const handleDelete = async (todoId: number) => {
    await DELETETODO(todoId)
  }
  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, isCompleted: e.target.checked })
  }

  console.log(todos)
  return (
    <TodoStyle>
      <TodoUl>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id.toString()}
            id={todo.id.toString()}
            content={todo.todo}
            onChange={handleTodoChange}
            onClick={() => handleDelete(todo.id)}
          />
        ))}
      </TodoUl>
      <InputAreaStyle>
        <FormStyle onSubmit={handleSubmit}>
          <Input
            dataTestid='new-todo-input'
            placeholder='할 일을 입력하세요.'
            onChange={(e) => setForm({ ...form, todo: e.target.value })}
          />
          <Button
            buttonType='primaryType'
            type='submit'
            dataTestid='new-todo-add-button'
            text='추가'
          />
        </FormStyle>
      </InputAreaStyle>
    </TodoStyle>
  )
}

export default Todo

const TodoStyle = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
  padding: 20px;

  ${FormStyle} {
    display: flex;
    flex-direction: row;

    input {
      padding: 0 20px;
      font-size: 18px;
    }

    button {
      border-radius: 5px;
    }
  }
`

const TodoUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const InputAreaStyle = styled.div`
  display: flex;
  margin-top: 20px;
`
