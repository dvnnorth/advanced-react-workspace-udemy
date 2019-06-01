import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a CommentBox', () => {
  // The document object being referenced here, the 'DOM', is the JSDOM library
  // JSDOM creates a virtual dom for our testing environment.
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);
  // Now that we've rendered our component, we can probe it

  expect(div.innerHTML).toContain('CommentBox');

  // You need to run clean-up after tests. Destroy leftover components, or
  // performance could suffer
  ReactDOM.unmountComponentAtNode(div);
});
