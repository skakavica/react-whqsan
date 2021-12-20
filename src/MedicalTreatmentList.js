import React from "react";
import MedicalTreatment from "./MedicalTreatment";


const propsAsJson = '[{"id" : "R432", "courseTreatId" : "Operations and vaccinations", "type":"L", "category":"1", "name":"Sebastian", "date":"03/04/2021"}, ' 
+ 
'{"id" : "R5643", "courseTreatId" : "Consultations and check-up", "type":"M", "category":"1", "name":"Kalero Boombar", "date":"03/04/2021"}, '
+
'{"id" : "R6452", "courseTreatId" : "Medicine and different types of tablets", "type":"L", "category":"2", "name":"Hristo Koemdzhiev", "date":"03/04/2021"}, '
+
'{"id" : "R7532", "courseTreatId" : "Clinical reports and attached documents and history", "type":"H", "category":"2", "name":"Dave Mot", "date":"03/04/2021" } ,'
+
'{"id" : "R0909", "courseTreatId" : "Prescriptions and repeat Prescriptions", "type":"H1", "category":"1", "name":"Chandler Bing", "date":"03/04/2021" }]'
//the abbove are population for instances of the MedicalTreatment element in JSON string format


const mtList = JSON.parse(propsAsJson)
export default function MedicalTreatmentList(){
  //using the .map fucntion of an array, listMTL will represent a array with details gatered with looping troughout the linked to JSON data mtList array.
  const listMTL = mtList.map((mtList) => 
  <li>
    {/* creating an instance of MedicalTreatment that gets values of myList array */}
    <MedicalTreatment treatId={mtList.id} courseTreatId={mtList.courseTreatId} type={mtList.type} category={mtList.category}
   name={mtList.name} date={mtList.date} />
    </li>
 
  )
  return (
    <ul>
      {/* displaying the array */}
      {listMTL}

      </ul>
  )
// now when creatign an instance in App.js we will display 5 records with data from the "propsAsJson" array

}