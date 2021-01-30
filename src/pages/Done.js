import React, {Fragment, useContext, useEffect} from 'react'
import {Notes} from '../components/Notes'
import {FirebaseContext} from '../context/firebase/firebaseContext'
import {Loader} from '../components/Loader'

export const Done = () => {
    const {loading, notes, fetchNotes, removeNote, toggleNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    const completedNotes = notes.filter(note => note.completed)

    return (
        <Fragment>
            <h2>Выполненные задачи</h2>
            {loading
                ? <Loader />
                : <Notes notes={completedNotes} onRemove={removeNote} onComplete={toggleNote} />
            }
        </Fragment>
    )
}