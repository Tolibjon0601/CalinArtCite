import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login2',
  imports: [FormsModule, CommonModule, MatIconModule,RouterModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss'
})
export class Login2Component {
  email = '';
  password = '';
  name='';
  surname='';
number='';
  rememberMe = false;
  showPassword = false;
}
