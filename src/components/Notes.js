import React, {useEffect, useState} from 'react'
import {TransitionGroup, CSSTransition} from "react-transition-group";
import _ from "lodash";
import * as moment from "moment";

export const Notes = ({notes, removeNote, toggleNote, alert}) => {

    const [searchVal, setSearchVal] = useState("")
    const [sort, setSort] = useState('asc')
    const [usNotes, setUsNotes] = useState(notes)
    const [sortField, setSortField] = useState("")

    useEffect(() => {
        setUsNotes(notes)
        // eslint-disable-next-line
    }, [notes])

    const onSort = (type) => {
        const copyNotes = notes.concat()
        const sortType = sort === 'asc' ? 'desc' : 'asc'
        setSortField(type)
        const orderedNotes = _.orderBy(copyNotes, sortField, sortType)
        setSort(sortType)
        setUsNotes(orderedNotes)
    }
    const onRemove = (note) => {
        removeNote(note.id)
        alert.show(`Заметка ${note.title} удаленна`, 'success')
    }
    const onComplete = (note) => {
        toggleNote(note)
        if(note.completed){
            alert.show(`Задача ${note.title} возобновлена`, 'success')
        } else {alert.show(`Задача ${note.title} выполнена`, 'success')}
    }
    const formatDate = (date) => {
        return (
            moment(date).format("h:mm, DD.MM.YYYY")
        )
    }

    return (
        <TransitionGroup component="ul" className='list-group'>
            <div className={"note"}>
                <button className="btn btn-light btn-sm"
                        onClick={() => {
                            onSort("title")
                        }}
                >
                    сортировка по имени
                </button>
                <input type="text" placeholder={"найди нужную заметку"} className="form-control-sm border light col-sm-8"
                       onChange={(e) => (setSearchVal(e.target.value))}/>
                <button className="btn btn-light btn-sm"
                        onClick={() => {
                            onSort("date")
                        }}
                >
                    сортировка по дате
                </button>

            </div>
            <hr/>
            {usNotes.filter((val) => {
                if (searchVal == "") {
                    return val
                } else if (val.title.toLowerCase().includes(searchVal.toLowerCase())) {
                    return val
                }
            }).map(note => (
                <CSSTransition
                    key={note.id}
                    classNames={'note'}
                    timeout={800}
                >
                    <li className='list-group-item note'>
                        <div>
                            <strong>{note.title}</strong>
                        </div>
                        <div>
                            <small>{formatDate(note.date)}</small>
                            <button
                                type="button"
                                className="btn btn-outline-danger btn-sm ml-4 mr-4"
                                onClick={() => {
                                    onRemove(note)
                                }}
                            >
                                &times;
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-success btn-sm"
                                onClick={() => {
                                    onComplete(note)
                                }}
                            >
                                {note.completed ? `↩` : '✓'}
                            </button>
                        </div>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}