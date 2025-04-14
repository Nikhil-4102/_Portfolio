import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutComponent, ProjectsComponent],
  template: '<router-outlet></router-outlet>',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
