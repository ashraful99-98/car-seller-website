import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2 class="mb-3"> <span className="text-danger">Register:-</span> Create Account</h2>
                <form onSubmit="">
                    <div class="col-sm-12">
                        <input className="input-from" class="form-control" type="email" name="" id="" placeholder="Your Email" />
                    </div>
                    <br />
                    <div class="col-sm-12">
                        <input className="input-from" type="password" class="form-control" placeholder="Your Password" name="" id="" />
                    </div>
                    <br />
                    <div class="col-sm-12">
                        <input type="password" class="form-control" name="" id="" placeholder="Re-enter Password" />
                    </div>
                    <br />
                    <input type="submit" className="input-from" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <button className="btn-login">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;