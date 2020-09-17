import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PushproPage } from './pushpro.page';

describe('PushproPage', () => {
  let component: PushproPage;
  let fixture: ComponentFixture<PushproPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushproPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PushproPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
