import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'cm-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
    constructor(private router: Router) {}

    addUserVehicle() {
        this.router.navigate(['vehicle', 'add']);
    }
}