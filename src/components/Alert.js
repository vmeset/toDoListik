<<<<<<< HEAD
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {CSSTransition} from 'react-transition-group'

import { hideAlertAction } from '../store/alertReducer';

const Alert = () => {

    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()

    return (
        <CSSTransition
            in={alert.visible}
            timeout={1200}
            classNames={"alert"}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                {alert.text}
                
                <button type="button" 
                        className="close" 
                        data-dismiss="alert" 
                        aria-label="Close"
                        onClick={() => dispatch(hideAlertAction())}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    );
};

export default Alert;
=======
import React, {useContext} from 'react'
import {CSSTransition} from 'react-transition-group'
import {AlertContext} from '../context/alert/alertContext'

export const Alert = () => {
  const {alert, hide} = useContext(AlertContext)

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 350
      }}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
        <div>
            <strong>Внимание!</strong>
            &nbsp;{alert.text}
            <button onClick={hide} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
      </div>
    </CSSTransition>
  )
}
>>>>>>> refs/remotes/origin/master
