import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent {
  canShow: boolean = false
  name: string = 'whalter'
}
