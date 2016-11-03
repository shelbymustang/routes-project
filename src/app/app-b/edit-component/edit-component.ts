import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {ComponentCanDeactivate} from "../../app-a/app-a.guard";
import {Observable} from "rxjs";

@Component({
  selector: 'rp-edit-component',
  template: `
    <p>
      <button (click)="done = true">Done</button>
      <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
    </p>
  `,
  styles: []
})
export class EditComponent implements OnInit, ComponentCanDeactivate {
  done: boolean = false;

  constructor(private router: Router) { }

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'testparm': 100}});

  }

  canDeactivate() : Observable<boolean> | boolean {
     if (!this.done) {
       return confirm("Are we done?");
     }
     return false;
  }
  ngOnInit() {
  }

}
