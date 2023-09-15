import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardformComponent } from './creditcardform.component';

describe('CreditcardformComponent', () => {
  let component: CreditcardformComponent;
  let fixture: ComponentFixture<CreditcardformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditcardformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditcardformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
