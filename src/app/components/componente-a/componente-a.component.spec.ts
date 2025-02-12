import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAComponent } from './componente-a.component';

describe('ComponenteAComponent', () => {
  let component: ComponenteAComponent;
  let fixture: ComponentFixture<ComponenteAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
