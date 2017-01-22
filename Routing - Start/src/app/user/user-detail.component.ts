import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-user-detail',
    template: `
      <h3>Some user Details</h3>
      <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
    `
})
export class UserDetailComponent implements OnInit {

    constructor(private router: Router){}
    ngOnInit() {
        console.log("OnInit");
    }
    onNavigate(){
        this.router.navigate(['']);
    }
}
