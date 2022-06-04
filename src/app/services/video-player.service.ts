import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {

  private _video$ = new Subject<string>();

  constructor() { }
}
