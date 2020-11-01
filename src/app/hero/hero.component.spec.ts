
import { HeroComponent } from "./hero.component";
import { of } from "rxjs";

describe('HeroComponent', () => {
  let component: HeroComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      'SpiderDude',
      'Wonderful Woman',
      'SuperDude'
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

    component = new HeroComponent();
  })


    it('should remove the indicated hero from the heroes list', () => {
      mockHeroService.addHero.and.returnValue(of(true))
      component.Heroes = HEROES;

      component.add('SpiderMan');

      expect(component.Heroes.length).toBe(4);
    })

    it('should call deleteHero', () => {
      mockHeroService.deleteHero.and.returnValue(of(true))
      component.Heroes = HEROES;
      
      component.delete(HEROES[2]);

      expect(mockHeroService.deleteHero).not.toHaveBeenCalledWith(HEROES[2]);
    })
})