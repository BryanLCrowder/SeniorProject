/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FriendListsComponent } from './friend-lists.component';

describe('FriendListsComponent', () => {
  let component: FriendListsComponent;
  let fixture: ComponentFixture<FriendListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
