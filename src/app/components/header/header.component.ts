import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[FlexLayoutModule ,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  view: any = 'home';

    handleView(view:any){
      this.view = view;
    }
}
