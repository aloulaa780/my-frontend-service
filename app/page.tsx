// app/page.tsx  

import Header from '../components/Header';  
import Footer from '../components/Footer';  
import { fetchProducts } from '../services/api';  
import ProductCard from '../components/ProductCard';  

export default async function Home() {  
    // Récupérer les données des produits (en supposant que fetchProducts fasse un appel API)  
    const products = await fetchProducts();  

    return (  
        <main>  
            <Header />  
            <h1>Bienvenue sur notre Boutique d'Accessoires</h1>  
            <section>  
                <h2>Nos Produits</h2>  
                <div className="product-grid">  
                    {products.map((product) => (  
                        <ProductCard key={product.id} product={product} />  
                    ))}  
                </div>  
            </section>  
            <Footer />  
        </main>  
    );  
}