// import { TestBed, inject } from '@angular/core/testing';

import { Test01Service } from './test01.service';

describe('Test01Service', () => {

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [Test01Service]
  //   });
  // });

  // it('should be created', inject([Test01Service], (service: Test01Service) => {
  //   expect(service).toBeTruthy();
  // }));

  let service;

  beforeEach(() => {
    service = new Test01Service();
  });

  it('increment() should increase point', () => {
    service.increment(3);
    expect(service.count.getValue()).toBe(3);
  });

  it('increment() should increase point', () => {
    service.decrement(3);
    expect(service.count.getValue()).toBe(-3);
  });

});
