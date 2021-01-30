import React, {Fragment, useContext, useEffect, useState} from 'react'
import {Form} from '../components/Form'
import {Notes} from '../components/Notes'
import {FirebaseContext} from '../context/firebase/firebaseContext'
import {Loader} from '../components/Loader'

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote, toggleNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    const inCompleteNotes = notes.filter(note => !note.completed)

    return (
        <Fragment>
            <Form/>

            <hr/>

            {loading
                ? <Loader/>
                : <Notes notes={inCompleteNotes}
                         onRemove={removeNote}
                         onComplete={toggleNote} />
            }
        </Fragment>
    )
}
