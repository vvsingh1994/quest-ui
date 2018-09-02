import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestLoginMainComponent } from './quest-login-main.component';

describe('QuestLoginMainComponent', () => {
  let component: QuestLoginMainComponent;
  let fixture: ComponentFixture<QuestLoginMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestLoginMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestLoginMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
