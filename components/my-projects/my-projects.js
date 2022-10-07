export default function ({ root, fixtures }) {
  // TODO: If you know "projects__content", can you get template automatically? const {element, template} = getELementAndTemplate();
  const projects = root.getElementById('projects__content');
  const nav = root.getElementById('projects__nav');

  const contentTemplate = root.getElementById('projects__content__template');
  const navTemplate = root.getElementById('projects__nav__template');

  fixtures.forEach(() => {
    const content = contentTemplate.content.cloneNode(true);
    projects.append(content);

    const navItem = navTemplate.content.cloneNode(true);
    nav.append(navItem);
  });

  // TODO: Old scrolling example
  // const button6 = root.getElementById('project-6-button');
  // const project6 = root.getElementById('project-6');
  // button6.onclick = () => project6.scrollIntoView();
}
