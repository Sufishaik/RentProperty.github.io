import React, { useState } from "react";
import housesData from "../ReunionAssignmnet/data";
import "../ReunionAssignmnet/House.css";
import "./RentNew.css";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import DropDownSeachBar from "./DropDownSeachBar";
import CardData from "./CardData";
function Rent() {
  const [items, setitems] = useState(housesData);
  const filterimg1 = (item) => {
    const updateItem = housesData.filter((ele, index) => {
      return ele.country === item;
    });
    setitems(updateItem);
  };
  const filterimg = (item) => {
    const updateItem = housesData.filter((ele, index) => {
      return ele.type === item;
    });
    setitems(updateItem);
  };

  const dateFilter = (item) => {
    const month = housesData.filter((ele) => {
      return ele.date === item;
    });
    setitems(month);
  };

  const filterprice = (item) => {
    const pricetag = housesData.filter((ele) => {
      return ele.tag === item;
    });
    setitems(pricetag);
  };

  const filterSearch = (item) =>{
    const search = housesData.filter((i) =>{
      return i.country === item;
    })
    setitems(search)
  }
  const filterSearchHouse = (item) =>{
    const search = housesData.filter((i) =>{
      return i.type === item;
    })
    setitems(search)
  }
  const filterSearchApartment = (item) =>{
    const search = housesData.filter((i) =>{
      return i.type === item;
    })
    setitems(search)
  }
  return (
    <>
      <div className="header-main">
        <h2>Search properties to rent</h2>
        <div className="header-input">
        <MDBDropdown>
        <MDBDropdownToggle tag="a" className="btn btn-primary searchbar">
          Search With Searchbar
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link onClick={() => filterSearch("United States")}>
            United States
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => filterSearch("Canada")}>
            Canada
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => filterSearchHouse("House")}>
            House
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => filterSearchApartment("Apartament")}>
            Apartament
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
        </div>
      </div>

      <div className="main-content">
        <div className="main-city">
          <DropDownSeachBar
            filterprice={filterprice}
            dateFilter={dateFilter}
            filterimg={filterimg}
            filterimg1={filterimg1}
          />
        </div>
      </div>

      <div className="container">
        {items.map((data1, i) => {
          return (
            <>
              <CardData data1={data1} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Rent;
