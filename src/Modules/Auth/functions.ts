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
                throw new TypeError("Email not found");
            case "auth/wrong-password":
                throw new TypeError("Password is wrong");
            case "auth/invalid-email":
                throw new TypeError("Invalid Email");
            default:
                throw new TypeError("Error");
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