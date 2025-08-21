import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordasComponent } from './bordas.component';

describe('BordasComponent', () => {
  let component: BordasComponent;
  let fixture: ComponentFixture<BordasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BordasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BordasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
