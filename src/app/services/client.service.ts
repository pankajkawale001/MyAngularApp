import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/role';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + "GetAllEmployee");
  }

  getAllClientProject(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + "GetAllClientProjects");
  }

  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + "GetAllClients");
  }

  addUpdate(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClient", obj);
  }

  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId" + id);
  }

  addUpdateClientProject(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClientProject", obj);
  }
}
