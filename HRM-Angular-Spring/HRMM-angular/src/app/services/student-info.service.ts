import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentInfo } from '../common/student-info';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {
  
  private baseURL = 'http://localhost:8080/api/student_infoes'

  constructor(private httpClient: HttpClient) { }

  //pagination purpose

  getStudentListPaginate(thePage: number,
                         thePageSize: number,
                        //theid: number): Observable<GetResponseStudents> {
                          theStatus:number): Observable<GetResponseStudents> {

    //const searchUrl = `${this.baseURL}/search/findByid?id=${theid}` + `&page=${thePage }&size=${thePageSize }`;
    const searchUrl = `${this.baseURL}/search/findByStatusContaining?status=${theStatus}` + `&page=${thePage }&size=${thePageSize }`;

    return this.httpClient.get<GetResponseStudents>(searchUrl);
  }
  //pagination for search

  searchStudentPaginate(thePage: number, 
                       thePageSize: number, 
                       theKeyword: string) {

    const searchUrl=`${this.baseURL}/search/findByNameContaining?name=${theKeyword}`+`&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseStudents>(searchUrl);
    
  }
  
 //student view purpose
  getStudent(currentid: number):Observable<StudentInfo>{
    const searchUrl = `${this.baseURL}/search/findByid?id=${currentid}`;

    return this.httpClient.get<GetResponseStudents>(searchUrl).pipe(map(response=>response._embedded.student_infoes));

  }

  getStudentUpdate(currentid: number):Observable<StudentInfo>{
    const searchUrl = `${this.baseURL}/search/findByid?id=${currentid}`;

    return this.httpClient.get<GetResponseStudents>(searchUrl).pipe(map(response=>response._embedded.student_infoes));

  }
//create student 
public createStudent(student){

  return this.httpClient.post<StudentInfo>(`${this.baseURL}`,student);
}
// update student
public updateStudent(id: number,temp:any)
{
  return this.httpClient.put<StudentInfo>(`${this.baseURL}/${id}`,temp);
}

//refactor code
 // private getStudents(searchUrl: string): Observable<StudentInfo[]> {
 //   return this.httpClient.get<GetResponseStudents>(searchUrl).pipe(map(response => response._embedded.student_infoes));
 // }
}

interface GetResponseStudents {
  _embedded:
  {
    student_infoes: StudentInfo;
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
