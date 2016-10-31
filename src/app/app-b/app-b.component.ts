import {Component, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'rp-app-b',
  template: `
    
      <h1>Component B - Value {{id}}</h1>
        <button (click)="onNavigate()">Goto Comp A</button>
        <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppBComponent implements OnDestroy {
  private subscription: Subscription;
  id:string;

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'testparm': 100}});

  }

  ngOnDestroy() {
        this.subscription.unsubscribe();
    }

//  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
//    this.id = activatedRoute.snapshot.params['id']; }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
        (param:any) => this.id = param['id']
        );
  }


}
