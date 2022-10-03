(async () => {
  async function loadComponent(componentName) {
    const response = await fetch(`./${componentName}.html`);
    const text = await response.text();
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(text, 'text/html');
    const [template] = parsedDocument.getElementsByTagName('template');

    class CustomComponent extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
      }
    }
    customElements.define(componentName, CustomComponent);

    const componentScript = await import(`./${componentName}.js`);
    const [component] = document.getElementsByTagName(componentName);
    componentScript.default(component.shadowRoot);
  }

  await loadComponent('my-component');
})();
