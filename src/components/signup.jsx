import React, {Component} from 'react';
import { Navigate } from 'react-router-dom';

export default function signup(props) {


    handleSignUp = event => {
        event.preventDefault();
        let password = event.target.password.value;
        let confirmPass = event.target.confirmPass.value;
        if (password !== confirmPass){
            props.flashMessage('Passwords dont match', 'danger')
        } else{
            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            let formData = JSON.stringify({
                username:event.target.username.value,
                email: event.target.email.value,
            })

            fetch('https://responsible-knowledgeable-restaurant.glitch.me/auth/users', {
                method: 'POST',
                headers: myHeaders,
                body: formData
            })
                .then(response => response.json())
                .then(data =>{
                    if (data.error){
                        props.flashMessage(data.error, 'danger')
                    } else {
                        console.log(data)
                        props.flashMessage(`${data.username} has been created`, 'success')
                        setState({redirect:true})
                    }
        })
    }
  
    return (
    
  )
}
