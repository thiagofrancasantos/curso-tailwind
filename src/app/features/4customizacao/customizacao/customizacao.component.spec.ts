import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizacaoComponent } from './customizacao.component';

describe('CustomizacaoComponent', () => {
  let component: CustomizacaoComponent;
  let fixture: ComponentFixture<CustomizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
