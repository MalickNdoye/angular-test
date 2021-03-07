import { Component, OnInit, Input} from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string ;
  @Input() appareilStatus: string ;
  @Input() indexOfAppareil: number ;

  constructor(private appareilService: AppareilService) {
    this.appareilName = 'Default name' ;
    this.appareilStatus = 'éteint' ;
    this.indexOfAppareil = 0 ;
  }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareilStatus ;
  }

  getColor(): string{
    if (this.appareilStatus === 'allumé'){
      return 'green' ;
    } else if (this.appareilStatus === 'éteint'){
      return 'red' ;
    } else {
      return 'blue' ;
    }
  }

  onAllume(): void{
    this.appareilService.switchOn(this.indexOfAppareil);
  }

  onEteint(): void{
    this.appareilService.switchOff(this.indexOfAppareil);
  }
}
