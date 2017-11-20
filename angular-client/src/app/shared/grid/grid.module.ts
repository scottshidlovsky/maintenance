import {NgModule} from "@angular/core";
import {ColComponent, ContainerComponent, RowComponent} from "./grid.component";

@NgModule({
    imports: [

    ],
    exports: [
        ContainerComponent,
        RowComponent,
        ColComponent
    ],
    declarations: [
        ContainerComponent,
        RowComponent,
        ColComponent
    ]
})
export class GridModule {}