import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }

    return(
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    )
}

export default SignIn;