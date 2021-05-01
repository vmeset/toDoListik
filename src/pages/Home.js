import React, {Fragment, useContext, useEffect} from 'react'
import {Form} from '../components/Form'
import {Notes} from '../components/Notes'
import {FirebaseContext} from '../context/firebase/firebaseContext'
import {Loader} from '../components/Loader'
import {AlertContext} from "../context/alert/alertContext";

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote, toggleNote} = useContext(FirebaseContext)
    const alert = useContext(AlertContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    const inCompleteNotes = notes.filter(note => !note.completed)

    return (
        <Fragment>
            <h2>Список задач</h2>

            <Form/>

            <hr/>

            {loading
                ? <Loader/>
                : <Notes notes={inCompleteNotes}
                         removeNote={removeNote}
                         toggleNote={toggleNote}
                         alert={alert}
                />
            }
        </Fragment>
    )
}
