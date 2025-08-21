import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacamentoEAlinhamentoComponent } from './espacamento-e-alinhamento.component';

describe('EspacamentoEAlinhamentoComponent', () => {
  let component: EspacamentoEAlinhamentoComponent;
  let fixture: ComponentFixture<EspacamentoEAlinhamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspacamentoEAlinhamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspacamentoEAlinhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
