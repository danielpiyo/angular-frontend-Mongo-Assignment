import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  studentForm!: FormGroup;

  constructor(private fb: FormBuilder, private studentService: ServiceService) {
    this.createForm();
  }

  createForm() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]], // Example: Minimum age of 18
      grade: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentService.addStudent(this.studentForm.value).subscribe(
        response => {
          console.log('Student added successfully');
          this.studentForm.reset();
        },
        error => {
          console.error('Error adding student: ', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
