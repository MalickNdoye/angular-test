import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable' ;
import { Subscription } from 'rxjs';
import 'rxjs-compat/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  secondes: number ;
  counterSubscription: Subscription;

  constructor() {
    this.secondes = 0 ;
    this.counterSubscription = new Subscription() ;
  }

  ngOnInit(): void {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
