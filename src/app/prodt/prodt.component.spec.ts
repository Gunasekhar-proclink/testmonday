import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdtComponent } from './prodt.component';

describe('ProdtComponent', () => {
  let component: ProdtComponent;
  let fixture: ComponentFixture<ProdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
