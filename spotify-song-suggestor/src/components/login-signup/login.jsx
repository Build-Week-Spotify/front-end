import React from "react";
import { Link } from "react-router-dom";

const Login = props => {

    const { onChangeHandler, user, error } = props;
    
    const onSubmit = event => {
        const newUser = {
            username: user.username,
            password: user.password,
        }

        postNewUser(newUser);
        setUser(initialUser);
    }

    return (
        <form className="form">
            <p className="error">{error.username}</p>
            <input type="text"
                name="username"
                placeholder="Username"
                onChange={onChangeHandler}
                //value={user.username}
            />
            <p className="error">{error.password}</p>
            <input type="password"
                name="password"
                placeholder="Password"
                onChange={onChangeHandler}
                //value={user.password}
            />
            <button type="submit" className="button">LOG IN</button>

            <hr />

            <p className="buttonTitle">Don't have an account?</p>
            <Link to="/signup" className="link">SIGN UP</Link>
        </form>
    )
}

export default Login