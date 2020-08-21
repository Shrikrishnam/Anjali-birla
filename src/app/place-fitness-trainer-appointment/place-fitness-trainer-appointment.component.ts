import { Component, OnInit} from '@angular/core';
import {  FormGroup } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from '../_services/user.service';


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
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {

  

  fitnessForm: FormGroup;
  status : boolean = false;
  Data: any;
  
  constructor(private fb: FormBuilder, private userService: UserService) { }
  

  ngOnInit() {
    this.fitnessForm = this.fb.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      age: ["", [Validators.required, Validators.min(19), Validators.max(59)]],
      phonenumber: ["", [Validators.required]],
      email: ["", [Validators.required]],
      trainerpreference: ["", [Validators.required]],
      physiotherapist: ["", [Validators.required]],
      packages: ["", [Validators.required]],
      inr: ["", [Validators.required]],
      paisa: ["", [Validators.required]],
      id: ["", [Validators.required]],

      streetaddress: ["", [Validators.required]],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]],
      country: ["", [Validators.required]],
      pincode: ["", [Validators.required]],
    });
    
  }

  onSubmit() {
    //console.log(this.fitnessForm.value);
   
      this.userService. postfitnessdata(this.fitnessForm.value).subscribe(
        (res) =>{
          this.status = true;
           console.log("SUCCESS",res),
           alert("Appointment Saved!!")
            location.reload();
        },

        (error) =>{
          this.status = false;
          console.log("ERROR!!",error)
          alert(" Can't Save Appointment")
        }
      

      );
   


  
  }
    
}
