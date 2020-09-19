import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';
import { StudentInfoService } from 'src/app/services/student-info.service';
import { StudentInfo } from 'src/app/common/student-info';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-update',
  templateUrl: './trail-student-update.component.html',
  //templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  // studentInfos1:StudentInfo={
  //       id = data[0],
  //      name = data[1].
  //      contact_no1=data[2],
  //      contact_no2=data[3],
  //      profile=data[4],
  //      passoutyear=data[5],
  //      qualification=data[6],
  //      stream=data[7],
  //      percentage=data[8],
  //      email=data[9],
  //      gender=data[10],
  //      experience=data[11],
  //      reference=data[12],
  //      date=data[13]
  // };

  studentInfos1 : StudentInfo;
   temp : StudentInfo;
  //studentInfos1: StudentInfo[]=[];
  //studentInfoscomeing: StudentInfo[]=[];
  //   studentInfos2 : StudentInfo={
  //    id:null,
  //    name:null,
  //    contact_no1:null,
  //    contact_no2:null,
  //    profile:null,
  //    passoutyear:null,
  //    qualification:null,
  //    stream:null,
  //    percentage:null,
  //    email:null,
  //    gender:null,
  //    experience:null,
  //    reference:null,
  //    date:null
  //  };
   

   id:number;


  constructor(private route:ActivatedRoute,
              private studentService:StudentInfoService) { }

  ngOnInit(): void {

    //this.id=+this.route.snapshot.paramMap.get('id');
    
    ///this.studentService.getStudentUpdate(this.id).subscribe(data=>{
      // this.studentInfos1=data;
    //this.route.paramMap.subscribe(()=>{
     //this.studentsUpdateView();
     this.route.paramMap.subscribe(()=>{
      this.studentsUpdateView();
    });

  }

  //to read the data
  studentsUpdateView() {
  //check id parametr
   const hasid:boolean=this.route.snapshot.paramMap.has('id');

   if(hasid)
    {
       this.id=+this.route.snapshot.paramMap.get('id');
   }
    else{
     this.id=0;
   }

    this.studentService.getStudentUpdate(this.id).subscribe(data=>{
      this.studentInfos1=data;
      
      //this.processResult()
    // data=>{
        //console.log(data);
        //this.studentInfos1.id=data;
        //console.log(this.studentInfos);

    }
    
   )
  }
  //processResult() {
   // return data=>{
   //   this.studentInfos1=data._embedded.student_infoes;
   // }
  //}


  onSubmit()
  {
    console.log("Handling the submit button");
      this.updateStudent();
    
  }
//update purpose

  updateStudent() {
    //check id parametr
    const hasid:boolean=this.route.snapshot.paramMap.has('id');

    if(hasid)
    {
       this.id=+this.route.snapshot.paramMap.get('id');
    }
    else{
      this.id=0;
    }
    //console.log(`id: ${this.id} and data:${this.studentInfos}`);
    this.studentService.updateStudent(this.id,this.temp).subscribe(
      data=>{
      //console.log(data);
        alert("Student record updated successfully");
      //this.studentInfos.push(data);

      }
    );
  }
  



}
// handleListStudents() {
//   this.studentService.getStudentListPaginate(this.thePageNumber-1,
//                                              this.thePageSize).subscribe(this.ProcessResults());
// }
// //get data & pagination 
// ProcessResults(){
//   return data=>{
//     this.getstudents=data._embedded.student_infoes;
//     this.thePageNumber=data.page.number+1;
//     this.thePageSize=data.page.size;
//     this.theTotalElements=data.page.totalElements;


//   }
// }
