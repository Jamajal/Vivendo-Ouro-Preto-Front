import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db"); // Trocar isso aqui por pegar users no banco de dados

        if(userToken && usersStorage){
            const hasUser = JSON.parse(usersStorage)?.filter(
                user => user.email === JSON.parse(userToken).email
            );
        
            if(hasUser)
                setUser(hasUser[0]);
        }
    }, []);
    
    const signin = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        const hasUser = usersStorage?.filter(user => user.email === email);

        console.log("Hit");

        if(hasUser?.length){
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token }));
                
                setUser({ email, password });
                return;
            } else
                return "E-mail ou senha incorretos!";
        } 
        else
            return "Usuário não cadastrado";
    }

    const signup = (name, email, password, phone) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db")); // Trocar para dados do banco
        var hasUser = usersStorage?.filter(user => user.email === email);

        // Checar se o email existe
        if(hasUser?.length)
            return "Já tem uma conta com esse E-mail";
        
        // Checar se a senha existe
        hasUser = usersStorage?.filter(user => user.password === password);
        if(hasUser?.length)
            return "Senha existente";

        let newStorage;

        if(usersStorage)
            newStorage = [...usersStorage, {name, email, password, phone}]; // Acrescentando novo usuário caso já exista um storage
        else 
            newStorage = [{ name, email, password, phone }]; // Criando storage com o novo usuário lá dentro

        localStorage.setItem("users_db", JSON.stringify(newStorage))

        return;
    };

    // Sai do login
    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signup, signout }}
        >
            {children}
        </AuthContext.Provider>
    )
}