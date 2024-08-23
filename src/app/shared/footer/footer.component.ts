import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router){}

  navigateToLegal() {
    this.router.navigate(['/legal']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
