import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { Observable } from 'rxjs';
import { WidgetsService } from 'libs/core-data/src/lib/services/widgets/widgets.service';

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  widgets$: Observable<Widget[]>;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets(): void {
    this.widgets$ = this.widgetsService.all();
  }
}
