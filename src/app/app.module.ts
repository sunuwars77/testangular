import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import{MatTableModule} from '@angular/material/table';
import{ MatIconModule} from '@angular/material/icon';
import{ MatButtonModule} from '@angular/material/button';
import {MatSortModule}  from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule} from '@angular/forms';

import { EmployeComponent } from './employe/employe.component';
import { ShowEmpComponent } from './employe/show-emp/show-emp.component';
import { EditEmpComponent } from './employe/edit-emp/edit-emp.component';
import { AddEmpComponent } from './employe/add-emp/add-emp.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { EditDepComponent } from './department/edit-dep/edit-dep.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import { ContactComponent } from './contact/contact.component';
import { EditCntComponent } from './contact/edit-cnt/edit-cnt.component';
import { ShowCntComponent} from './contact/show-cnt/show-cnt.component';
import{DepartmentService} from 'src/app/services/department.service';
import{EmployeeService} from 'src/app/services/employee.service';
 

@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    ShowEmpComponent,
    EditEmpComponent,
    AddEmpComponent,
    DepartmentComponent,
    ShowDepComponent,
    EditDepComponent,
    ContactComponent,
    AddDepComponent,
    EditCntComponent,
    ShowCntComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule, MatIconModule, MatButtonModule,
    
    HttpClientModule,
    FormsModule,
    MatDialogModule
  
  ],
  providers: [DepartmentService,EmployeeService],
  bootstrap: [AppComponent],
  entryComponents: [AddDepComponent]
})
export class AppModule { }
