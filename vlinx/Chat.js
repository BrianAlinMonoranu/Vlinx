import React, { useState, useEffect } from 'react'
import { db } from './Vlinx'
import SendMessage from './SendMessage.js'
import SignOut from './SignOut'
import firebase from 'firebase/compat/app';

const Chat = (props) => {

    const { username } = props;


    const [messages, setMessages] = useState([])

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(70).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })

    }, [])

    return ( <
        div >
        <
        SignOut / >
        <
        div className = "msgs" > {
            messages.map(({ id, text, uid }) => ( <
                div >
                <
                div key = { id }
                className = { `msg ${uid === firebase.auth().currentUser.uid ? 'sent' : 'received'}` } >
                <
                p > { text } < /p> <
                /div> <
                /div>
            ))
        } <
        /div> <
        SendMessage / >
        <
        /div>
    )
}

export default Chat