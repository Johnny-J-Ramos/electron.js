const View = {
   render({minutes, seconds}) {
      document.body.innerHTML = `
      <span>Próximo Post em</span>
      <span>${minutes}:${seconds}</span>`;
   }
}

export { View };
