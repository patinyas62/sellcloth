import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetsendPage } from './getsend.page';

describe('GetsendPage', () => {
  let component: GetsendPage;
  let fixture: ComponentFixture<GetsendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetsendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetsendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
