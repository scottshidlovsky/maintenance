import { NgModule } from '@angular/core';
import { ColComponent, ColDirective, ContainerComponent, RowComponent } from './grid.component';

@NgModule({
  imports: [],
  exports: [ContainerComponent, RowComponent, ColComponent, ColDirective],
  declarations: [ContainerComponent, RowComponent, ColComponent, ColDirective]
})
export class GridModule {}
