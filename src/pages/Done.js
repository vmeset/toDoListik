<<<<<<< HEAD
import React from 'react';
import { useSelector } from 'react-redux';

import Notes from '../components/Notes';
import Loader from '../components/Loader'
import Alert from '../components/Alert';

const Done = () => {

    const notes = useSelector(state => state.notes)
    const completedNotes = notes.notes.filter(note => note.completed)

    return (
        <div className="container mt-3">
            <Alert />
            <h2>Список задач</h2>
            <hr />
            {notes.loading
                ? <Loader />
                : <Notes notes={completedNotes} searchVal={notes.searchVal} />
            }
        </div>
    );
};

export default Done;
=======
import React, {Fragment, useContext, useEffect} from 'react'
import {Notes} from '../components/Notes'
import {FirebaseContext} from '../context/firebase/firebaseContext'
import {Loader} from '../components/Loader'
import {AlertContext} from "../context/alert/alertContext";

export const Done = () => {
    const {loading, notes, fetchNotes, removeNote, toggleNote} = useContext(FirebaseContext)
    const alert = useContext(AlertContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    const completedNotes = notes.filter(note => note.completed)

    return (
        <Fragment>
            <h2>Выполненные задачи</h2>

            <hr/>

            {loading
                ? <Loader />
                : <Notes notes={completedNotes}
                         removeNote={removeNote}
                         toggleNote={toggleNote}
                         alert={alert}
                />
            }
        </Fragment>
    )
}
>>>>>>> refs/remotes/origin/master
