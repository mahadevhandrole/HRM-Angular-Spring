import { Component, OnInit } from '@angular/core';
import { BusinessInfo } from 'src/app/common/business-info';
import { BusinessInfoService } from 'src/app/services/business-info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.css']
})
export class ClientAccountComponent implements OnInit {

  clientaccount:BusinessInfo;
  status:number=3;

  //getstudents : StudentInfo;
   currentid:number=1;
   previousid:number=1;

   //status:number=0;

   previouskeyword:string=null;

   thePageNumber:number=1;
   thePageSize:number=5;
   theTotalElements:number=0;
   searchMode:boolean;
   
  constructor(private businessInfoService:BusinessInfoService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.clientAccount();
    });
  }
  //for pagination purpose
  updatePageSize(pageSize:number)
  {
    this.thePageSize=pageSize;
    this.thePageNumber=1;
    this.clientAccount();
  }
  clientAccount() {
    this.searchMode=this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode)
    {
      this.handleSearchContacts();
    }
    else{
      this.handleListContacts();
      
    }
     
  }
   // search student contact using keyword
   handleSearchContacts() {
    const theKeyword:string=this.route.snapshot.paramMap.get('keyword');

    if(this.previouskeyword!=theKeyword)
    {
     this.thePageNumber=1;
    }
    this.previouskeyword=theKeyword;
    
 
    this.businessInfoService.getClientSearchPaginate(this.thePageNumber-1,
                                              this.thePageSize,
                                              theKeyword).subscribe(this.ProcessResults());

  }
   //list student takes from service

   handleListContacts() {
    //check the status
  const hasStatus:boolean=this.route.snapshot.paramMap.has('status');
   if(hasStatus)
   {
  this.status=+this.route.snapshot.paramMap.get('status');
  }
   else{
   this.status=0;
   }
  this.businessInfoService.getClientListPaginate(this.thePageNumber-1,
                                             this.thePageSize,
                                             this.status).subscribe(this.ProcessResults());
    }
 //get data & pagination 
 ProcessResults(){
  return data=>{
    this.clientaccount=data._embedded.business_infoes;
    this.thePageNumber=data.page.number+1;
    this.thePageSize=data.page.size;
    this.theTotalElements=data.page.totalElements;


  }
 }

}
