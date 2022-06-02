import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  video$ = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
  }

  startVideo(): void {
    this.video$.next('PRQCAL_RMVo')
  }
}
