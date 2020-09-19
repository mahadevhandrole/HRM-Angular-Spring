import { Component, OnInit } from '@angular/core';
import { BusinessInfoService } from 'src/app/services/business-info.service';
import { ActivatedRoute } from '@angular/router';
import { BusinessInfo } from 'src/app/common/business-info';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  clientview : BusinessInfo;
  currentId:number;

  constructor(private bessinessInfoService:BusinessInfoService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(()=>{
      this.clientView();
    });
  }
  clientView() {
    //check id parameter
    const hasid:boolean=this.route.snapshot.paramMap.has('id');

    if(hasid)
    {
      this.currentId=+this.route.snapshot.paramMap.get('id');
    }
    else{
      this.currentId=0;
    }

    this.bessinessInfoService.getClientView(this.currentId).subscribe(data=>{
      this.clientview=data;
    })
    
  }

}
