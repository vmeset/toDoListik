<<<<<<< HEAD
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showAlertAction } from '../store/alertReducer';
import { addNote } from '../store/api';

const Form = () => {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const formSubmit = (event) => {
        event.preventDefault()
        if(value.trim()) {
            dispatch(showAlertAction({text: `Заметка ${value} успешно добавлена`, type: 'success'}))
            setValue('')
            const note = {
                title: value,
                date: new Date().toJSON(),
                completed: false
            }
            dispatch(addNote(note))
        } else {
            dispatch(showAlertAction({text: `Необходимо ввести название заметки`, type: 'warning'}))
        }
    }

    return (
        <form onSubmit={event => formSubmit(event)}>
            <input 
                className="form-control form-control-lg" type="text" 
                placeholder="Введите название для новой заметки"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
};

export default Form;
=======
import React, {useState, useContext} from 'react'
import {AlertContext} from '../context/alert/alertContext'
import {FirebaseContext} from '../context/firebase/firebaseContext'

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const submitHandler = event => {
    event.preventDefault()

    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show('Заметка была создана', 'success')
        // setTimeout(alert.hide, 3000)
      }).catch(() => {
        alert.show('Что-то пошло не так', 'danger')
      })
      setValue('')
    } else {
      alert.show('Введите название заметки')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Добавить новую заметку"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}
>>>>>>> refs/remotes/origin/master
