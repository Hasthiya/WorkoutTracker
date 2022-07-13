import React, {FC, ReactNode, useEffect, useState} from "react";
import {AuthContext} from "./AuthContext";
import {app} from "../Firebase/firebase";
import {getAuth} from "firebase/auth";

interface Props {
    children: ReactNode;
}

export const AuthProvider: FC<Props> = ({children}: Props) => {
    const [user, setUser] = useState<any>(null);
    //TODO: Please find the correct type for user and remove any :: HASTHI

    console.log("inside auth provider: ", user);

    const auth = getAuth(app);

    useEffect(() => {
        return auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
        });
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};