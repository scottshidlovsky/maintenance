import {NgModule} from "@angular/core";
import {LoginPageComponent} from "./login-page/login.page";
import {RouterModule} from "@angular/router";
import {routes} from "./auth.routing";
import {FacebookBtnComponent} from "./login-page/facebook-btn.component";
import {StoreModule} from "@ngrx/store";
import {userReducer, State as AuthState} from "./auth.reducer";

export interface State {
    user: AuthState
}

const reducers = {
    user: userReducer
};

@NgModule({
    imports:[
        RouterModule.forChild([{path: 'login', component: LoginPageComponent}]),
        StoreModule.forFeature('auth', reducers),
    ],
    declarations: [
        LoginPageComponent,
        FacebookBtnComponent
    ],
    exports: [

    ]
})
export class AuthModule {}