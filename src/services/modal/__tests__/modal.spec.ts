import Modal from '../modal-impl';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Services::Modal', () => {
  let dom;
  let doc;

  beforeEach(() => {
    dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
    doc = dom.window.document;
  });

  it('should define a modal', () => {
    const element = doc.createElement('div');
    element.classList.add('modal');

    const modal = new Modal(element);

    expect(modal).toBeDefined();
  });
});
