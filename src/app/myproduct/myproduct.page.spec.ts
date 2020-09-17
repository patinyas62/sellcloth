import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyproductPage } from './myproduct.page';

describe('MyproductPage', () => {
  let component: MyproductPage;
  let fixture: ComponentFixture<MyproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyproductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
