import React, {useContext, useEffect, useState} from 'react'
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {AlertContext} from "../context/alert/alertContext";
import * as moment from 'moment'
import _ from 'lodash'

export const Notes = ({notes, onRemove, onComplete}) => {

    const alert = useContext(AlertContext)
    const [searchVal, setSearchVal] = useState("")
    const [sort, setSort] = useState('asc')
    const [usNotes, setUsNotes] = useState(notes)

    const onSort = () => {
        const copyNotes = usNotes.concat()
        // console.log(copyNotes)
        const sortType = sort === 'asc' ? 'desc' : 'asc'
        const orderedNotes = _.orderBy(copyNotes, "title", sortType)
        setUsNotes(orderedNotes)
        setSort(sortType)
    }

    const onRemoveAlert = (note) => {
        onRemove(note.id)
        alert.show(`Заметка ${note.title} удаленна`, 'success')
    }
    const onCompleteAlert = (note) => {
        onComplete(note)
        alert.show(`Задача ${note.title} выполнена`, 'success')
    }
    const formatDate = (date) => {
        return (
            moment(date).format("h:mm, DD.MM.YYYY")
        )
    }

    return (
        <TransitionGroup component="ul" className='list-group'>
            <div className={"note"}>
                <button className="btn btn-outline-danger btn-sm"
                        onClick={onSort}
                >
                    сортировка по имени
                </button>
                <input type="text" placeholder={"найди нужную заметку"} className="form-control"
                       onChange={(e) => (setSearchVal(e.target.value))} />
            </div>
            {usNotes.filter((val) => {
                if(searchVal == ""){
                    return val
                } else if(val.title.toLowerCase().includes(searchVal.toLowerCase())){
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
                            <small>{formatDate(note.date)}</small>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => {
                                    onRemoveAlert(note)
                                }}
                            >
                                &times;
                            </button>
                            {!note.completed
                                ? <button
                                    type="button"
                                    className="btn btn-outline-success btn-sm ml-4"
                                    onClick={() => {
                                        onCompleteAlert(note)
                                    }}
                                >
                                    &#10003;
                                </button>
                                : <button
                                    type="button"
                                    className="btn btn-outline-success btn-sm ml-4"
                                    data-toggle="tooltip" title="Повторить задачу"
                                    onClick={() => {
                                        onCompleteAlert(note)
                                    }}
                                >
                                    ↩
                                </button>
                            }
                        </div>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}