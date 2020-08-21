import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

import { FormBuilder, FormGroup} from "@angular/forms";

export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname: string,
    public lastname: string,
    public age: number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string,
    public id: number
  ) {}
}

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  
  dataLoaded: boolean;
  errMessage: string;
  alert:boolean= false;

  updateForm: Object = {
 
    firstname:"",
    id: "",
    lastname:"",
    city:"",
    state:"",
    country:"",
    pincode:"",
    streetaddress:"",
    trainerpreference:"",
    packages:"",
    inr:"",
    paisa:"",
    physiotherapist:"",
    age:"",
    email:"",
    phonenumber:""
};


  Data: any;
  status: boolean= false;
  response: any;
  id: any;

  constructor(private dataService: UserService , private fb: FormBuilder) { }
  
  ngOnInit() {
    this.getfitness();
  }


getfitness()
{

this.dataService.getfitnessdata().subscribe(
  (res) => {
    this.Data = res;
    this.dataLoaded = true;
  },
  (err) => {
    this.errMessage = err.status + "Can not fetch appointment data";
  }
);
}
     
  
  

delete(id)
{
  console.log(id);
  const decesionToDeleteAppoinment = confirm("Delete appointment ?");
  if (decesionToDeleteAppoinment)
  {
    this.dataService. deletefitnessdata(id).subscribe(
    (res) =>
    {
      this.getfitness();
      console.log("Record Deleted!!")
      this.status=true;
      alert("Records Deleted!!")
      this.status=false;
    },

    (err) =>
    {
      console.log("Can't Delete!!")
     
    }
  
    );
  }
  else{
    console.log("You Can Not Delete Record!!")
    this.status = false;
    alert("Can't Delete The Record!!")
  }

}


edit(data,id)
{ 
  
  this.id=id;
  this.updateForm=data;
  this.status=true;
  this.alert=true;

}

updateRecord()
{
  const decesionToUpdateAppoinment = confirm("Update appointment ?");
  if(decesionToUpdateAppoinment){
  //console.log(this.updateForm);
  this.dataService.updatefitnessdata(this.updateForm,this.id).subscribe(
    (res) => {
      alert("Appointment Updated!!");
      console.log("Data Updated SUCCESSFULLY!",res)
      this.alert= false;
        },

    (error) => {
      console.log("ERROR!!",error)
      alert("Error is updating the appointment!!")
    }
   
  
       
  );

  }

  else{
    console.log("You can not update records!!")
  }
}

 

}

