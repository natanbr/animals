import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { animals } from '../../models/animals';
import { normalizeData } from '../../utils';

@Component({
  selector: 'app-animals-view',
  templateUrl: './animals-view.component.html',
  styleUrls: ['./animals-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalsViewComponent implements OnInit {

  animalIds = animals.keys();

  constructor(
    private readonly navigationService: NavigationService) {
  }

  ngOnInit(): void {
  }

  async startVideo(id: string): Promise<void> {
    const data = animals.get(id);
    if (data) {
      const randomVideoIndex = Math.floor(Math.random() * data.length);
      const video = data[randomVideoIndex];
      this.navigationService.gotoVideo(video);
    }
  }

  test(): void {
    this.navigationService.gotoVideo({ videoId: 'test', startTime: 0, endTime: 0 });
  }

  imageUrl(id: string): string {
    return `${id.toLowerCase()}.png` || '';
  }
}

