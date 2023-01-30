import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/Home";
import Navbar from "./components/Navbar";

export default function App(props) {

    const [myName, setMyName] = useState('');

    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);

    const now = new Date();
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp')) >now));

    function updateUserInfo(userName){
        setMyName(username)
    }

    function flashMessage(message,category){
        setMessage(message);
        setCategory(category);
    };

    function logUserIn(){
        setLoggedIn(true);
    }

    function logUserOut(){
        setLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExp');
        flashMessage('You have been logged out', 'warning')
    }
  
  
    return (
        <>
            <Navbar name={myName} updateUserInfo={updateUserInfo} loggedIn={loggedIn} logUserOut={logUserOut} />
            <div className="container">
                {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage} />} />
                    <Route path='/login' element={<Login flashMessage={flashMessage} logUserIn={logUserIn} />} />
                    <Route path='/create' element={<CreatePost loggedIn={loggedIn} flashMessage={flashMessage} />} />
                </Routes>
            </div>


        </>



    )
}

