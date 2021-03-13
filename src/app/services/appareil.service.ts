export class AppareilService {
  appareils = [
    {
      id: 1,
      name: 'Siri',
      status: 'allumé',
    },
    {
      id: 2,
      name: 'Cortana',
      status: 'allumé',
    },
    {
      id: 3,
      name: 'Alexa',
      status: 'éteint',
    },
  ] ;

  getAppareilById(id: number): any{
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil ;
  }

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
