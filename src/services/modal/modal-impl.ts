import { Modal } from './modal';
import {
  forceReflow,
} from './utils';
import {
  EventKeys,
  // KeyboardEventKeys,
  BootstrapClassNames,
  TransitionDuration,
} from './constants';

class ModalImpl implements Modal {
  private _isShown: boolean = false;
  private _modalElem: HTMLElement | null;
  private _backdropElem: HTMLElement | null;

  constructor(modalElem: HTMLElement) {
    this._modalElem = modalElem;
  }

  public show(): void {
    if (this._isShown) {
      return;
    }

    const modalElem = this._modalElem as HTMLElement;
    const showEvent = new Event(EventKeys.SHOW);
    modalElem.dispatchEvent(showEvent);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;
    this._showBackdropElem()
      .then(() => this._showModalElem());
  }

  public hide(): void {
    if (!this._isShown) {
      return;
    }

    const modalElem = this._modalElem as HTMLElement;
    const isAnimate = this._isAnimate();
    const hideEvent = new Event(EventKeys.HIDE);
    modalElem.dispatchEvent(hideEvent);

    if (hideEvent.defaultPrevented) {
      return;
    }

    modalElem.classList.remove(BootstrapClassNames.SHOW);
    this._isShown = false;

    if (isAnimate) {
      setTimeout(() => {
        this._hideModalElem();
        this._removeBackdropElem();
      }, TransitionDuration.MODAL_DIALOG);
    } else {
      this._hideModalElem();
      this._removeBackdropElem();
    }
  }

  private _hideModalElem(): void {
    (this._modalElem as HTMLElement).style.display = 'none';
  }

  private _showModalElem(): void {
    const modalElem = this._modalElem as HTMLElement;
    const isAnimate = this._isAnimate();
    const shownEvent = new Event(EventKeys.SHOWN);

    modalElem.style.display = 'block';
    modalElem.scrollTop = 0;

    if (isAnimate) {
      forceReflow(modalElem);
    }

    modalElem.classList.add(BootstrapClassNames.SHOW);

    if (isAnimate) {
      setTimeout(() => {
        modalElem.dispatchEvent(shownEvent);
      }, TransitionDuration.MODAL_DIALOG);
    } else {
      modalElem.dispatchEvent(shownEvent);
    }
  }

  private _removeBackdropElem(): void {
    document.body.removeChild(this._backdropElem as HTMLElement);
    this._backdropElem = null;
  }

  private _showBackdropElem(): Promise<void> {
    const isAnimate = this._isAnimate();
    let promise: Promise<void> = Promise.resolve();

    this._backdropElem = document.createElement('div');
    this._backdropElem.classList.add(BootstrapClassNames.BACKDROP);

    if (isAnimate) {
      this._backdropElem.classList.add(BootstrapClassNames.FADE);
    }

    document.body.appendChild(this._backdropElem);

    if (isAnimate) {
      forceReflow(this._backdropElem);
      promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(), TransitionDuration.BACKDROP);
      });
    }

    this._backdropElem.classList.add(BootstrapClassNames.SHOW);

    return promise;
  }

  private _isAnimate(): boolean {
    return (this._modalElem as HTMLElement).classList
      .contains(BootstrapClassNames.FADE);
  }
}

export default ModalImpl;
