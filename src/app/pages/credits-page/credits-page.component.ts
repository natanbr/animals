import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './credits-page.component.html',
  styleUrls: ['./credits-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
