import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent implements OnInit, AfterViewInit {
  constructor() {}
  @ViewChild('clickBtn') clickBtn: ElementRef;
  ngOnInit() {}
  ngAfterViewInit() {
    let count = 0;
    const clicks = fromEvent(this.clickBtn.nativeElement, 'click');
    clicks.subscribe(x => {
      count++;
      this.addStream(count, 'container1');
    });
  }
  addStream(value, id) {
    let el = document.createElement('li');
    el.classList.add('list-group-item');
    el.innerText = value;
    document.getElementById(id).appendChild(el);
  }
}
