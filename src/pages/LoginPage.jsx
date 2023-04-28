import React from 'react'
import classes from '../styles/LoginPage.module.css'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import BlueButton from '../components/UI/BlueButton'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUsersCartData } from '../reducers/cartReducer'
import { getUserCartById } from '../services/database'
import { fetchUserCart } from '../reducers/cartReducer'
import { useEffect } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")    
    const [user, setUser] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
      
    })

    const login =  () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          dispatch(fetchUserCart(userCred.user.uid))
          console.log(userCred.user)
        })
        .catch((error) => {
          console.log(error)
        })
    }

  return (
    <div className={classes.loginPage}>
        <div className={classes.container}>
            {}
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