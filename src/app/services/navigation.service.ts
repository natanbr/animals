
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { VideoDetails } from '../types/clickable-item';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  async gotoAnimalsPage(): Promise<void> {
    await this.router.navigate(['animals']);
  }

  async gotoCreditPage(): Promise<void> {
    await this.router.navigate(['credits']);
  }

  async gotoVideo(details: VideoDetails): Promise<boolean> {
    if (!details.videoId)
      return this.router.navigate(['not-found']);

    return this.router.navigate(['/video/', details.videoId], { queryParams: details });
  }
  
  
}
