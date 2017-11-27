import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

export class BaseComponent { 

  protected _changeDetectorRef: ChangeDetectorRef;

  constructor(changeDetectorRef: ChangeDetectorRef) {
    this._changeDetectorRef = changeDetectorRef;
  }

  public markForCheck() {
    if (this._changeDetectorRef != undefined)
      this._changeDetectorRef.markForCheck();
  }
}