import React, {useState} from 'react'
import {fadeInDownBig, fadeIn} from 'react-animations'
import {StyleSheet, css} from 'aphrodite'
import services from '../utils/services'
import {hideLogin} from '../reducers/loginReducer'
import {setUser, removeUser} from '../reducers/userRedurcer'
import {useDispatch, useSelector} from 'react-redux'

const LoginComponent = () => {
    
    const state = useSelector(store => store.displayLogin)
    const dispatch = useDispatch()
    console.log('Login state', state)
    const styles = StyleSheet.create( {  
        loginForm: {
            display: state ? 'flex' : 'none',
            height: '30%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: '#1F201D',
            borderRadius: '5px',
            padding: '0 20px 0 20px',
            position: 'absolute',
            zIndex: '2',            
        },
        /*TODO: change the color of the text and bottom border */
        inputFiled: {
            backgroundColor: '#1F201D',
            border: 'none',
            outline: 'none',
            borderBottom: '0.1px solid white',
            color: 'white',
            padding: '4px 0',
            margin: '5px 0',
            placeholderColor: 'white'
        },
        inputFiledPlaceholder:{
            "::placeholder": {
                color: '#E5E5E5'
            }
        },
        formAnimation: {
            animationName: fadeInDownBig,
            animationDuration: '1s'
        },
        modalAnimation: {
            animationName: fadeIn,
            animationDuration: '1s'
        },
        modalBackground:{
            display: state ? 'flex' : 'none',
            position: 'absolute', zIndex:'4', 
            backgroundColor: 'rgba(0, 0, 0, 0.3)', 
            width: '100vw', 
            height: '100vh', 
            justifyContent: 'center', 
            alignItems: 'center'},
        buttonContainer: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around'
        },    
        button: {
            width:'35%',
            backgroundColor: '#333630',
            tableLayout: 'fixed',
            border: 'none',
            borderRadius: '5px',
            outline: 'none',
            color: '#E5E5E5',
            margin: '0',
            padding: '5px',
        },
        buttonHover: {
            ':hover': {
                background: 'radial-gradient(circle, rgba(241,194,65,1) 0%, rgba(235,172,0,1) 100%)',
                borderRadius: '5px',
                color: 'black',
        }
        }
    })

    const handleLogin = async (e) => {
        e.preventDefault()
        const user = await services.login( {username: e.target.username.value, password: e.target.password.value })
        dispatch(setUser(user))
        window.localStorage.setItem('user', JSON.stringify(user))
        dispatch(hideLogin())
    }
 
    return (
        <div className={css(styles.modalBackground, styles.modalAnimation)}>
            <form className={css(styles.loginForm, styles.formAnimation)} id='login-form' onSubmit={handleLogin}>
                <input name='username' type='text' placeholder='username' className={css(styles.inputFiled, styles.inputFiledPlaceholder)} id='login-form-username'  ></input>
                <input name='password' type='password' placeholder='password' className={css(styles.inputFiled, styles.inputFiledPlaceholder)} id='login-form-password' ></input>
                <div className={css(styles.buttonContainer)}>
                    <button className={css(styles.button, styles.buttonHover)} id='login-form-cancel'>Cancel</button>
                    <button className={css(styles.button, styles.buttonHover)} type='submit' id='login-form-submit'>Log in</button>
                </div>
            </form>
        </div>
    )
}

export default LoginComponent