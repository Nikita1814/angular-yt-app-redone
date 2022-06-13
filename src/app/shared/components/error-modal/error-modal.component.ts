import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SearchItemFacadeService } from 'src/app/redux/search-item-reducer/search-item-facade.service';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit {
  @Input() error!: HttpErrorResponse
  /*@Input() confirmFunction!: () => void
  @Input() closingFunction!: () => void*/
  constructor(public searchItemFacade: SearchItemFacadeService) { }

  ngOnInit(): void {
  }
  removeError() {
    this.searchItemFacade.clearError()
  }
}
