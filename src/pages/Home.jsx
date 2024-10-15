import Card from "../components/Card/Card"
import Footer from "../components/Footer"
import Heading from "../components/Heading"
import Loading from "../pages/Loading"
import NavBar from "../components/Navbar"
import Slider from "../components/Slider"
import useProducts from "../hooks/useProducts"
import Erorr from "./Erorr"


const Home = () => {
    const {isLoading, isError, data}=useProducts('https://fakestoreapi.com/products');
 if (isLoading){
    return <Loading/>
 }
 if (isError) {
   return <Erorr />
  }
  
    return (
    <>
   <NavBar/>
   <Slider/>
   <Heading heading='Our Products'/>
   <div className="container ">
<div className="row "  >
{data?.map((prod)=>{
    return <Card key={prod.id} product={prod}/>  //  Product component is used to display each product card
 
})}
</div>
   </div>
   <Footer/>
    </>
  )
}

export default Home