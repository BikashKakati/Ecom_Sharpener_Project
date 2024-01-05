import React from 'react'
import { useParams } from 'react-router-dom'

const productDetails = [
  {
    id: 'product1',
    images: ["https://prasadyash2411.github.io/ecom-website/img/Album%201.png", "https://prasadyash2411.github.io/ecom-website/img/Album%201.png","https://prasadyash2411.github.io/ecom-website/img/Album%201.png","https://prasadyash2411.github.io/ecom-website/img/Album%201.png"],
    reviews: [{ name: "anil", review: "Awesome Product" }, { name: "prakash", review: "Nice purchage" }]
  },
  {
    id: 'product2',
    images: ["https://prasadyash2411.github.io/ecom-website/img/Album%202.png", "https://prasadyash2411.github.io/ecom-website/img/Album%202.png","https://prasadyash2411.github.io/ecom-website/img/Album%202.png","https://prasadyash2411.github.io/ecom-website/img/Album%202.png"],
    reviews: [{ name: "anil", review: "Awesome Product" }, { name: "prakash", review: "Nice purchage" }]
  },
  {
    id: 'product3',
    images: ['https://prasadyash2411.github.io/ecom-website/img/Album%203.png','https://prasadyash2411.github.io/ecom-website/img/Album%203.png','https://prasadyash2411.github.io/ecom-website/img/Album%203.png','https://prasadyash2411.github.io/ecom-website/img/Album%203.png'],
    reviews: [{ name: "anil", review: "Awesome Product" }, { name: "prakash", review: "Nice purchage" }]
  },
  {
    id: 'product4',
    images: ['https://prasadyash2411.github.io/ecom-website/img/Album%204.png','https://prasadyash2411.github.io/ecom-website/img/Album%204.png','https://prasadyash2411.github.io/ecom-website/img/Album%204.png','https://prasadyash2411.github.io/ecom-website/img/Album%204.png'],
    reviews: [{ name: "anil", review: "Awesome Product" }, { name: "prakash", review: "Nice purchage" }]
  }
]

function ProductDetails() {
  const { id } = useParams();
  let products = null;
  productDetails.forEach(product => {
    if (product.id === id) {
      products = product;
    }
  });
  return (
    <div className="max-w-[72rem] w-full mx-auto">
      <div className="max-w-64 w-full m-auto">
        <img src={products.images[0]} alt="" className="w-full" />
      </div>
      <div className="max-w-[40rem] w-full mx-auto my-10 flex items-center justify-start gap-5">
        {
          products.images.map((image,idx) => {
            return (
              <div className="h-32" key={idx}>
                <img src={image} alt="" className="h-full" />
              </div>
            )
          })
        }
      </div>
      <div className="max-w-[40rem] w-full m-auto flex items-center justify-evenly">
        {
          products.reviews.map((review,idx) =>{
            return(
              <div className="">
                <p>{review.name}</p>
                <p>{review.review}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductDetails