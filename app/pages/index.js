// src/pages/index.js  

import Link from 'next/link';  

const Home = () => {  
    return (  
        <div>  
            <h1>Bienvenue sur notre boutique d'accessoires téléphoniques!</h1>  
            <nav>  
                <ul>  
                    <li><Link href="/catalog">Voir le catalogue</Link></li>  
                    <li><Link href="/login">Se connecter</Link></li>  
                    <li><Link href="/register">S'inscrire</Link></li>  
                    <li><Link href="/cart">Mon Panier</Link></li>  
                </ul>  
            </nav>  
        </div>  
    );  
};  

export default Home;