import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2 class="text-danger">Get In Touch</h2>
                <p>Ridiculus sodales metus varius dictum fermentum ante dictumst eleifend quam. Taciti tortor aenean nisl dapibus.</p>
                <from>
                    <div class="col-sm-12">
                        <input className="input-from" class="form-control" type="email" name="" id="" placeholder="Your Email" />
                    </div>
                    <br />
                    <div class="col-sm-12">
                        <input className="input-from" type="password" class="form-control" placeholder="Your Password" name="" id="" />
                    </div>
                    <br />
                    <input className="input-from" type="submit" value="Submit" />
                </from>
                <p>new to Car-Seller Website? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button
                    className="btn-login"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>




        // <div class="container">
        //     <div className="login-form">
        //         <div>
        //             <h2>Get In Touch</h2>
        //             <p>Ridiculus sodales metus varius dictum fermentum ante dictumst eleifend quam. Taciti tortor aenean nisl dapibus.</p>

        //             <form>
        //                 <div class="row mb-3">
        //                     <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        //                     <div class="col-sm-10">
        //                         <input type="email" class="form-control" id="inputEmail3" />
        //                     </div>
        //                 </div>
        //                 <div class="row mb-3">
        //                     <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
        //                     <div class="col-sm-10">
        //                         <input type="password" class="form-control" id="inputPassword3" />
        //                     </div>
        //                 </div>
        //                 <fieldset class="row mb-3">
        //                     <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
        //                     <div class="col-sm-10">
        //                         <div class="form-check">
        //                             <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
        //                             <label class="form-check-label" for="gridRadios1">
        //                                 First radio
        //                             </label>
        //                         </div>
        //                         <div class="form-check">
        //                             <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
        //                             <label class="form-check-label" for="gridRadios2">
        //                                 Second radio
        //                             </label>
        //                         </div>
        //                         <div class="form-check disabled">
        //                             <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
        //                             <label class="form-check-label" for="gridRadios3">
        //                                 Third disabled radio
        //                             </label>
        //                         </div>
        //                     </div>
        //                 </fieldset>
        //                 <div class="row mb-3">
        //                     <div class="col-sm-10 offset-sm-2">
        //                         <div class="form-check">
        //                             <input class="form-check-input" type="checkbox" id="gridCheck1" />
        //                             <label class="form-check-label" for="gridCheck1">
        //                                 Example checkbox
        //                             </label>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <input className="input-from" type="submit" value="Submit" />
        //             </form>
        //             <p>new to ema-john? <Link to="/register">Create Account</Link></p>
        //             <div>-------or----------</div>
        //             <button
        //                 className="btn-login"
        //                 onClick={handleGoogleLogin}
        //             >Google Sign In</button>
        //         </div>
        //     </div>
        // </div >
    );
};

export default Login;