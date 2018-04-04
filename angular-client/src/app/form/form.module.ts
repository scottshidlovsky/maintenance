import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { DropdownComponent, DropdownOptionComponent } from './dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
  exports: [DropdownComponent, DropdownOptionComponent],
  declarations: [DropdownComponent, DropdownOptionComponent]
})
export class FormModule {}
