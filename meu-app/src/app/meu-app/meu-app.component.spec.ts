import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuAppComponent } from './meu-app.component';

describe('MeuAppComponent', () => {
  let component: MeuAppComponent;
  let fixture: ComponentFixture<MeuAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
