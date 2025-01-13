import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './ui/components/body/body.component';
import { FooterComponent } from './ui/components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PruebaTecnicaAngularC4';
}
