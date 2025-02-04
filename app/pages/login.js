// src/pages/login.js  

import { useState } from 'react';  

const Login = () => {  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        // Logique d'authentification ici  
        console.log("Essayer de se connecter avec", email, password);  
    };  

    return (  
        <form onSubmit={handleSubmit}>  
            <h1>Connexion</h1>  
            <input  
                type="email"  
                value={email}  
                onChange={(e) => setEmail(e.target.value)}  
                placeholder="Email"  
                required  
            />  
            <input  
                type="password"  
                value={password}  
                onChange={(e) => setPassword(e.target.value)}  
                placeholder="Mot de passe"  
                required  
            />  
            <button type="submit">Connexion</button>  
        </form>  
    );  
};  

export default Login;