import React, { useContext, useState } from 'react';
import { getAuth, updateProfile, sendEmailVerification } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../provider/AuthProvider';

const auth = getAuth(app);

const Signup = () => {
    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        setEmail('');
        console.log(name, email, password);
        if(!/(?=.*[A-z])/.test(password)) {
            setError('Please add at Uppercase');
            return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add number');
            return; 
        }
        else if(password.length < 6) {
            setError('Please add 6 character');
            return;
        }
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser); 
            setError('');
            setEmail('sign up successfully');
            sendVerification(result.user);
            upUserData(result.user, name);
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }

    const upUserData = (user, name) => {
        updateProfile(user, {
            displayName: name,
        })
        .then(() => {
            console.log('Name profile updated');
        })
        .catch((error) => setError(error.message))
    }

    const sendVerification = (user) => {
        sendEmailVerification(user)
        .then((result) => {
            console.log(result);
            alert('Please verify your email');
        })
    }

    return (
        <div className='mt-28 text-center'>
            <form onSubmit={handleSubmit}>
                <input className='input input-bordered w-full max-w-xs' type="name" name='name' placeholder='Your Name' required />
                <br />
                <input type="email" name='email' placeholder="Your Email" className="input input-bordered mt-4 w-full max-w-xs" required />
                <br />
                <input type="password" name='password' placeholder="Your Password" className="input input-bordered my-4 w-full max-w-xs" required />
                <br />
                <input type='submit' className='btn btn-primary' value="Submit"></input>                
            </form>
            <p>{error}</p>
            <p>{email}</p>
        </div>
    );
};

export default Signup;