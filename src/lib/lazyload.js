export function lazyLoad(node) {
  const src = node.getAttribute('data-src');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        node.src = src;
        node.removeAttribute('data-src');
        observer.unobserve(node);
      }
    }); // main part

    observer.observe(node);
  } else {
    node.src = src;
    node.removeAttribute('data-src'); //optimization
  }

  return {
    destroy() { // this is nt really needed it is js for cleanup
    }
  };
}
