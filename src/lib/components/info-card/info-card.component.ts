import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'thesis-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() title: string;
  @Input() info: string;
  @Input() actionLabel?: string;
  @Output() action = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
