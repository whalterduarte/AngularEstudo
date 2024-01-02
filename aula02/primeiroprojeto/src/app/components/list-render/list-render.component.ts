import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals = [
    {name: 'Turca', type: 'Dog',},
    {name: 'Drii', type: 'Cath',},
    {name: 'Manu', type: 'Human',}
  ]
}
