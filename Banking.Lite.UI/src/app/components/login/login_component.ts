import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lt-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./login_component.html",
  styleUrls: ["./login_component.css"]
})

export class LogInComponent { 

  constructor() {
  }
}