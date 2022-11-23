import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { VideoDetails } from 'src/app/types/clickable-item';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubePlayerComponent implements OnChanges {

  @Input() videoDetails!: VideoDetails;

  playerVars!: YT.PlayerVars;

  constructor(
    private readonly navigationService: NavigationService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.playerVars = {
      autoplay: 1,
      start: this.videoDetails.startTime as number,
      end: this.videoDetails.endTime as number,
    };

    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  async onReady(readyEvent: YT.PlayerEvent) {
    if (this.videoDetails.videoId === 'test') return;
    
    try {
      await readyEvent?.target?.getIframe()?.requestFullscreen();
    } catch {
      
    }
  }

  onPlayerStateChange(event: YT.OnStateChangeEvent) {
    if (event.data === 0)
      this.navigationService.gotoAnimalsPage();
  }

  onApiChange(event: any) {
  }

}
