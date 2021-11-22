import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CanonicalService } from '../services/canonical.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
  constructor(
    config: NgbCarouselConfig,
    private title: Title,
    private canonicalService: CanonicalService
  ) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 8000; // images change in 8sec //
    config.wrap = true; // autometically redirect to first image //
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  showNavigationArrows = false;
  showNavigationIndicators = false;
  public images = [
    'https://res.cloudinary.com/dyzeuqi75/image/upload/v1637598697/9_mnwzhr.jpg',

    'https://res.cloudinary.com/dyzeuqi75/image/upload/v1637598619/7_q2iw21.jpg',

    'https://res.cloudinary.com/dyzeuqi75/image/upload/v1637598651/4_k6bmgf.jpg',

    'https://res.cloudinary.com/dyzeuqi75/image/upload/v1637598898/BURST20210817112306161_COVER_ziogpa.jpg',
  ];
  titles = [
    'Wall art',
    'Flower vases',
    'Lighting fixtures',
    'Action figures',
  ];
  discription = [
    // tslint:disable-next-line: max-line-length
    '',
    '',
    '',
    // tslint:disable-next-line: max-line-length
    '',
  ];

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.title.setTitle('3D Printing Studio');
  }
}
