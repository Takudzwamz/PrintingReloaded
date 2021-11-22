import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //title = 'Tashe Bakery';

  constructor(
    private basketService: BasketService,
    private accountService: AccountService,
    private metaTagService: Meta
  ) {}

  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();

    this.metaTagService.addTags([
      {
        name: 'keywords',
        content:
          // tslint:disable-next-line: max-line-length
          '3D Printing, 3D, Manufacturing, Printing, Action figures, Flower vases, Lighting fixtures, Wall art, Wall Decoration, Custom gifts',
      },
      { name: 'robots', content: 'index, follow' },

      {
        name: 'description',
        content:
          // tslint:disable-next-line: max-line-length
          'Lets change the world with 3D printing, With 3D printing we can achieve more.',
      },
      { name: 'author', content: '3D Printing Studio' },
      { name: 'twitter:card', content: '3D Printing Studio' },
      {
        name: 'twitter:title',
        content: '3D Printing Studio',
      },
      {
        name: 'twitter:description',
        content:
          // tslint:disable-next-line: max-line-length
          'Lets change the world with 3D printing, With 3D printing we can achieve more.',
      },
    ]);
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe(
      () => {
        console.log('loaded user');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(
        () => {
          console.log('initialised basket');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
