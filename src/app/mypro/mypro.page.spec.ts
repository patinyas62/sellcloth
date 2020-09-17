import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyproPage } from './mypro.page';

describe('MyproPage', () => {
  let component: MyproPage;
  let fixture: ComponentFixture<MyproPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyproPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyproPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
