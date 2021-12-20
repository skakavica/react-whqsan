import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment";
import MedicalTreatmentList from "./MedicalTreatmentList";
import MedicalTreatmentPanel from "./MedicalTreatmentPanel";



export default function App() {

  return (
   <div  > 

     <MedicalTreatment treatId="001" courseTreatId ="Medicine" type= "Prescription"  category ="some" name="Sebastian" date={Date()}/>
     <MedicalTreatmentList />
     <MedicalTreatmentPanel />

   </div>
  );
} 








