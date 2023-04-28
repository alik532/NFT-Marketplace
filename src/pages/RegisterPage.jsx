import React from 'react'
import classes from '../styles/RegisterPage.module.css'
import { useState } from 'react'
import BlueButton from '../components/UI/BlueButton'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase-config'
import { writeUserToDB } from '../services/database'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectCart } from '../reducers/cartReducer'
import { Link } from 'react-router-dom'
import { fetchUserCart } from '../reducers/cartReducer'

const RegisterPage = () => {

    console.log(useSelector(selectCart))
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmation, setConfirmation] = useState("")
    
    const dispatch = useDispatch()
    const register = async () => {
        if (password === confirmation) {
            try {
                const userCred = await createUserWithEmailAndPassword(auth, email, password)
                console.log(userCred)
                writeUserToDB(userCred.user)
                dispatch(fetchUserCart(userCred.user.uid))
            }
            catch (error) {
                console.log(error)
            }
        }
        else {
            console.log("Password confirmation error")
        }
    }

  return (
    <div className={classes.registerPage}>
        <div className={classes.container}>
            <div className={classes.switch}>
                <div className={classes.selected}>Register</div>
                <Link to="/login" className={classes.button}>
                    <div >Sign In</div>
                </Link>
            </div>
            <div className={classes.wrapper}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className={classes.email} type="email" placeholder='Email...'/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className={classes.password} type="password" placeholder='Password...'/>
                <input value={confirmation} onChange={(e) => setConfirmation(e.target.value)} className={classes.password} type="password" placeholder='Confirm Password...'/>
                <BlueButton placeholder={"Register"} onClick={register}/>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage