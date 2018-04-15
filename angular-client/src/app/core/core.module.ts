import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppBarComponentComponent } from './app-bar/app-bar-component.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, RouterModule, MatButtonModule],
  declarations: [AppBarComponentComponent, AppBarComponent],
  exports: [AppBarComponent]
})
export class CoreModule {}
