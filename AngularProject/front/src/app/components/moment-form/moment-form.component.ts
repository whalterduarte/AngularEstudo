import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormsModule, Validator, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Moment } from '../../interface/Moment';
import { emit } from 'process';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent {
  @Input() btnText!: string
  @Output() onSubmit = new EventEmitter<Moment>()
  momentForm!: FormGroup
  ngOnInit(): void{
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    })
  }

  get title() {
    return this.momentForm.get('title')!
  }
  get description() {
    return this.momentForm.get('description')!
  }

  onFileSelected(event: any){
    const file: File = event.target.files[0]
    this.momentForm.patchValue({image: file})
  }

  submit() {
    if(this.momentForm.invalid){
      return
    }
    console.log(this.momentForm.value)
    this.onSubmit.emit(this.momentForm.value)
  }
}
