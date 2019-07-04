import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarLinguagensComponent } from './adicionar-linguagens.component';

describe('AdicionarLinguagensComponent', () => {
  let component: AdicionarLinguagensComponent;
  let fixture: ComponentFixture<AdicionarLinguagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarLinguagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarLinguagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
