import React from "react";
import "./tableCSS";


export default function MedicalTreatment(props){

return(

  //decided to create table instead of a list
  <table>
    <tr >
      <th class="top"> Treatment Id: </th>
      <th class="top"> Treatment:  </th>
      <th class="top"> Type: </th>
      <th class="top">  Category:  </th>
      <th class="top">  Name: </th>
      <th class="top"> Date of Treatment: </th>
      </tr>
      <tr>
      <th class="bot"> {props.treatId}</th>
      <th class="bot">{props.courseTreatId}  </th>
      <th class="bot"> {props.type} </th>
      <th class="bot"> {props.category}  </th>
      <th class="bot">  {props.name} </th>
      <th class="bot"> {props.date} </th>
      </tr>

</table>
)
}