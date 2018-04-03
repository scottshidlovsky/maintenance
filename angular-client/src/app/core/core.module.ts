import { NgModule } from '@angular/core';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppBarComponentComponent } from './app-bar/app-bar-component.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatToolbarModule, RouterModule],
  declarations: [AppBarComponent, AppBarComponentComponent],
  exports: [AppBarComponent]
})
export class CoreModule {}
