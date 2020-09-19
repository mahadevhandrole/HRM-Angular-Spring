import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessInfo } from '../common/business-info';
import { BusinessContact } from '../common/business-contact';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusinessInfoService {
  
  
  private baseUrl='http://localhost:8080/api/business_infoes';

  //private contectBaseUrl='http://localhost:8080/api/business_contacts';

  constructor(private httpCLient : HttpClient) { }


  //getClientList():Observable<BusinessInfo[]>
  //{
//return this.httpCLient.get<GetResponse>(this.baseUrl).pipe(map(response=>response._embedded.business_infoes));
 // }
 
  //pagination purpose

  getClientListPaginate(thePage: number, 
                        thePageSize: number,
                        theStatus:number): Observable<GetResponse> {
    
 const searchUrl=`${this.baseUrl}/search/findByStatusContaining?status=${theStatus}` + `&page=${thePage}&size=${thePageSize}`;
 
  return this.httpCLient.get<GetResponse>(searchUrl);

  }
  //search paginate
  getClientSearchPaginate(thePage: number, 
                          thePageSize: number, 
                          thekeyword: string) {

    const searchUrl=`${this.baseUrl}/search/findByNameContaining?name=${thekeyword}`+`&page=${thePage}&size=${thePageSize}`;

    return this.httpCLient.get<GetResponse>(searchUrl);
    
  }
  //client view purpose
  getClientView(currentId: number):Observable<BusinessInfo> {

    const searchUrl=`${this.baseUrl}/search/findByid?id=${currentId}`;

    return this.httpCLient.get<GetResponse>(searchUrl).pipe(map(response=>response._embedded.business_infoes));
   
  }
  //form client to submit
  public addClient(client) {

   return this.httpCLient.post<BusinessInfo>(`${this.baseUrl}`,client);
    
  }
  //client contect
  // public addClientContect(clientContect) {
   
  //   return this.httpCLient.post<BusinessContact>(`${this.contectBaseUrl}`,clientContect);
  // }
}
interface GetResponse
{
  _embedded:{
    business_infoes:BusinessInfo;
  },
  page:{
    size:number,
    totalElements:number,
    totalPages:number,
    number:number
  }
}
// interface GetResponseClientContect
// {
//   _embedded:{
//     business_contacts:BusinessContact;
//   },
//   page:{
//     size:number,
//     totalElements:number,
//     totalPages:number,
//     number:number
//   }
// }