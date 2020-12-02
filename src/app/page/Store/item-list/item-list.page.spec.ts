import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemListPage } from './item-list.page';

describe('ItemListPage', () => {
  let component: ItemListPage;
  let fixture: ComponentFixture<ItemListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
