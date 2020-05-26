import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import "./App.css"
import * as yup from "yup";
import axios from "axios";
import formSchema from "./login-signup/formScheme"
import Login from "./login-signup/login";
import Signup from "./login-signup/signup";
import Nav from "./nav";
import Footer from "./footer";
import PrivateRoute from './utils/privateRoute';

/* **VARIBLES** */

const login = "https://spotsuggest.herokuapp.com/api/auth/login";
const register = "https://spotsuggest.herokuapp.com/api/auth/register";

const App = () => {

    /* **USE STATES** */

    const [userLogin, setUserLogin] = useState(initialUser);
    const [userRegister, setUserRegister] = useState(initialUser);
    const [error, setError] = useState(initialError);

    /* **FUNCTIONS** */
    
    const onChangeLogin = event => {
        const name = event.target.name;
        const value = event.target.value;

        setUserLogin({
            ...user,
            [name]: value,
        })

        yup.reach(formSchema, name)
            .validate(value)
            .then(resolve => {
                setError({
                    ...error,
                    [name]: "",
                })
            })
            .catch(err => {
                setError({
                    ...error,
                    [name]: err.errors[0],
                })
            })
    }

    const onChangeRegister = event => {
        const name = event.target.name;
        const value = event.target.value;

        setUserRegister({
            ...user,
            [name]: value,
        })

        yup.reach(formSchema, name)
            .validate(value)
            .then(resolve => {
                setError({
                    ...error,
                    [name]: "",
                })
            })
            .catch(err => {
                setError({
                    ...error,
                    [name]: err.errors[0],
                })
            })
    }

    const loginUser = () => {
        axios.post(`https://spotsuggest.herokuapp.com/api/auth/login`)
            .then(resolve => {
                console.log(resolve)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const postNewUser = newUser => {
        axios.post(`https://spotsuggest.herokuapp.com/api/auth/register`)
            .then(resolve => {
                console.log(resolve);
                console.log(resolve.data);
            })
            .catch(error => {
                console.log("Post Error\n" + error);
            })
    }

    const onSubmit = event => {
        const newUser = {
            username: user.username,
            password: user.password,
        }

        postNewUser(newUser);
        setUser(initialUser);
    }

    /* **RETURN STATEMENT AND COMPONENTS** */

    return (
        <div className="App">
            <Nav />
            <Router>
                <Route path="/" exact>
                    <Login
                        onChangeHandler={onChangeLogin}
                        user={userLogin}
                        error={error}
                    />
                </Route>
                <Route path="/signup">
                    <Signup
                        onChangeHandler={onChangeRegister}
                        user={userRegister}
                        error={error}
                    />
                </Route>
                {/* <PrivateRoute>
                
                </PrivateRoute> */}
            </Router>

            <Footer />
        </div>
    )
}

export default App;