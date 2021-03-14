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

  addAppareil(name: string, status: string): void {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
}
