import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { PlayerVars } from 'src/app/types/active-video';
import { VideoDetails } from 'src/app/types/clickable-item';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoViewComponent implements OnInit {

  videoDetails$!: Observable<VideoDetails>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly navigationService: NavigationService,
    ) { }

  ngOnInit(): void {
    this.videoDetails$ = this.route.queryParams.pipe(
      map(params => params as VideoDetails)
    );
  }

  back(): void {
    this.navigationService.gotoAnimalsPage();
  }
}
