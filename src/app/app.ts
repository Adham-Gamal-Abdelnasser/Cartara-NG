import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotfoundComponent } from "./shared/components/notfound/notfound.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotfoundComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cartara');
}
