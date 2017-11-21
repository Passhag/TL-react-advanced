import * as React from 'react';

interface TextFieldProps {
  onFocus?: Function;
  onBlur?: Function;
  autoFocus?: boolean;
  autoComplete?: 'on' | 'off';
  placeholder?: string;
  name: string;
  label: string;
}

interface TextFieldState {
  isFocused?: boolean;
}

export default class TextFieldComponent
  extends React.Component<TextFieldProps, TextFieldState> {
  public static defaultProps: Partial<TextFieldProps> = {
    autoFocus: true,
    autoComplete: 'off',
    placeholder: '',
  };

  constructor(props: TextFieldProps) {
    super(props);

    this.state = {
      isFocused: false,
    };

    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  public render(): JSX.Element {
    const {
      label,
      name,
      autoFocus,
      autoComplete,
      placeholder,
      onBlur,
      onFocus,
    } = this.props;

    return (
      <div className={`tl-text-field-wrapper ${this.state.isFocused && 'active'}`}>
        <label className="tl-text-field-label" htmlFor={name}>
          {label}
        </label>
        <input
          className="tl-text-field-input"
          type="text"
          name={name}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          placeholder={placeholder}
          onFocus={() => { onFocus ? (onFocus(), this._onFocus()) : this._onFocus(); }}
          onBlur={() => { onBlur ? (onBlur(), this._onBlur()) : this._onBlur(); }}
        />
        <span className="tl-text-field-separator" />
      </div>
    );
  }

  private _onFocus(): void {
    this.setState({
      isFocused: true,
    });
  }

  private _onBlur(): void {
    this.setState({
      isFocused: false,
    });
  }
}
