import * as React from 'react';
import { Modal } from '../../../services/modal';

interface Props {
  Content: React.ComponentClass<any> | React.SFC<any> | null;
  isOpen: boolean;
  title?: string;
  saveBtnTitle?: string;
  cancelBtnTitle?: string;
  onSave?: () => void;
  onCancel?: (e: any) => void;
}

class ModalComponent extends React.Component<Props, {}> {
  private _modalRef: HTMLDivElement;
  private _modal: any;

  constructor(props: Props) {
    super(props);
    
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.props.isOpen) {
      console.log(1);
      this._modal.show();
    } else {
      console.log(2);
      this._modal.hide();
    }
  }

  componentDidMount(): void {
    this._modal = new Modal(this._modalRef);
  }

  render(): JSX.Element {
    const {
      Content,
      title,
      saveBtnTitle,
      cancelBtnTitle,
      onSave,
      onCancel,
    } = this.props;
    return (
      <div 
        className="modal fade"
        role="dialog"
        ref={(modal: HTMLDivElement) => { this._modalRef = modal; }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {title || 'Modal title'}
              </h5>
              <button type="button" className="close" onClick={onCancel}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {Content && <Content />}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={onSave}>
                {saveBtnTitle || 'Save changes'}
              </button>
              <button type="button" className="btn btn-secondary" onClick={onCancel}>
                {cancelBtnTitle || 'Close'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalComponent;
