import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'rp-app-a',
  template: `
    
      <h1> Component A</h1>
      <div *ngIf="params">
        <h2> {{params}} was passed in as a query string</h2>
      </div>
      
      
      <div id="page section1"></div>
  `,
  styles: []
})
export class AppAComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  params: string;

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.queryParams.subscribe(
      queryParam => this.params = queryParam['testparm']
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
