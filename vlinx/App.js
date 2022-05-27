import React, { useState, useEffect } from 'react';
import './App.css';
import './Chat.css'
import Chat from './Chat.js';
import { auth } from './Vlinx.js';
import firebase from 'firebase/compat/app';
import Login from './Login';


function App() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, sethasAccount] = useState(false);
    const [username, setUsername] = useState('');

    const clearInputs = () => {
        setEmail('');
        setPassword('');
        setUsername('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
        setUsername('');
    }

    const handleLogin = () => {
        clearErrors();
        firebase.auth().signInWithEmailAndPassword(email, password, username)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid.email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;

                }
            })
    }

    const handleSignUp = () => {
        clearErrors();
        auth.createUserWithEmailAndPassword(email, password, username)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    }

    const authListener = () => {
        auth.onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser('');
            }
        });
    };

    useEffect(() => {
        authListener();
    })


    return ( <
        > {
            user ? ( < Chat username = { username }
                />) : (<
                Login email = { email }
                setEmail = { setEmail }
                password = { password }
                setPassword = { setPassword }
                handleLogin = { handleLogin }
                handleSignUp = { handleSignUp }
                hasAccount = { hasAccount }
                sethasAccount = { sethasAccount }
                emailError = { emailError }
                passwordError = { passwordError }
                />
            )
        }

        <
        />
    );
}

export default App;