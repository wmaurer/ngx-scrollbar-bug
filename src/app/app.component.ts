import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
    selector: 'app-root',
    imports: [CommonModule, NgScrollbarModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-scrollbar-bug';
}
