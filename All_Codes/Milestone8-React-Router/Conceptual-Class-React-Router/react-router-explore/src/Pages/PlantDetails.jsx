import React from "react";
import { useLoaderData } from "react-router";

const PlantDetails = () => {
  // const {id} = useParams()

  // const [plant, setPlant] = useState({})

  // useEffect(() => {
  //   axios(`https://openapi.programming-hero.com/api/plant/${id}`)
  //   .then(data => setPlant(data.data.plants))
  // },[id])

  const {data} = useLoaderData()
  console.log(data.plants)

  const {image,name,description,category,price} = data.plants
    
  return (
    <div className="card bg-base-100 max-w-4xl mx-auto shadow-sm">
      <figure className="h-100">
        <img className="w-full h-full object-cover"
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {description}
        </p>
        <h2 className="my-2">Category: {category}</h2>
        <h2>TK: {price} BDT</h2>
        <div className="card-actions justify-end">
          <Link to={'/'}>
            <button className="btn btn-primary">Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
