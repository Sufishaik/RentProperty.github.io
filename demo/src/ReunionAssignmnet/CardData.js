import React from 'react'
import { IoBedOutline } from "react-icons/io5";
import { FaToilet } from "react-icons/fa";
import { DollarSign } from "react-feather";
import { Heart } from "react-feather";
import "../ReunionAssignmnet/House.css";

function CardData({data1, i}) {
  return (
    <>
     <div className="card" style={{ width: "18rem" }}>
                <img src={data1.image} className="card-img-top" alt="..." />
                <div className="card-body" key={i}>
                  <div className="dollar-heart">
                    <p>
                      <DollarSign />
                      {data1.price} /
                      <span style={{ color: "black" }}>{data1.date}</span>
                    </p>

                    <Heart />
                  </div>
                  <p className="card-text">{data1.type}</p>
                  <h4 className="card-text">{data1.country}</h4>
                  <p>{data1.address}</p>

                  <p>{data1.surface}</p>
                  <hr />
                  <p className="bed-bath">
                    <IoBedOutline />
                    {data1.bedrooms}Beds <FaToilet />
                    {data1.bathrooms} Bathroom
                  </p>
                </div>
              </div> 
    </>
  )
}

export default CardData
