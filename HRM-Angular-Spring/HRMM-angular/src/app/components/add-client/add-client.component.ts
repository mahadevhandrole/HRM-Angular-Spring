import { Component, OnInit } from '@angular/core';
import { BusinessInfoService } from 'src/app/services/business-info.service';
import { ActivatedRoute } from '@angular/router';
import { BusinessInfo } from 'src/app/common/business-info';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  business_infoes1:BusinessInfo;

  currentId:number=1;
  previousId:number=1;

  previouskeyword:string=null;

  status:number=0;

 // new propertis for pagination

  thePageNumber:number=1;
  thePageSize:number=5;
  theTotalElements:number=0;
  searchMode:boolean;

  AddClientFormGroup:FormGroup;

  constructor(private businessInfoService:BusinessInfoService,
              private route:ActivatedRoute,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {

      this.formSubmit();

     this.route.paramMap.subscribe(()=>{
      this.listClients();
     });

    
  
  }
  formSubmit() {
    this.AddClientFormGroup=this.formBuilder.group({
      client:this.formBuilder.group({
        name:[''],
        address:[''],
        date:[''],
        b_type:[''],
        c_name:[''],
        designation:[''],
        email:[''],
        contact_no1:[''],
        contact_no2:['']
      })
    });
  }
  onSubmit()
  {
    console.log("Handling the submit button");
    console.log(this.AddClientFormGroup.get('client').value);
    
    this.createClient();
    
    
  }
  
  createClient(){
  
   this.businessInfoService.addClient(this.AddClientFormGroup.get('client').value).subscribe(
   data=>{
      alert("client record created succussfully");
    });
    
  
  }
  updatePageSize(pageSize:number)
{
  this.thePageSize=pageSize;
  this.thePageNumber=1;
  this.listClients();

}  
  listClients() {

    this.searchMode=this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode)
    {
    this.handleSearchClients();

    }
    else
    {
      this.handleListClients();
    }

  }
  handleListClients() {
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
  handleSearchClients() {
    const thekeyword:string=this.route.snapshot.paramMap.get('keyword');

    if(this.previouskeyword!=thekeyword)
    {
      this.thePageNumber=1;
    }

    this.previouskeyword=thekeyword;

    this.businessInfoService.getClientSearchPaginate(this.thePageNumber-1,
                                                     this.thePageSize,
                                                     thekeyword).subscribe(this.ProcessResults());
    
  }

  ProcessResults(){
    return data=>{
      this.business_infoes1=data._embedded.business_infoes;
      this.thePageNumber=data.page.number+1;
      this.thePageSize=data.page.size;
      this.theTotalElements=data.page.totalElements;

  };

}


}

