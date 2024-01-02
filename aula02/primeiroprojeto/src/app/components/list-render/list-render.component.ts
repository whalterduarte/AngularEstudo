import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../interface/Animals';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  animals: Animal[] = [
    {name: 'Whalter', type: 'Dog',},
    {name: 'Drii', type: 'Cath',},
    {name: 'Manu', type: 'Human',}
  ]

  constructor(private listService: ListService) {

  }

  animalDetails = ''

  showName(animal: Animal) {
    this.animalDetails = ` O nome e ${animal.name}`
  }
}
