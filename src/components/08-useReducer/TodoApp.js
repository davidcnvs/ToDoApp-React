import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';

export const TodoApp = () => {

    const init = () => {

      return JSON.parse(localStorage.getItem('todos')) || [];

      // return [{
      //   id: new Date().getTime(),
      //   desc: 'Aprender React',
      //   done: false
      // }];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{description}, handleInputChange, reset] = useForm({
      description: ''
    });

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    
      // return () => {
      //   second
      // }
    }, [todos])
    

    const handleDelete = (todoId) => {
      console.log(todoId);

      
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if (description.trim().length <= 1) {
        return;
      }

      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false
      }

      const action = {
        type: 'add',
        payload: newTodo
      }

      dispatch(action);
      reset();
    }

  return (
    <div>
        <h1>TodoApp ({todos.length})</h1>
        <hr />

        <div className="row">
          <div className="col-7">
          <ul className='list-group list-group-flush'>
            {
            todos.map((todo, id) => (
              <li
              key={todo.id}
              className="list-group-item"
              >
                <p className='text-center'>{id+1}. {todo.desc}</p>
                <button className='btn btn-danger'>Borrar</button>
              </li>
            ))
            }
        </ul>
          </div>
          <div className="col-5">
            <h4>Agregar ToDo</h4>
            <hr />
            <form action="" onSubmit={handleSubmit}>
              <input type="text" className='form-control' name='description' placeholder='Aprender...' autoComplete='off' value={description} onChange={handleInputChange} />
              <button type='submit' className='btn btn-outline-primary mt-1 w-100'>Agregar</button>
            </form>
          </div>
        </div>
    </div>
  )
}
