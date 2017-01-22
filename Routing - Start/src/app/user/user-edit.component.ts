import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ComponentCanDeactivate } from "./user-edit.guard";
import { Observable } from "rxjs/Rx";

@Component({
    selector: 'app-user-edit',
    template: `
        <h3>User Edit</h3>
        <button (click)="done = true">Done</button>

    `
})
export class UserEditComponent implements ComponentCanDeactivate {
    done = false;

    constructor(private router: Router){};

    canDeactivate(): Observable<boolean> | boolean{
        if(!this.done){
            return confirm('Do zou want to leave');
        }
        return true;
    }
}
