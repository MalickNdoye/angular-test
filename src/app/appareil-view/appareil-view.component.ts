import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: any[];
  appareilSubscription: Subscription;

  lastUpdate = new Date() ;

  constructor(private appareilService: AppareilService) {
    this.appareils = [];
    this.appareilSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumeTout(): void{
    this.appareilService.switchOnAll();
  }

  onEteintTout(): void{
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    }
  }

  ngOnDestroy(): void {
    this.appareilSubscription.unsubscribe();
  }

  onSave(): void {
    this.appareilService.saveAppareilsToServer();
  }

}
