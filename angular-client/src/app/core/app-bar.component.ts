import {Component, Input} from "@angular/core";

@Component({
    selector: 'cm-app-bar-component',
    template: `
      <mat-toolbar color="primary">
        <div class="nav-bar">
          <span>Car Maintenance</span>
          <button *ngIf="!authenticated" mat-button color="secondary" [routerLink]="['/login']">Login</button>
          <button *ngIf="!!authenticated" mat-button color="secondary">Logout</button>
        </div>
      </mat-toolbar>
    `,
    styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {
    @Input()
    email: string;

    @Input()
    authenticated: boolean;

    @Input()
    profileUrl: string;
}