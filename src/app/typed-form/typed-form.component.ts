import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@ngsantha/strongly-typed-forms';

@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html',
  styleUrls: ['./typed-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypedFormComponent {

  readonly emailField = new FormControl<string>();
  readonly formGroup = new FormGroup<{ foo: string }>({ foo: new FormControl<string>() });
}
