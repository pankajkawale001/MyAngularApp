import { Routes } from '@angular/router';
import { MasterComponent } from './componants/master/master.component';
import { EmployeeComponent } from './componants/employee/employee.component';
import { ClientComponent } from './componants/client/client.component';
import { ClientProjectComponent } from './componants/client-project/client-project.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'master',
        pathMatch: 'full'
    },
    {
        path: 'master',
        component: MasterComponent
    },
    {
        path: 'employee',
        component: EmployeeComponent
    },
    {
        path: 'client',
        component: ClientComponent
    },
    {
        path: 'client-project',
        component: ClientProjectComponent
    }
];
