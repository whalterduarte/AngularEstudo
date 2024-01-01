import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'Whalter Duarte'
  hobbies: string[] = ['PROGRAMAR', 'JOGAR']
  car ={
    name: 'Gol' as string,
    year: 2020 as number
  }
}
