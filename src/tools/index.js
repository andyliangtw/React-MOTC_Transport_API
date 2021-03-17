export function objToURLParams(obj) {
  if (typeof obj != 'object') {
    return '';
  }

  return Object.entries(obj).reduce((prev, [key, val], i) => {
    return prev + `${i === 0 ? '?' : '&'}${key}=${val}`;
  }, '');
}

export function isBottom() {
  const windowHeight =
    'innerHeight' in window
      ? window.innerHeight
      : document.documentElement.offsetHeight;
  const docHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
  );
  return windowHeight + window.pageYOffset >= docHeight;
}
