import './App.css'
import Categories from './components/categories/Categories'
import Featureds from './components/featureds/Featureds'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Navbar from './components/navbar/Navbar'
import NewProducts from './components/newproducts/NewProducts'
import Offers from './components/offers/Offers'
import Products from './components/products/Products'
import Subscribe from './components/subscribe/Subscribe'


function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Featureds/>
    <Categories/>
    <Offers/>
    <Products/>
    <Subscribe/>
    <NewProducts/>
    <Footer/>
    </>
  )
}

export default App
