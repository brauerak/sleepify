import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingFormIcon from "../../../components/UI/LoadingFormIcon/LoadingFormIcon";
import useAuth from "../../../hooks/useAuth";

function Login (props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAuth();
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(null)
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        
        setLoading(true)
        setTimeout(() => {
            /// login
            if (true) {
                setAuth(true);
                navigate('/')
            } else {
                setValid(false)
                setPassword('')
            }
        setLoading(false)
        }, 1000)
    }

    return (
        <>
            {valid === false 
                ? (<div className="alert alert-danger">Email or password not correct.</div>) 
                : null }
            <form onSubmit={submit}>
                <div className="m-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="form-control" 
                        placeholder="name@example.com" 
                    />
                </div>
                <div className="m-3">
                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input 
                        type="password"
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        id="inputPassword5" 
                        className="form-control" 
                        aria-describedby="passwordHelpBlock" 
                    />
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                </div>
                {loading
                    ? <LoadingFormIcon />
                    : <button className="btn btn-secondary m-3">Log in</button>
                    // I could make this statement above as a component becasue i will use it in every form, but now this is more readable for me. Maybe I will do it later. Then it is importent to provide 'loading' as props
                }
            </form>
        </>
    )
}

export default Login