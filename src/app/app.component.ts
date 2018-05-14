import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onDragStart(): void {
    console.log(`got drag start `);
  }

  onDragMove(event: PointerEvent): void {
    console.log(`got drag move ${event.clientX}, ${event.clientY}`);
  }

  onDragEnd(): void {
    console.log(`got drag end `);
  }
}
