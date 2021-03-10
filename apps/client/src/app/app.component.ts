import { Component, OnInit } from '@angular/core';

import { WidgetsService } from 'libs/core-data/src/lib/services/widgets/widgets.service';
import { Observable } from 'rxjs';
import { Widget } from '@fem/api-interfaces';

@Component({
  selector: 'fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  widgets$: Observable<Widget[]>

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    this.widgets$ = this.widgetsService.all();
  }
}
