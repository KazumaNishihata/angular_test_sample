//  デフォルトのテスト
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { Test02Component } from './test02.component';

// describe('Test02Component', () => {
//   let component: Test02Component;
//   let fixture: ComponentFixture<Test02Component>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ Test02Component ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(Test02Component);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Test02Component } from './test02.component';

describe('Test02Component', () => {
  let debugElement: DebugElement;
  let component: Test02Component;
  let fixture: ComponentFixture<Test02Component>;

  beforeEach(() => {

    // テストモジュールの準備
    TestBed.configureTestingModule({
      declarations: [Test02Component]
    });

    // コンポーネントのインスタンス化
    fixture = TestBed.createComponent(Test02Component);
    component = fixture.componentInstance;
    // テストの対象要素を取得
    debugElement = fixture.debugElement.query(By.css('h1'))



  });

  it( '<h1>要素のテキスト確認</h1>' , () => {
    fixture.detectChanges();
    const h1 = debugElement.nativeElement;
    expect(h1.innerText).toMatch(/angular/i);
  });

  it( 'nameプロパティの変化' , () => {
    component.name = 'JavaScript';
    fixture.detectChanges();
    const h1 = debugElement.nativeElement;
    expect(h1.innerText).toMatch(/JavaScript/i);

  });
});
