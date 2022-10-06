(async () => {
  async function loadComponent(componentName) {
    const componentScript = await import(
      `./${componentName}/${componentName}.js`
    );
    const response = await fetch(`./${componentName}/${componentName}.html`);
    const text = await response.text();
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(text, 'text/html');
    const [template] = parsedDocument.getElementsByTagName('template');

    class CustomComponent extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
        componentScript.default(shadowRoot, this.dataset);
      }
    }
    customElements.define(componentName, CustomComponent);
  }

  await loadComponent('about-me');
  await loadComponent('projects');
  await loadComponent('player');
})();
