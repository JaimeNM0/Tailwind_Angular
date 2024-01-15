import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OptionsButtonComponent } from './options-button/options-button.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ElementFormComponent } from './element-form/element-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OptionsButtonComponent, LoginFormComponent, ElementFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwindPrueba';
}
