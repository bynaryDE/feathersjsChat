import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlContainer, FormControl, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  host: {
    class: 'app-input'
  },
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }]
})
export class InputComponent implements OnInit {
  @Input() data;
  errors;
  name: string;
  formControl;
  type;
  label: string;
  constructor() { }

  ngOnInit(): void {
    const {formControl, name, type, label, errors}  = this.data;
    this.name = name;
    this.type = type;
    this.label = label;
    this.formControl = formControl;
    this.errors = errors;
  }
  isErrorState(control: FormControl): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
