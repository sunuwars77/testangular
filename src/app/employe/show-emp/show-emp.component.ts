import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Employee} from 'src/app/models/employee-model';
import{ EmployeeService} from 'src/app/services/employee.service';
import{MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import{ AddEmpComponent} from 'src/app/employe/add-emp/add-emp.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EditEmpComponent } from '../edit-emp/edit-emp.component';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: EmployeeService,
    private dialog:MatDialog,
    private snackBar: MatSnackBar ) {
      this.service.listen().subscribe((m:any)=>{
        console.log(m);
        this.refreshEmpList();
         })
        }
      

        listData : MatTableDataSource<any>;
        displayedColumns: string[]= [ 'Options', 'EmployeeID','EmployeeName','Department','MailID','DOJ']

ngOnInit(): void {
  this.refreshEmpList();

}
onEdit(emp:Employee){
  this.service.formData= emp;
  const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="70%" ;
    this.dialog.open(EditEmpComponent, dialogConfig) ;
  }

applyFilter(filtervalue: string){
  this.listData.filter= filtervalue.trim().toLocaleLowerCase();
}

  refreshEmpList(){
    
    this.service.getEmpList().subscribe(data => {
      this.listData =new MatTableDataSource(data);
    }
    
    );



}
onDelete(id:number){
  if(confirm('Are you sure to delete?')){
    this.service.deleteEmployee(id).subscribe(res=>{
      this.refreshEmpList();
      this.snackBar.open(res.toString(), '',{
        duration:5000,
        verticalPosition:'bottom'
    });
  });
}}
onAdd(){

  const dialogConfig= new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width ="70%" ;
  this.dialog.open(AddEmpComponent, dialogConfig) ;
}

}

  
  




  

  
  
  

 





  





    
  

  
    



  
