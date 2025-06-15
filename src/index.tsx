import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
import App from './App';
import './styles.less';

class MyCustomComponent extends HTMLElement {
  private shadow: ShadowRoot;
  private mountPoint: HTMLDivElement;

  constructor() {
    super();
    // Create shadow DOM
    this.shadow = this.attachShadow({ mode: 'open' });
    
    // Create mount point for React
    this.mountPoint = document.createElement('div');
    this.mountPoint.id = 'my-custom-component-root';
    this.shadow.appendChild(this.mountPoint);

    // Create style element for shadow DOM
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        contain: content;
      }
      #my-custom-component-root {
        width: 100%;
        height: 100%;
      }
    `;
    this.shadow.appendChild(style);
  }

  connectedCallback() {
    // Mount React app when the custom element is added to the DOM
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
      this.mountPoint
    );
  }

  disconnectedCallback() {
    // Clean up React app when the custom element is removed from the DOM
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }

  // Optional: Add attribute change handling
  static get observedAttributes() {
    return ['theme', 'data-config'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // Handle attribute changes if needed
    if (name === 'theme') {
      this.mountPoint.setAttribute('data-theme', newValue);
    }
  }
}

// Register the custom element
if (!customElements.get('my-custom-component')) {
  customElements.define('my-custom-component', MyCustomComponent);
}

// Export the custom element class for potential programmatic usage
export default MyCustomComponent; 