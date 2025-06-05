import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  date = new Date()
  year = this.date.getFullYear()

  constructor(private router: Router){}

  navigateToLegal() {
    this.router.navigate(['/legal']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
