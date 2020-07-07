import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";
import {buffer, debounceTime, filter, map, mapTo} from "rxjs/operators";


@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit, OnDestroy {

  @Input() type: 'primary' | 'secondary' = 'primary';

  @Output() doubleClicked = new EventEmitter<Date>();

  clicks$ = new Subject();

  doubleClick$ = this.clicks$
    .pipe(
      buffer(this.clicks$.pipe(debounceTime(250))),
      map(clicks => clicks.length),
      filter(clicksLength => clicksLength >= 2)
    );

  constructor() { }

  ngOnInit(): void {
    this.doubleClick$.subscribe(() => this.doubleClicked.emit(new Date()));
  }

  ngOnDestroy(): void {
    this.doubleClick$.subscribe();
  }

  onClick() {
    this.clicks$.next();
  }

}
