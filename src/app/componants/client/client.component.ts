import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../../model/class/Client';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client;
  clientList: Client[] = [];

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    });
  }

  onSaveClient() {
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert('Client created success');
        this.loadClient();
      } else {
        alert(res.message);
      }
    });
  }

  onDeleteClient(id: number) {
    const isDelete = confirm('Are you sure want to delete');
    if (isDelete) {
      this.clientService.deleteClientById(id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Client Delete Success');
          this.loadClient()
        } else {
          alert(res.message);
        }
      });
    }
  }


}
