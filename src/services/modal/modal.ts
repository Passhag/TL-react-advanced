export interface Modal {
  show(): void;
  hide(): void;
}

export interface ModalContructor {
  new (element: HTMLElement): Modal;
}
