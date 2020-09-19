import { Component, OnInit } from '@angular/core';
import { StudentInfo } from 'src/app/common/student-info';
import { StudentInfoService } from 'src/app/services/student-info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-lead',
  templateUrl: './students-lead.component.html',
  styleUrls: ['./students-lead.component.css']
})
export class StudentsLeadComponent implements OnInit {

  studentlead: StudentInfo;
  status: number = 2;

  //getstudents : StudentInfo;
  currentid: number = 1;
  previousid: number = 1;

  //status:number=0;

  previouskeyword: string = null;

  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;
  searchMode: boolean;
  constructor(private studentInfoService: StudentInfoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.studentLead();
    })
  }

  //for pagination purpose
  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.studentLead();
  }
  studentLead() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchLead();
    }
    else {
      this.handleListLead();

    }

  }
  // search student contact using keyword
  handleSearchLead() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    if (this.previouskeyword != theKeyword) {
      this.thePageNumber = 1;
    }
    this.previouskeyword = theKeyword;


    this.studentInfoService.searchStudentPaginate(this.thePageNumber - 1,
      this.thePageSize,
      theKeyword).subscribe(this.ProcessResults());

  }
  //list student takes from service

  handleListLead() {
    //check the status
    const hasStatus: boolean = this.route.snapshot.paramMap.has('status');
    if (hasStatus) {
      this.status = +this.route.snapshot.paramMap.get('status');
    }
    else {
      this.status = 0;
    }
    this.studentInfoService.getStudentListPaginate(this.thePageNumber - 1,
      this.thePageSize,
      this.status).subscribe(this.ProcessResults());
  }
  //get data & pagination 
  ProcessResults() {
    return data => {
      this.studentlead = data._embedded.student_infoes;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;


    }
  }
}







