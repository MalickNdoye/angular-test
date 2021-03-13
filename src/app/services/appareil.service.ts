import { Subject } from 'rxjs/Subject';
import 'rxjs-compat' ;
export class AppareilService {
  appareilsSubject: Subject<any>;

  private appareils = [
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

  constructor() {
    this.appareilsSubject = new Subject<any>();
  }

  emitAppareilSubject(): void {
    this.appareilsSubject.next(this.appareils.slice()) ;
  }

  getAppareilById(id: number): any{
    return this.appareils.find(
      (s) => {
        return s.id === id;
      }
    ) ;
  }

  switchOnAll(): void{
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffAll(): void {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
      this.emitAppareilSubject();
    }
  }

  switchOn(i: number): void {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOff(i: number): void {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
  }
}
