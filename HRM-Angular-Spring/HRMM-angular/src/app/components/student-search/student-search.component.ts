import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {

  

  constructor(private router: Router) { }

  
  ngOnInit() {

    
  }
  doSearch(value:string)
  {
    console.log(`value:${value}`);
    this.router.navigateByUrl(`/app-student-search/${value}`);
    
  }

}
