import React from "react";

import { DollarSign } from "react-feather";

import "./RentNew.css";

import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
function DropDownSeachBar({ filterimg1, filterimg, dateFilter, filterprice }) {
  return (
    <div className="main-city">
      <MDBDropdown>
        <MDBDropdownToggle tag="a" className="btn btn-primary location">
          location
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem  link onClick={() => filterimg1("United States")}>
            United States
          </MDBDropdownItem>
          <MDBDropdownItem  link onClick={() => filterimg1("Canada")}>
            Canada
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
 
   

      <MDBDropdown>

        
        <MDBDropdownToggle tag="a" className="btn btn-primary when">
          When
        </MDBDropdownToggle>
      
        <MDBDropdownMenu>
          <MDBDropdownItem link onClick={() => dateFilter("January")}>
            January
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => dateFilter("Febuary")}>
            Febuary
          </MDBDropdownItem>
          
          <MDBDropdownItem link onClick={() => dateFilter("March")}>
            March
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => dateFilter("April")}>
            April
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => dateFilter("May")}>
            May
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => dateFilter("June")}>
            June
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => dateFilter("July")}>
            July
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => dateFilter("August")}>
            August
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => dateFilter("September")}>
            September
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => dateFilter("Octomber")}>
            Octomber
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => dateFilter("November")}>
            November
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => dateFilter("December")}>
            December
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBDropdown>
        <MDBDropdownToggle tag="a" className="btn btn-primary prices">
          Prices
        </MDBDropdownToggle>

        <MDBDropdownMenu>
          <MDBDropdownItem link onClick={() => filterprice("10k to 1lkh")}>
            <DollarSign />
            10000-
            <DollarSign /> 100000
          </MDBDropdownItem>

          <MDBDropdownItem link onClick={() => filterprice("3lakh to 3.5lakh")}>
            <DollarSign /> 300000 -<DollarSign /> 350000
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => filterprice("2lakh to 2.5lakh")}>
            <DollarSign />
            200000 -<DollarSign /> 250000
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => filterprice("1lakh to 2lakh")}>
            <DollarSign /> 100000 -<DollarSign /> 200000
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      <MDBDropdown>
        <MDBDropdownToggle tag="a" className="btn btn-primary property">
          Property Types
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link onClick={() => filterimg("House")}>
            House
          </MDBDropdownItem>
          <MDBDropdownItem link onClick={() => filterimg("Apartament")}>
            Apartament
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
}

export default DropDownSeachBar;
