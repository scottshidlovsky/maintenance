import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { DropdownComponent, DropdownOptionComponent } from './dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatInputModule],
  exports: [DropdownComponent, DropdownOptionComponent, InputComponent],
  declarations: [DropdownComponent, DropdownOptionComponent, InputComponent]
})
export class FormModule {}
