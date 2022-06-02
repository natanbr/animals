import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubePlayerComponent implements OnInit {

  @Input() videoId: string = '';

  playerVars: YT.PlayerVars = {
    autoplay: 1,
  };

  ngOnInit() {
    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  onPlayerStateChange(event: YT.OnStateChangeEvent) {
    console.log('❓ - + -  event - ', event);
  }

}
