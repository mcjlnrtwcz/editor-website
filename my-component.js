export default function (root) {
  const myButton = root.getElementById('my-button');
  myButton.onclick = () => console.log('hello!');
}
