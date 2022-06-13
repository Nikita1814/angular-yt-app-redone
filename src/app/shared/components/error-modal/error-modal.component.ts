import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit {
  @Input() !error: HttpErrorResponse
  @Input() !confirmFunction: () => void
  @Input() !closingFUnction: () => void
  constructor() { }

  ngOnInit(): void {
  }

}
