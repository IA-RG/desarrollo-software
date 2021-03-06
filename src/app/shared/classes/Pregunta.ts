export class Pregunta<T> {
  private _value: T | undefined;
  private _key: string;
  private _label: string;
  private _required: boolean;
  private _order: number;
  private _controlType: string;
  private _type: string;
  private _disabled: boolean;
  private _min : number;
  private _max : number;
  private _step : number;
  private _options: { key: string; value: string }[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      disabled?: boolean;
      minimo?: number;
      maximo?: number;
      step?: number;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this._value = options.value;
    this._key = options.key || '';
    this._label = options.label || '';
    this._required = !!options.required;
    this._order = options.order === undefined ? 1 : options.order;
    this._controlType = options.controlType || '';
    this._type = options.type || '';
    this._disabled = options.disabled || false;
    this._min = options.minimo || 0;
    this._max = options.maximo || 0;
    this._step = options.step || 0;
    this._options = options.options || [];
  }

  public get options(): { key: string; value: string }[] {
    return this._options;
  }

  public get disabled(): boolean {
    return this._disabled;
  }

  public get type(): string {
    return this._type;
  }

  public get controlType(): string {
    return this._controlType;
  }

  public get order(): number {
    return this._order;
  }

  public get value() {
    return this._value;
  }

  public get key(): string {
    return this._key;
  }

  public get label(): string {
    return this._label;
  }

  public get required(): boolean {
    return this._required;
  }
  
  public get minimo() : number {
    return this._min;
  }
  
  public get maximo() : number {
    return this._max;
  }
  
  public get step() : number {
    return this._step;
  }
  
  
}
