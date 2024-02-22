import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSectionSidebarComponent } from './edit-section-sidebar.component';

describe('EditSectionSidebarComponent', () => {
  let component: EditSectionSidebarComponent;
  let fixture: ComponentFixture<EditSectionSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSectionSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSectionSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
