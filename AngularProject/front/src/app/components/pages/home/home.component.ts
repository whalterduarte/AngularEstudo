import { Component } from '@angular/core';
import { MomentFormComponent } from '../../moment-form/moment-form.component';
import { NewMomentComponent } from '../new-moment/new-moment.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewMomentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
