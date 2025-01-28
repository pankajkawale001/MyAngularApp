import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from '../client/client.component';
import { APIResponseModel, ClientProject, Employee } from '../../model/interface/role';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/class/Client';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule,DatePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl(""),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(""),
  })

  clientService = inject(ClientService);
  employeeList: Employee[] = [];
  clientList: Client[] = [];
  projectList=signal<ClientProject[]>([]);

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployee();
    this.getAllClientProject();
  }

  getAllClientProject() {
    this.clientService.getAllClientProject().subscribe((res: APIResponseModel) => {
      this.projectList.set(res.data);
    })
  }

  getAllEmployee() {
    this.clientService.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    })
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveProject(){
    const formValue =this.projectForm.value;
    this.clientService.addUpdateClientProject(formValue).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert('Project Created Successfully');
        } else {
        alert(res.message);
      }
    })
  }

}
