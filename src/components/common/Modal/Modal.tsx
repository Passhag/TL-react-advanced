import * as React from 'react';
import { Modal } from '../../../services/modal';

interface Props {
  ModalContent: React.ComponentClass<any> | React.SFC<any>;
  isOpen: boolean;
}

class ModalComponent extends React.Component<Props, {}> {
  private _modalRef: HTMLDivElement;
  private _modal: any;

  constructor(props: Props) {
    super(props);
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.props.isOpen) {
      this._modal.show();
    } else {
      this._modal.hide();
    }
  }

  componentDidMount(): void {
    this._modal = new Modal(this._modalRef);
  }

  render(): JSX.Element {
    const {
      ModalContent,
    } = this.props;

    return (
      <div
        className="modal fade"
        role="dialog"
        ref={(modal: HTMLDivElement) => { this._modalRef = modal; }}
      >
        <div className="modal-dialog" role="document">
          <ModalContent />
        </div>
      </div>
    );
  }
}

export default ModalComponent;
