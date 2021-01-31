import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName = 'IoT';
  @Input() appareilStatus = 'éteint' ;

  constructor() { }

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
}
