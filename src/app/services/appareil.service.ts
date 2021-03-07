export class AppareilService {
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


  switchOnAll(): void {
    for (const appareil of this.appareils){
      appareil.status = 'allumé' ;
    }
  }

  switchOffAll(): void {
    for (const appareil of this.appareils){
      appareil.status = 'éteint' ;
    }
  }

  switchOn(index: number): void {
    this.appareils[index].status = 'allumé' ;
  }

  switchOff(index: number): void {
    this.appareils[index].status = 'éteint' ;
  }
}
