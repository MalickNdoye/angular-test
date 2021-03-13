import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  title = 'angular-test : initiation';
  isAuth = false ;

  lastUpdate = new Date() ;

  appareils: any ;

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils ;
  }

  onAllumeTout(): void{
    this.appareilService.switchOnAll();
  }

  onEteintTout(): void{
    this.appareilService.switchOffAll();
  }

}
