export function autoregister(module, elements) {
  Object.keys(elements).forEach(type => {
    const components = elements[type];
    components.forEach(fn => {
      console.log(`Registering ${type} - ${fn.name}`);
      module[type](fn.name, fn);
    });
  });
}