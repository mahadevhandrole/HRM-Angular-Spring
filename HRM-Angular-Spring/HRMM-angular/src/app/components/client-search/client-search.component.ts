import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  doSearch(value:string)
  {
    console.log(`value:${value}`);

    this.router.navigateByUrl(`/app-client-search/${value}`);
  }

}
