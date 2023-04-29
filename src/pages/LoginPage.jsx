import React from 'react'
import classes from '../styles/LoginPage.module.css'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import BlueButton from '../components/UI/BlueButton'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchCurrenUser } from '../reducers/currentUserReducer'

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const login = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          dispatch(fetchCurrenUser(userCred.user.uid))
        })
        .catch((error) => {
          console.log(error)
        })
    }

  return (
    <div className={classes.loginPage}>
        <div className={classes.container}>
            <div className={classes.switch}>
              <Link to="/register" className={classes.button}>
                <div>Register</div>
              </Link>                
              <div className={classes.selected}>Sign In</div>
            </div>
            <div className={classes.wrapper}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className={classes.email} type="email" placeholder='Email...'/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className={classes.password} type="password" placeholder='Password...'/>
                <BlueButton placeholder={"Login"} onClick={login}/>
            </div>
        </div>
    </div>
  )
}

export default LoginPage