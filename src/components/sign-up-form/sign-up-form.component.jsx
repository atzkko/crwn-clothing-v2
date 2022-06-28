import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [ formFields, setFormFIelds ] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFIelds(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, already in use.')
            }
            console.log('user creation encountered an error', error)
        }

    }

    const handleChange = event => {
        const { name, value } = event.target

        setFormFIelds({ ...formFields, [name]: value })
    }

    return(
        <div>
            <h1>Sign Up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    inputOptions={{
                        type: "text",
                        onChange: handleChange,
                        name: "displayName",
                        value: displayName,
                        required: true
                    }}
                />
                <FormInput
                    label="Email"
                    inputOptions={{
                        type: "email",
                        onChange: handleChange,
                        name: "email",
                        value: email,
                        required: true
                    }}
                />
                <FormInput
                    label="Password"
                    inputOptions={{
                        type: "password",
                        onChange: handleChange,
                        name: "password",
                        value: password,
                        required: true
                    }}
                />
                <FormInput
                    label="Confirm Password"
                    inputOptions={{
                        type: "password",
                        onChange: handleChange,
                        name: "confirmPassword",
                        value: confirmPassword,
                        required: true
                    }}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;