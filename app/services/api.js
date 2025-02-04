// src/services/api.js  

const API_URL = process.env.NEXT_PUBLIC_API_URL;  

export const fetchProducts = async () => {  
    const response = await fetch(`${API_URL}/products`);  
    if (!response.ok) {  
        throw new Error('Erreur lors de la récupération des produits');  
    }  
    return await response.json();  
};  

export const loginUser = async (email, password) => {  
    const response = await fetch(`${API_URL}/login`, {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({ email, password }),  
    });  

    if (!response.ok) {  
        throw new Error('Erreur lors de la connexion');  
    }  
    return await response.json(); // Retourne les données de l'utilisateur  
};  

export const registerUser = async (email, password) => {  
    const response = await fetch(`${API_URL}/register`, {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({ email, password }),  
    });  

    if (!response.ok) {  
        throw new Error('Erreur lors de l\'inscription');  
    }  
    return await response.json(); // Retourne les données de l'utilisateur  
};