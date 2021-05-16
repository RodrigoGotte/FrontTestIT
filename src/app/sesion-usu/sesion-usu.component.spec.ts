import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionUsuComponent } from './sesion-usu.component';

describe('SesionUsuComponent', () => {
  let component: SesionUsuComponent;
  let fixture: ComponentFixture<SesionUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
