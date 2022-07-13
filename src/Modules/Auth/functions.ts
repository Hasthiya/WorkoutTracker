import {Auth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {app} from "../Firebase/firebase";
import {getAuth} from "firebase/auth";

const auth = getAuth(app);

export const signIn = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        console.log(e);
    }
};

export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (e) {
        console.log(e);
    }
};