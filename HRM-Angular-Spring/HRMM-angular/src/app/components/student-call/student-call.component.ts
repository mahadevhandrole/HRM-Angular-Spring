import { Component, OnInit } from '@angular/core';
import { CallDetails } from 'src/app/common/call-details';
import { ActivatedRoute } from '@angular/router';
import { CallDetailsService } from 'src/app/services/call-details.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-call',
  templateUrl: './student-call.component.html',
  styleUrls: ['./student-call.component.css']
})
export class StudentCallComponent implements OnInit {

  callFormGroup:FormGroup;

  callDetails:CallDetails;
  currentID:number;
  status:number;

  constructor(private formBuilder:FormBuilder,
              private callDetailService : CallDetailsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.formSubmit();
    
    this.route.paramMap.subscribe(()=>{
      this.callView();
      
    });

  }
  formSubmit() {
    this.callFormGroup=this.formBuilder.group({
      call:this.formBuilder.group({
        date:new Date(),
        duplicateDate:[''],
        message:[''],
        nextDate:[''],
        status:['']


      })
    });
    
  }
  onSubmit()
  {
    console.log("Handling the submit button");
    console.log(this.callFormGroup.get('call').value);
    this.createCall();
  }
  createCall() {
    
    this.callDetailService.callCreate(this.callFormGroup.get('call').value,this.currentID).subscribe(
      data=>{
      alert("call created succussfully");
    });
  }






  callView() {
 
    //check the id
    const hasId:boolean = this.route.snapshot.paramMap.has('id');

    if(hasId)
    {
      this.currentID =+ this.route.snapshot.paramMap.get('id');
    }
    else{
      this.currentID=0;
    }
  //check the status
  //const hasStatus:boolean = this.route.snapshot.paramMap.has('status');

  //if(hasStatus)
  //{
   // this.status =+ this.route.snapshot.paramMap.get('status');
  //}
  //else{
   // this.status=0;
  //}

    this.callDetailService.callDetailsView(this.currentID).subscribe(data=>{
      this.callDetails=data;
    })



  }

}
