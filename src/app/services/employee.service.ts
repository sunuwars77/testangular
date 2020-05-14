import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Employee} from 'src/app/models/employee-model';
import{Department} from'src/app/models/department-model';
import{Observable} from 'rxjs';
import {Subject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http:HttpClient) {}

formData: Employee;

    readonly APIUrl ="http://gridecoreapp-env.peird25tbn.us-east-1.elasticbeanstalk.com/api";

   getEmpList():Observable<Employee[]>{
     return this.http.get <Employee[]>(this.APIUrl+ '/Employee');

   }
addEmployee(dep:Employee){
  return this.http.post(this. APIUrl +'/Employee',dep);

}
deleteEmployee(id:number){
  return this.http.delete(this.APIUrl+'/Employee/'+id);
}
updateEmployee(dep:Employee) {
  return this.http.put(this.APIUrl+'/Employee',dep);
}



getDepDropDrownValue(): Observable<any>{
  return this.http.get<Department[]>(this.APIUrl+'/department');
}

 private  _listeners =new Subject<any>();
 listen(): Observable<any>{
   return this._listeners.asObservable();

 }
 filter(filterBy: string){
   this._listeners.next(filterBy);
 }
}