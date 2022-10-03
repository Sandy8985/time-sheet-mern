import { AuthContext } from "../Context/EauthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuthContext must be use inside an AuthContextProvider')
    }

    return context
}