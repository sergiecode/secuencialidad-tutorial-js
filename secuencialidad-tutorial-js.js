

function ejecutarAccion1() {
    return new Promise((resolve, reject) => {
      // código de la acción 1
      // cuando la acción haya terminado, llama a resolve()
      resolve();
    });
  }
  function ejecutarAccion2() {
    return new Promise((resolve, reject) => {
      // código de la acción 2
      // cuando la acción haya terminado, llama a resolve()
      resolve();
    });
  }
  async function ejecutarAccionesSecuencialmente() {
    await ejecutarAccion1();
    await ejecutarAccion2(); //podés agregar más
  }
  ejecutarAccionesSecuencialmente();

