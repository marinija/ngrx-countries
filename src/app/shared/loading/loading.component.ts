import { Component } from '@angular/core';

@Component({
  selector: 'loading',
  template: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
  styleUrl: 'loading.component.scss',
  standalone: true,
})
export class LoadingComponent {
}
