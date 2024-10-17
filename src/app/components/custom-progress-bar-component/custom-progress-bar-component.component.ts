import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-progress-bar-component',
  templateUrl: './custom-progress-bar-component.component.html',
  styleUrl: './custom-progress-bar-component.component.css'
})
export class CustomProgressBarComponentComponent {
  @Input({required: true}) value=75;
  @Input({required: true}) type="danger";
}
