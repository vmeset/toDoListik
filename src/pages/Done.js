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