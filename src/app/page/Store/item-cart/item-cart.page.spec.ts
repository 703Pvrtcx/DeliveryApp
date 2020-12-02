import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemCartPage } from './item-cart.page';

describe('ItemCartPage', () => {
  let component: ItemCartPage;
  let fixture: ComponentFixture<ItemCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
