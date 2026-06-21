import { Component } from '@angular/core';
import { Portfolio } from './pages/portfolio/portfolio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Portfolio],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}