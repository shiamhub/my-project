import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillFacebook, AiFillGithub, AiFillGooglePlusSquare } from 'react-icons/ai';
import { getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../provider/AuthProvider';

const auth = getAuth(app);
const Login = () => {
    

    const {signIn, googleSignIn, gitHubSignIn, facebookSignIn, user} = useContext(AuthContext);
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        e.target.email.value = '';
        e.target.password.value = '';
        setError('');
        setSuccess('');
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            setSuccess('Your account has been created successfully');
            setName(loggedUser.displayName);
            console.log(loggedUser);
        })
        .catch(error => {
            setError(error.message)
            console.log(error.message)
        })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            setName(loggedUser.displayName);
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    }
    const handleGitHubSignIn = () => {
        gitHubSignIn()
        .then(result => {
            const loggedUser = result.user;
            setName(loggedUser.displayName);
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    }
    const handleFacebookSignIn = () => {
        facebookSignIn()
        .then(result => {
            const loggedUser = result.user;
            setName(loggedUser.displayName);
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect( () => {
        if(user) {
            navigate(from, {replace: true});
        }
    }, [user])

    return (
        <div>
            <div className='mt-28 text-center'>
                <h1 className='text-4xl font-bold'>{name}</h1>
                <form onSubmit={handleLogin}>
                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                    <br />
                    <input type="password" name='password' placeholder="Your Password" className="input input-bordered my-4 w-full max-w-xs" />
                    <br />
                    <input type='submit' className='btn btn-primary' value="Submit"></input>
                    <p><small>Already have an account? Please <Link to="/signup"><button className='btn btn-link ml-8'>Sign up</button></Link> </small></p>
                    
                </form>
                <p>{success}</p>
                <p>{error}</p>
            </div>
            <div className='flex justify-center'>
                <AiFillGooglePlusSquare onClick={handleGoogleSignIn} className='text-7xl'></AiFillGooglePlusSquare>
                <AiFillGithub onClick={handleGitHubSignIn} className='text-7xl'></AiFillGithub>
                <AiFillFacebook onClick={handleFacebookSignIn} className='text-7xl'></AiFillFacebook>
            </div>
        </div>
    );
};

export default Login;