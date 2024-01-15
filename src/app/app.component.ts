import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OptionsButtonComponent } from './options-button/options-button.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ElementFormComponent } from './element-form/element-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OptionsButtonComponent, LoginFormComponent, ElementFormComponent, RegisterFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwindPrueba';
  sesionLogin: boolean = true;

  iniciarLogin(): void {
    this.sesionLogin = true;
  }

  iniciarRegister(): void {
    this.sesionLogin = false;
  }
}
