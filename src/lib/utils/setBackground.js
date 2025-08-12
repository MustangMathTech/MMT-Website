export function setBackground(background) {
  let current = document.body.style['background-image'];
  document.body.style['background-image'] = `url('${background}')`;
  return () => document.body.style['background-image'] = current;
}
