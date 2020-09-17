import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetPage } from './get.page';

describe('GetPage', () => {
  let component: GetPage;
  let fixture: ComponentFixture<GetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
