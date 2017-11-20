import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

export interface UserData {
    email: string;
    profileUrl: string;
}

@Injectable()
export class UserApi {
    constructor(private http: HttpClient) {
    }

    retrieveUserInfo(): Observable<UserData> {
        return this.http.post<UserData>('/api/user', null);
    }
}