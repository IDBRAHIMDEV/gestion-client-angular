import { ToastrService } from 'ngx-toastr';
import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients: Client[] = [];
  constructor(
    private toastr: ToastrService,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.clientService._getAll()
        .subscribe((res: Client[]) => {
          this.clients = res
          console.log(res)
        })
  }

  destroyClient(id: string) {
    this.clientService.delete(id)
        .then(() => this.toastr.info('Ce client a été supprimé avec succès', 'Suppression', {
          positionClass: 'toast-bottom-left'
        }))
        .catch(err => this.toastr.warning(err.message, 'Erreur', {
          positionClass: 'toast-bottom-left'
        }))
  }

}
