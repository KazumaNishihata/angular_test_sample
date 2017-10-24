

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Test01Component } from './test01.component';
import { Test01Service } from '../../service/test01.service';

// テスト
xdescribe('Test01Component', () => {
  let component: Test01Component;
  let service: Test01Service;

  let fixture: ComponentFixture<Test01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('基本テスト1', () => {
    expect(3).toEqual(1 + 2);
  });

  it('基本テスト2', () => {
    expect(3).not.toEqual(1 + 4);
  });
});
