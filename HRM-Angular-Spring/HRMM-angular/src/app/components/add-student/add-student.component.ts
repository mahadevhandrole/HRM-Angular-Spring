import { Component, OnInit } from '@angular/core';
import { StudentInfo } from 'src/app/common/student-info';
import { StudentInfoService } from 'src/app/services/student-info.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-student',
 //templateUrl: './port-student.component.html',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentFormGroup:FormGroup;

   getstudents : StudentInfo;
   currentid:number=1;
   previousid:number=1;

   status:number=0;

   previouskeyword:string=null;

   thePageNumber:number=1;
   thePageSize:number=5;
   theTotalElements:number=0;
   searchMode:boolean;



  constructor(private studentService:StudentInfoService,
              private formBuilder: FormBuilder,
              private route:ActivatedRoute) { }

  ngOnInit() {
    //call to form
    this.formSubmit();
    //call to list student method
     this.route.paramMap.subscribe(()=>{
     this.listStudents();
});
    
  }

  //student form data purpose
  formSubmit() {
    this.studentFormGroup=this.formBuilder.group({
      student:this.formBuilder.group({
           date:[''],
           name:[''],
           email:[''],
           contact_no1:[''],
           contact_no2:[''],
           gender:[''],
           qualification:[''],
           stream:[''],
           percentage:[''],
           passoutyear:[''],
           profile:[''],
           experience:[''],
           reference:['']
      })
    });
  }

  //form submitted
  onSubmit()
  {
    console.log("Handling the submit button");
    console.log(this.studentFormGroup.get('student').value);
    this.createStudent();
  }
  //take data from onSubmit and send to studentService
  createStudent():void{

    this.studentService.createStudent(this.studentFormGroup.get('student').value).subscribe(
      data=>{
        alert("Student created successfully");
      }
    );
      
  }
   //for pagination purpose
  updatePageSize(pageSize:number)
  {
    this.thePageSize=pageSize;
    this.thePageNumber=1;
    this.listStudents();
  }
   //handle search or list 
  listStudents() {

    this.searchMode=this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode)
    {
      this.handleSearchStudents();
    }
    else{
      this.handleListStudents();
      
    }

  }
  // search student using keyword
  handleSearchStudents() {
    const theKeyword:string=this.route.snapshot.paramMap.get('keyword');

    if(this.previouskeyword!=theKeyword)
    {
     this.thePageNumber=1;
    }
    this.previouskeyword=theKeyword;
    
 
    this.studentService.searchStudentPaginate(this.thePageNumber-1,
                                              this.thePageSize,
                                              theKeyword).subscribe(this.ProcessResults());

  }
  //list student takes from service

  handleListStudents() {
      //check the status
  const hasStatus:boolean=this.route.snapshot.paramMap.has('status');
  if(hasStatus)
  {
    this.status=+this.route.snapshot.paramMap.get('status');
  }
  else{
    this.status=0;
  }
    this.studentService.getStudentListPaginate(this.thePageNumber-1,
                                               this.thePageSize,
                                               this.status).subscribe(this.ProcessResults());
  }
  //get data & pagination 
  ProcessResults(){
    return data=>{
      this.getstudents=data._embedded.student_infoes;
      this.thePageNumber=data.page.number+1;
      this.thePageSize=data.page.size;
      this.theTotalElements=data.page.totalElements;


    }
  }

}
