import {
  Component,
  Directive,
  HostBinding,
  Input,
  ViewEncapsulation,
  OnInit,
  ElementRef,
  Renderer2
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'cm-row',
  template: `<ng-content></ng-content>`
})
export class RowComponent {
  @HostBinding('class') className: string = 'row';
  @HostBinding('style.display') display: string = 'flex';
  @HostBinding('style.margin-top') marginTop: string = '5px';
  @HostBinding('style.margin-bottom') marginBottom: string = '5px';
}

@Component({
  selector: 'cm-container',
  template: `<ng-content></ng-content>`
})
export class ContainerComponent {
  @HostBinding('class') className: string = 'container';
  @HostBinding('style.display') display: string = 'block';
}

type col = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '';

const colSizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

@Component({
  selector: 'cm-col',
  template: `<ng-content></ng-content>`
})
export class ColComponent implements OnInit {
  @Input() xs: col;

  @Input() sm: col;

  @Input() md: col;

  @Input() lg: col;

  @HostBinding('style.display') display = 'block';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.addClass(this.xs, 'col-xs');
    this.addClass(this.sm, 'col-sm');
    this.addClass(this.md, 'col-md');
    this.addClass(this.lg, 'col-lg');
  }

  private addClass(col: col, prefix: string): void {
    if (col && colSizes.some(item => item === col)) {
      this.renderer.addClass(this.elementRef.nativeElement, `${prefix}-${col}`);
    } else if (coerceBooleanProperty(col)) {
      this.renderer.addClass(this.elementRef.nativeElement, `${prefix}`);
    }
  }
}
