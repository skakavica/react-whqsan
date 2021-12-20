import React from "react";

// I have created 5 React.UseState() vatiables with a setter function.
export default function MedicalTreatmentPanel(){
  const [treatId, setTreatId] = React.useState();
  const [treatCourseId, setTreatCourseId] = React.useState();
  const [type, setType] = React.useState();
  const [category, setCategory] = React.useState();
  const [name, setName] = React.useState();
  const [StartDate, setStartDate] = React.useState();
  // one variable in boolean to help us display the new records
  const [print, setPrint] = React.useState(false);



  function onChangeHandler(event){
    let someValue = event.target.value;  
    //  the onChangeHandler will get the value within the inputbox and set is the value of treatId
    setTreatId(someValue);
  }

  // function onChangeTreadCourseidHandler(event){
  //   let someValue = event.target.value;  }


return (
  <div>
    {/* here on all input elements I used the 'elegant' version of the setter function, specifying the functionality of the onChange within the input parameters { e => setTreatId(e.target.value)} has the same functionality as the onChangeHandler function */}
    <input placeholder="Treat Id" value={treatId} onChange={ e => setTreatId(e.target.value)} />
    <br/>
   
    <input placeholder="Course Treat Id" value={treatCourseId} onChange={ e => setTreatCourseId(e.target.value)} />
    <br/>

   
    <input placeholder="Type" value={type} onChange={ e => setType(e.target.value)}  />
    <br/>


    <input placeholder="Category" value={category} onChange={ e => setCategory(e.target.value)} />
    <br/>


    <input placeholder="Name" value={name} onChange={ e => setName(e.target.value)} />
    <br/>


    <input placeholder="Start Date" value={StartDate} onChange={ e => setStartDate(e.target.value)} />
    <br/>

  {/*  here I created two buttons */} 
  {/* the buutons use the boolean and display and hide the variables values within our webpage */}
    <button onClick={() => setPrint(true) }> Show Treat Id </button> 
    {/* when the value of setPrint is true the table of the record is visable */}
    <button onClick={() => setPrint(false) }> Show Treat Id </button>
    {/* when the setPring is false the table is hidden */}
    <br/>
    
    {/* ................................................................................................... */}
      {/* this is the short versin of if/else statment using the '?' operator to check if the boolean is true or false if it is true it will display its child devision and the table  */}
    {print? 
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
      <th class="bot"> {treatId}</th>
      <th class="bot">{treatCourseId}  </th>
      <th class="bot"> {type} </th>
      <th class="bot"> {category}  </th>
      <th class="bot">  {name} </th>
      <th class="bot"> {StartDate} </th>
      </tr>

</table>
    :null
    }


    </div>
)

}