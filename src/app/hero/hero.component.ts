import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  Heroes: string[];

  constructor() { }

  ngOnInit() {
  }
  
  add(name: string): void {
    this.Heroes.push(name);
  }

  delete(deleteHero: string): void {
    this.Heroes = this.Heroes.filter(hero => {
        return hero !== deleteHero;
    });
  }

  getHeroes()
  {
    return this.Heroes;
  }  

}
