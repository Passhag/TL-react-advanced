import { EventKeys } from './constants';

const forceReflow = (element: HTMLElement) => element.offsetHeight;

const emulateTransitionEnd = function(duration: number) {
  if (typeof this === 'undefined') {
    throw new ReferenceError('this is undefined.n\
     Please provide a context when call the function');
  } else if (!(this instanceof HTMLElement)) {
    throw new TypeError('this is not an HTMLElement instance.');
  }
  const context = this as HTMLElement;

  setTimeout(() => {
    context.dispatchEvent(new Event(EventKeys.TRANSITION_END, {
      bubbles: true,
      cancelable: true,
    }));
  }, duration);
};

export {
  forceReflow,
  emulateTransitionEnd,
};
