import React from 'react';
import FormInput from '../form-input/form.component';
import CustomButton from '../custom-button/custom-button.comp';
import { auth, createUserProfileDocument } from 'firebase';

class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
    
        const {displayName, email, password, confirmPassword} = this.state
         
        if(password !== confirmPassword){
            alert("password don't match")
            return
        }

        try{
            const {user} = await auth.CreateUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        }catch(error){
            console.log(error)
        }

    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                   <FormInput
                     name='displayName'
                     type='text'
                     onChange={this.handleChange}
                     value={this.state.displayName}
                     label= 'Display Name'
                     required
                   
                   />

                   <FormInput
                     name='email'
                     type='email'
                     onChange={this.handleChange}
                     value={this.state.email}
                     label= 'Email'
                     required
                   
                   />

                   <FormInput
                     name='password'
                     type='password'
                     onChange={this.handleChange}
                     value={this.state.password}
                     label= 'Password'
                     required
                   
                   />

                  <FormInput
                     name='confirmPassword'
                     type='password'
                     onChange={this.handleChange}
                     value={confirmPassword}
                     label= 'Confirm Password'
                     required
                   />

                   <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp