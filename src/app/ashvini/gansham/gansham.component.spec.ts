import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanshamComponent } from './gansham.component';

describe('GanshamComponent', () => {
  let component: GanshamComponent;
  let fixture: ComponentFixture<GanshamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanshamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanshamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
