import * as React from 'react';

interface TextFieldProps {
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  autoComplete?: 'on' | 'off';
  placeholder?: string;
  name: string;
}

export default class TextFieldComponent
  extends React.Component<TextFieldProps, {}> {
  public static defaultProps: Partial<TextFieldProps> = {
    autoFocus: true,
    autoComplete: 'off',
    placeholder: '',
  };

  constructor(props: TextFieldProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <input
        className="form-control"
        type="text"
        {...this.props}
      />
    );
  }
}
