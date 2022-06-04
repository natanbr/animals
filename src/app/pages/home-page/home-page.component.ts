import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {

  constructor(
    private readonly navigationService: NavigationService
    ) { }

  ngOnInit(): void {
  }

  async gotoAnimalsPage(): Promise<void> {
    return this.navigationService.gotoAnimalsPage();
  }

  async gotoCredits(): Promise<void> {
    return this.navigationService.gotoCreditPage();
  }
}
