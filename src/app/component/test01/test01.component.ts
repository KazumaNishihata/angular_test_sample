import { Component, OnInit } from '@angular/core';
import { Test01Service } from '../../service/test01.service';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.css']
})
export class Test01Component implements OnInit {

 public count: number;

  constructor(
    private test01Service: Test01Service
  ) {}

  ngOnInit() {
    this.test01Service.count.subscribe((v) => this.count = v);
  }
  increment() {
    this.test01Service.increment(3);
  }

  decrement() {
    this.test01Service.decrement(2);
  }
}
