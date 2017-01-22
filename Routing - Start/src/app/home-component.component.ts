import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{queryParam}}
    <div id="section1"></div>
  `,
  styles: []
})
export class HomeComponent implements OnDestroy{
  queryParam: string;
  private subscription: Subscription;

  constructor(private activatedRouter: ActivatedRoute){
    this.subscription = activatedRouter.queryParams.subscribe(
      (param: any) => this.queryParam = param['analytics']
    )
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
