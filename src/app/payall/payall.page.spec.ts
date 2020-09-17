import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayallPage } from './payall.page';

describe('PayallPage', () => {
  let component: PayallPage;
  let fixture: ComponentFixture<PayallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
