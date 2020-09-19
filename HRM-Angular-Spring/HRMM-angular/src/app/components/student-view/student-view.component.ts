import { Component, OnInit } from '@angular/core';
import { StudentInfo } from 'src/app/common/student-info';
import { StudentInfoService } from 'src/app/services/student-info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  studentsview: StudentInfo;
  currentid:number;

  constructor(private studentService:StudentInfoService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(()=>{
      this.studentview();

    }
    );
  }
  studentview() {
    //ccheck id parameter 
    const hasid:boolean=this.route.snapshot.paramMap.has('id');

    if(hasid)
    {
      this.currentid=+this.route.snapshot.paramMap.get('id');

    }
    else{
      this.currentid=0;
    }

    this.studentService.getStudent(this.currentid).subscribe(data=>{
      this.studentsview=data;
    })
  }

}
