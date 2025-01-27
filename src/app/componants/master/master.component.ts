import { Component } from '@angular/core';
import { RolesComponent } from "../roles/roles.component";
import { DesignationComponent } from "../designation/designation.component";
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [RolesComponent, DesignationComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  currentComponant: string = "Roles";

  changeTab(tabname: string) {
    this.currentComponant = tabname;
  }

}
