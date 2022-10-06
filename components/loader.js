(async () => {
  async function loadComponent(componentName) {
    const componentScript = await import(
      `./${componentName}/${componentName}.js`
    );
    const response = await fetch(
      `./components/${componentName}/${componentName}.html`
    );
    const text = await response.text();
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(text, 'text/html');
    const [template] = parsedDocument.getElementsByTagName('template');

    class CustomComponent extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
        componentScript.default(this.shadowRoot, this.dataset);
      }
    }
    customElements.define(componentName, CustomComponent);
  }

  await loadComponent('video-player');
  await loadComponent('my-projects');
  await loadComponent('about-me');
})();
