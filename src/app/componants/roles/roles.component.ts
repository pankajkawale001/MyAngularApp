import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roleList: IRole[] = [];

  //Dependency injection -- old way
  // constructor(private http: HttpClient) {
  // }

  //Dependency injection -- New way
  http = inject(HttpClient);

  ngOnInit(): void {  
    this.getAllRoles();
  }

  getAllRoles() {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: any)=> {
    this.roleList=res.data;  
    })
  }
















  // string, numbers, date, object, array, boolean, undefined, null -- thiis are the datatypes

  // firstName: string = "Angular Tutorial";
  // angularVersion: number = 19;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = "checkbox";
  // selectState: string = "";

  // showWelcomeAlert() {
  //   alert("Welcome to the angular tutorial");
  // }

  // showWelcomeAlertMessage(message: string) {
  //   alert(message);
  // }

}
