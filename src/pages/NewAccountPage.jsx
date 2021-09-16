import '../css/components/landing-form.css';
import { useInput } from '../custom-hooks/use-input'
import { useRef } from 'react';


const NewAccountPage = () => {
    const { value: username, bind: bindUsername } = useInput('');
    const { value: password, bind: bindPassword } = useInput('');
    const { value: retypePassword, bind: bindRetypePassword } = useInput('');

    const handleSubmit = (event) => {
        event.preventDefault();
        validatePassword();
        passwordEl.current.onchange = validatePassword;
        retypePasswordEl.current.onkeyup = validatePassword;
        console.log(`form submitted`)
    }

    const validatePassword = () => {
        if (passwordEl.current.value != retypePasswordEl.current.value) {
            retypePasswordEl.current.setCustomValidity("Passwords Don't Match");
        } else {
            retypePasswordEl.current.setCustomValidity('');
        }
    }

    const passwordEl = useRef(null);
    const retypePasswordEl = useRef(null);

    return (
        <div id="booking" className="section">
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="booking-form">
                            <form onSubmit={handleSubmit}>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input required {...bindUsername} className="form-control" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                                        <span className="form-label">Username</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input ref={passwordEl} pattern="(?=.*[\d$@$!%*?&])(?=.*[a-z]).{8,}" required {...bindPassword} className="form-control" type="password" minLength="8" />
                                        <span className="form-label">Password</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input ref={retypePasswordEl} pattern="(?=.*[\d$@$!%*?&])(?=.*[a-z]).{8,}" required {...bindRetypePassword} className="form-control" type="password" minLength="8" />
                                        <span className="form-label">Re-type Password</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                </div>
                                <div className="col-md-4">
                                    <div className="form-btn">
                                        <button className="submit-btn">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewAccountPage;