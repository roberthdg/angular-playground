// import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero'
// import { HEROES } from '../mock.heroes';
// import { HeroService } from '../hero.service';

// @Component({
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.css']
// })
// export class HeroesComponent implements OnInit {
//   hero: Hero = {
//     id: 1,
//     name: 'Stone cold'
//   }

//   // heroes = HEROES;

//   heroes: Hero[];

//   selectedHero: Hero;

//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }

//   // getHeroes(): void {
//   //   this.heroes = this.heroService.getHeroes();
//   // }

//   getHeroes(): void {
//     this.heroService.getHeroes()
//         .subscribe(heroes => this.heroes = heroes);
//   }

//   ngOnInit(): void {
//     console.log(HeroService)
//     this.getHeroes();
//   }

//   constructor(private heroService: HeroService) { }

// }

import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
