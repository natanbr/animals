import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { animals } from '../../models/animals';
import { normalizeData } from '../../utils';

const ITEMS_PER_PAGE = 12;

@Component({
  selector: 'app-animals-view',
  templateUrl: './animals-view.component.html',
  styleUrls: ['./animals-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalsViewComponent implements OnInit {

  animalIds = Array.from(animals.keys());
  totalPages: number;
  page = 0;
  readonly displayList$ = new BehaviorSubject<Array<string>>([]);

  constructor(
    private readonly navigationService: NavigationService) {
      this.totalPages = Math.ceil((this.animalIds.length)/ITEMS_PER_PAGE);
  }

  ngOnInit(): void {
    this.displayList$.next(this.animalIds.slice(0, ITEMS_PER_PAGE));
  }

  async startVideo(id: string): Promise<void> {
    const data = animals.get(id);
    if (data) {
      const randomVideoIndex = Math.floor(Math.random() * data.length);
      const video = data[randomVideoIndex];
      this.navigationService.gotoVideo(video);
    }
  }

  imageUrl(id: string): string {
    return `${id.toLowerCase()}.png` || '';
  }

  nextPage(): void {
    if (this.page >= (this.totalPages - 1)) return;
    this.page++;
    this.displayPage();
  }

  prevPage(): void {
    if (this.page <= 0) return;

    this.page--;
    this.displayPage();
  }

  private displayPage(): void {
    const start = this.page * ITEMS_PER_PAGE;
    this.displayList$.next(this.animalIds.slice(start , start + ITEMS_PER_PAGE));
  }
}

