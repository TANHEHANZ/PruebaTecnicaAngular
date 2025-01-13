import { Component } from '@angular/core';
import { PockeServiceService } from '../../../modules/services/pocke-service.service';
import {
  dataPockemon,
  listPockemon,
} from '../../../modules/types/pockeService';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  constructor(
    private pokeService: PockeServiceService,
    private listPockemones: listPockemon 
  ) {}

  ngOnInit(): void {
    this.getListPockemon();
    console.log(this.listPockemones);
  }

  getListPockemon() {
    this.pokeService.getProducts().subscribe({
      next: (result) => {
        this.listPockemones = result;
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
}
