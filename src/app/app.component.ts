import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxDcNavbarModule } from "@devcrate/ngx-dc-navbar"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgxDcNavbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
