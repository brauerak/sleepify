import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoadingFormIcon from '../../../components/UI/LoadingFormIcon/LoadingFormIcon';
import validatePassword from '../../../helpers/validation/validationPassword';
import validateEmail from '../../../helpers/validation/validationEmail';
import useAuth from '../../../hooks/useAuth';

function AccountDetails (props) {

    const [email, setEmail] = useState('brauer@brauer.com');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAuth();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        email: '',
        passsword: ''
    })
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
            /// validation

            /// save details
            
        setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        if(validateEmail(email)) {
            setErrors({...errors, email: ''})
        } else {
            setErrors({...errors, email: 'Invalid email'})
        }
    },[email])
    
    useEffect(() => {
        if(validatePassword(password) || !password) {
            setErrors({...errors, passsword: ''})
        } else {
            setErrors({...errors, passsword: 'Invalid password'})
        }
    },[password])

    //odfiltrować tablice objektu z elementów nieprawdziwych. (zostają same prawdziwe) Jeśli nie będzie zadnego błędu to zmienna ta wyniesie 0 czyli false
    const buttonDisabled = Object.values(errors).filter(x => x).length
   
     

    return (
        <>
            <form onSubmit={submit}>
                <div className="m-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        className={`form-control ${errors.email
                            ? 'is-invalid' 
                            : 'is-valid'}`}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="name@example.com"
                    />
                    <div className='invalid-feedback'> {errors.email}</div>
                    <div className='valid-feedback'> OK! </div>
                </div>
                <div className="m-3">
                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input 
                        className={`form-control ${errors.passsword 
                            ? 'is-invalid' 
                            : ''}`}
                        type="password"
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        id="inputPassword5" 
                        aria-describedby="passwordHelpBlock" 
                    />
                    <div className='invalid-feedback'> {errors.passsword}</div>
                    <div className='valid-feedback'> OK! </div>
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters, numbers and special characters and must not contain spaces or emoji.
                    </div>
                </div>
                {loading
                    ? <LoadingFormIcon />
                    : <button className="btn btn-secondary m-3" disabled={buttonDisabled}>Save</button>
                    // I could make this statement above as a component becasue i will use it in every form, but now this is more readable for me. Maybe I will do it later. Then it is importent to provide 'loading' as props
                }
            </form>
        </>
    )
}

export default AccountDetails