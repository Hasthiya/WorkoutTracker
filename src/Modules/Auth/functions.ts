import {signInWithEmailAndPassword, signOut} from "firebase/auth";
import {app} from "../Firebase/firebase";
import {getAuth} from "firebase/auth";

const auth = getAuth(app);

export const signIn = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
        const errorCode: string = error.code;
        switch (errorCode) {
            case "auth/user-not-found":
                throw "Email not found";
            case "auth/wrong-password":
                throw "Password is wrong";
            case "auth/invalid-email":
                throw "Invalid Email";
            default:
                throw "Error";
        }
    }
};

export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (e) {
        console.log(e);
    }
};