export default function ({ root, fixtures }) {
  const projects = root.getElementById('projects__content');
  const nav = root.getElementById('projects__nav');

  const contentTemplate = root.getElementById('projects__content__template');
  const navTemplate = root.getElementById('projects__nav__template');

  fixtures.forEach((fixture, index) => {
    // TODO: how to apply contet from fixtures?

    const content = contentTemplate.content.cloneNode(true);
    content.children[0].id = `project-${index}`;
    projects.append(content);

    const navItem = navTemplate.content.cloneNode(true);
    navItem.children[0].id = `project-${index}-nav`;
    navItem.children[0].children[0].dataset.index = index;
    nav.append(navItem);
  });
}

function getELementAndTemplate(elementId) {
  const element = root.getElementById(elementId);
  const template = root.getElementById(`${elementId}_template`);
  return { element, template };
}
