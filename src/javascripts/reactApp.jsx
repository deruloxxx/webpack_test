import ReactDom from 'react-dom';
import * as React from 'react';

import Alert from './alert.tsx'

const App = (props) => {
  return(
    <div style={{ color: '#000' }}>
      Hello ReactApp!
      <Alert message="success"></Alert>
    </div>
  );
};

const reactRoot = document.getElementById('react-root');
if(reactRoot) {
  ReactDom.render(<App />, reactRoot);
} else {
  console.log('No root element found');
}
