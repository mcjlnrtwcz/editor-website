(async () => {
  async function loadComponent(componentName) {
    // TODO: Handle cases when sth can't be fetched

    // Fetch HTML template
    const templateResponse = await fetch(
      `./components/${componentName}/${componentName}.html`
    ).then((response) => response.text());
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(templateResponse, 'text/html');
    const [template] = parsedDocument.getElementsByTagName('template');

    // Fetch styles
    const stylesResponse = await fetch(`./components/${componentName}/${componentName}.css`).then(
      (response) => response.text()
    );
    const styleElement = document.createElement('style');
    styleElement.innerHTML = stylesResponse;

    // Fetch script
    const componentScript = await import(`./components/${componentName}/${componentName}.js`);

    // Install component
    class CustomComponent extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.append(template.content.cloneNode(true));
        shadowRoot.append(styleElement);
        componentScript.default(this.shadowRoot, this.dataset);
      }
    }
    customElements.define(componentName, CustomComponent);
  }

  const components = ['video-player', 'my-projects', 'about-me'];
  await Promise.all(components.map(loadComponent));
})();
