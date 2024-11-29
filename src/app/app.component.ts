import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  ViewChild,
} from '@angular/core';
import { NgScrollbarModule, NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgScrollbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private cdr = inject(ChangeDetectorRef);
  @ViewChild(NgScrollbar) private scrollbar?: NgScrollbar;

  ngOnInit() {
    setTimeout(() => {
      if (this.scrollbar) {
        this.scrollbar.update();
        this.cdr.detectChanges();
      }
    }, 0);
  }
}
