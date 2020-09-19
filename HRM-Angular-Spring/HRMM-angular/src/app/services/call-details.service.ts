import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CallDetails } from '../common/call-details';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallDetailsService {
  
 
  private baseUrl='http://localhost:8080/api/call_detailses';


  constructor(private httpClient: HttpClient) { }

  callDetailsView(currentID: number):Observable<CallDetails> {
   
   const searchUrl=`${this.baseUrl}/search/findByid?id=${currentID}`;


   return this.httpClient.get<getCallDetails>(searchUrl).pipe(map(response=>response._embedded.call_detailses));


  }
  public callCreate(call,currentID) {
    
    
    return this.httpClient.post<CallDetails>(`${this.baseUrl}`,call,currentID);

  }

}
interface getCallDetails
  {
    _embedded : {
      call_detailses : CallDetails;
  }
}