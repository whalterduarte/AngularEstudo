import { Component } from '@angular/core';
import { MomentFormComponent } from '../../moment-form/moment-form.component';
import { Moment } from '../../../interface/Moment';
import { MomentService } from '../../../services/moment.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [MomentFormComponent, HttpClientModule ],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText: string = 'Compartilhar'

  async createdHandler(moment: Moment){
    const formData = new FormData()
    formData.append("title", moment.title)
    formData.append("description", moment.description)
    if(moment.image) {
      formData.append("image", moment.image)
    }
    // todo

    // enviar para o service

    // exibir msg

    // redirect
  }
}
