export default function (root, { greeting }) {
  const myButton = root.getElementById('my-button');
  myButton.onclick = () => console.log(greeting);
}
