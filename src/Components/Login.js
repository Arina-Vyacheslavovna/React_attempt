import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {loginUserAction} from '../features/userReducer'
import './Login.css'


export const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
 
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUserAction({
            name: name,
            loggedId: true,            
        }))
    }

    return (
        <div className='login'>
            <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login here</h1>
                <input type="name" placeholder="Name" value={name} 
                onChange={(e) => setName(e.target.value)}/>
                <input type="password" placeholder="Password" value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" className="submit_btn">Submit</button> 
            </form>
        </div>
    )
}