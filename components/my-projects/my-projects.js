export default function (root) {
  const button6 = root.getElementById('project-6-button');
  const project6 = root.getElementById('project-6');
  button6.onclick = () => project6.scrollIntoView();
}
