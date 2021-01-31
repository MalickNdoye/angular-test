import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test : initiation';
  isAuth = false ;

  lastUpdate = new Date() ;

  appareils = [
    {
      name: 'Siri',
      status: 'allumé',
    },
    {
      name: 'Cortana',
      status: 'allumé',
    },
    {
      name: 'Alexa',
      status: 'éteint',
    },
  ] ;


  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllume(): void{
    console.log('On allume tout.');
  }
}
