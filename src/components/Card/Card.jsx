import './card.css'

const Card = ({product}) => {
   
    
  return (
    <div className="card col-md-6 col-lg-3 col-sm-12  " >
    <img src={product.image} className="card-img-top  imge-width mx-auto" alt="product-image"/>
    <div className="card-body ">
      <h5 className="card-title text-center ">{product.title}</h5>
      <p className="card-text text-center">Price:{product.price}$</p>
      <p className="card-text text-center ">Rating:{product.rating.rate}</p>
    </div>
  </div>
  )
}

export default Card