import { Component, Input } from '@angular/core';
import { IfRenderComponent } from '../if-render/if-render.component';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [IfRenderComponent],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
 @Input() name: string = '';
 @Input() userData!: {email: string, role: string}
}
