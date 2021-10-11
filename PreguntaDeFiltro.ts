import { Pregunta } from './Pregunta';

export class PreguntaCheckBox extends Pregunta<boolean> {
  constructor(
    options: {
      value?: boolean;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      disabled?: boolean;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    options.controlType = 'checkbox';
    super(options);
  }
}
