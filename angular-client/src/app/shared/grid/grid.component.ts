import {
  Component,
  Directive,
  HostBinding,
  Input,
  ViewEncapsulation,
  OnInit,
  ElementRef,
  Renderer2,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'cm-row',
  template: `<ng-content></ng-content>`
})
export class RowComponent {
  @HostBinding('class') className = 'row';
  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.margin-top') marginTop = '5px';
  @HostBinding('style.margin-bottom') marginBottom = '5px';
}

@Component({
  selector: 'cm-container',
  template: `<ng-content></ng-content>`
})
export class ContainerComponent {
  @HostBinding('class') className = 'container';
  @HostBinding('style.display') display = 'block';
}

type Col = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '';

const ColSizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

/**
 * Add flexbox grid col classes to an element.
 *
 * Usage:
 *  <cm-row>
 *    <input cmCol cmColXs="6" cmColSm="4" cmColMd="3" cmColLg="1" />
 *  </cm-row>
 */
@Directive({
  selector: '[cmCol]'
})
export class ColDirective implements OnChanges {
  @Input() cmColXs: Col = null;
  @Input() cmColSm: Col = null;
  @Input() cmColMd: Col = null;
  @Input() cmColLg: Col = null;

  constructor(private _renderer: Renderer2, private _el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    for (const change of Object.keys(changes)) {
      const { firstChange, previousValue, currentValue } = changes[change];
      if (firstChange) {
        this._renderer.addClass(this._el.nativeElement, `${this.getCol(change)}-${currentValue}`);
      } else if (previousValue !== null && currentValue == null) {
        this._renderer.removeClass(this._el.nativeElement, `${this.getCol(change)}-${previousValue}`);
      } else if (previousValue === null && currentValue !== null) {
        this._renderer.addClass(this._el.nativeElement, `${this.getCol(change)}-${currentValue}`);
      } else {
        this._renderer.removeClass(this._el.nativeElement, `${this.getCol(change)}-${previousValue}`);
        this._renderer.addClass(this._el.nativeElement, `${this.getCol(change)}-${currentValue}`);
      }
    }
  }

  private getCol(propChange: string) {
    switch (propChange) {
      case 'cmColXs':
        return 'col-xs';
      case 'cmColSm':
        return 'col-sm';
      case 'cmColMd':
        return 'col-md';
      case 'cmColLg':
        return 'col-lg';
    }
  }
}

@Component({
  selector: 'cm-col',
  template: `<ng-content></ng-content>`
})
export class ColComponent implements OnInit {
  @Input() xs: Col;

  @Input() sm: Col;

  @Input() md: Col;

  @Input() lg: Col;

  @HostBinding('style.display') display = 'block';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.addClass(this.xs, 'col-xs');
    this.addClass(this.sm, 'col-sm');
    this.addClass(this.md, 'col-md');
    this.addClass(this.lg, 'col-lg');
  }

  private addClass(col: Col, prefix: string): void {
    if (col && ColSizes.some(item => item === col)) {
      this.renderer.addClass(this.elementRef.nativeElement, `${prefix}-${col}`);
    } else if (coerceBooleanProperty(col)) {
      this.renderer.addClass(this.elementRef.nativeElement, `${prefix}`);
    }
  }
}
