export default function ({ root, fixtures }) {
  const projects = root.getElementById('projects__content');
  const nav = root.getElementById('projects__nav');

  const contentTemplate = root.getElementById('projects__content__template');
  const navTemplate = root.getElementById('projects__nav__template');

  fixtures.forEach((fixture, index) => {
    const content = contentTemplate.content.cloneNode(true);
    projects.append(content);

    const navItem = navTemplate.content.cloneNode(true);
    navItem.children[0].id = `project-${index}-nav`;
    nav.append(navItem);
  });

  // TODO: Old scrolling example
  // const button6 = root.getElementById('project-6-button');
  // const project6 = root.getElementById('project-6');
  // button6.onclick = () => project6.scrollIntoView();
}

function getELementAndTemplate(elementId) {
  const element = root.getElementById(elementId);
  const template = root.getElementById(`${elementId}_template`);
  return { element, template };
}
