import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go Home</button>
      <hr>
      {{id}}
      <hr>
      {{qParam}}
      <hr>
      <router-outlet></router-outlet>
    `
})
export class UserComponent implements OnDestroy{
  private subscription: Subscription;
  id: string;
  qParam: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute ){
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
    this.subscription = activatedRoute.queryParams.subscribe(
      (queryParam: any) => this.qParam = queryParam['analytics']
    );
  }
  onNavigate(){
    this.router.navigate(['/']);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
