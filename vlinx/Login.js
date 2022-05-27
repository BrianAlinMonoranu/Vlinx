import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from './Vlinx';

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        sethasAccount,
        emailError,
        passwordError,
    } = props;

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return ( <
        section className = 'login' >

        <
        div className = 'loginContainer' >

        {
            hasAccount ? ( <
                h1 style = {
                    { color: 'white', font: '50px', marginBottom: '50px' }
                } > Login < /h1>
            ) : ( <
                h1 style = {
                    { color: 'white', font: '50px', marginBottom: '50px' }
                } > Create an Account < /h1>
            )
        }

        <
        label > Email < /label> <
        input type = "text"
        required value = { email }
        onChange = { e => setEmail(e.target.value) }
        /> <
        p className = 'errorMsg' > { emailError } < /p>


        <
        label > Password < /label> <
        input type = "password"
        required value = { password }
        onChange = { e => setPassword(e.target.value) }
        /> <
        p className = 'errorMsg' > { passwordError } < /p>


        <
        div className = 'btnContainer' >

        {
            hasAccount ? ( < >

                <
                button onClick = { handleLogin } > Sign In < /button> <
                p > Don 't have an Account <span onClick={() => sethasAccount(!hasAccount)}>Sign Up</span></p> </>
            ) : ( < >
                <
                button onClick = { handleSignUp } > Sign up < /button> <
                p > Have an account ? < span span onClick = {
                    () => sethasAccount(!hasAccount)
                } > Sign In < /span></p >
                <
                />
            )
        } <
        /div> <
        div style = {
            { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }
        } >




        <
        button style = {
            { padding: '10px', fontSize: '20px', borderRadius: '0', fontWeight: '200' }
        }
        onClick = { signInWithGoogle } > Sign In With Google < /button> </div >

        <
        /div> <
        /section>
    )
}

export default Login