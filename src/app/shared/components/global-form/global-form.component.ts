import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { NgFor, NgIf } from '@angular/common';


export interface FormField {
  name: string;
  value?: any;
  validators?: any[];
  readonly?: boolean;
  type?: string;
}

@Component({
  selector: 'app-global-form',
  templateUrl: './global-form.component.html',
  styleUrls: ['./global-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, NgFor, NgIf],
})
export class GlobalFormComponent {
  @Input() fields: FormField[] = [];
  @Output() formSubmitted = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    const group: any = {};
    this.fields.forEach((field) => {
      group[field.name] = [
        field.value !== undefined
          ? field.value
          : field.name === 'id'
          ? uuidv4()
          : '',
        field.validators || [],
      ];
    });
    this.form = this.fb.group(group);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.formSubmitted.emit(this.form.value);
  }
}
