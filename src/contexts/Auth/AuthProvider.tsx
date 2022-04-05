import { useState } from "react";
import { useApi } from "../../hooks/useAPI";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";


// mudei a tipagem para tipagem da função ao invés do parametro para ele entender que o retorno dessa função seria um componente react

export const AuthProvider: React.FC =({children})=>{
    const[user,setUser] = useState<User | null>(null);
    const api = useApi();

    const signIn = async (email:string , password: string) =>{
        const data= await api.signIn(email,password);
        if (data.user && data.token){
            setUser(data.user);
            return true
        }
        return false;
    }

    const signOut =async () =>{
        await api.logout();
        setUser(null);

    }




    return(
        
        <AuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}