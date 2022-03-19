//+++++++++++++++++++++++++++++++++++++++++ NUEVO MODELO -> Presupuesto

const randomTotales = (min, max) => {
  const meses = [];
  let total = 0;
  for (let mes = 1; mes <= 12; mes++) {
    let actual = Math.floor(Math.random() * (max - min)) + min;
    total += actual;
    meses.push({
      mes: mes,
      cantidad: actual,
    });
  }
  return {
    mensual: meses,
    total: total,
    promedio: (Math.round((total / 12) * 100) / 100).toFixed(2),
  };
};

const categoria = (id, parent) => {
  return {
    id: parent + "_categoria_" + id,
    creationDate: "01/01/1970",
    name: "Categoria_" + id,
    /* No enviamos movimiento aqui, solo necesitamos los totales. Para ver movimientos hacer nueva llamada
    movimientos: [
      movimiento(1, parent + "_categoria_" + id),
      movimiento(2, parent + "_categoria_" + id),
      movimiento(3, parent + "_categoria_" + id),
      movimiento(4, parent + "_categoria_" + id),
    ],*/
    totales: randomTotales(10, 50),
  };
};

const grupo = (id) => {
  return {
    id: "grupo_" + id,
    creationDate: "01/01/1970",
    name: "Grupo_" + id,
    categorias: [
      categoria(1, "grupo_" + id),
      categoria(2, "grupo_" + id),
      categoria(3, "grupo_" + id),
    ],
    totales: randomTotales(10, 50),
  };
};

export const presupuestoMock = {
  id: 1,
  creationDate: "01/01/1970",
  name: "Personal",
  gastos: {
    grupos: [grupo(1), grupo(3), grupo(5)],
    totales: randomTotales(100, 500),
  },
  ingresos: {
    grupos: [grupo(2)],
    totales: randomTotales(100, 500),
  },
  ahorro: randomTotales(50, 100), //TODO ver como metemos tambien los ahorros
  lastUpdate: "01/01/1970",
};

//+++++++++++++++++++++++++++++++++++++++++ NUEVO MODELO -> Detalles de gastos

const movimiento = (id) => {
  return {
    id: "movimiento_" + id,
    fecha: "01/01/1970",
    cantidad: 100 + id,
    info: id + "L de gasolina",
  };
};

export const gastos = {
  mes: 1,
  categoria: "grupo_1_categoria_2",
  registros: [
    movimiento(1),
    movimiento(2),
    movimiento(3),
    movimiento(4),
    movimiento(5),
    movimiento(6),
  ],
  total: 42,
};

//+++++++++++++++++++++++++++++++++++++++++ test
export const presupuestoExample = {
  id: 1,
  creationDate: "01/01/1970",
  lastUpdate: "01/01/1970",
  name: "Personal",
  gastos: [
    {
      id: "coche",
      creationDate: "01/01/1970",
      name: "Coche",
      categorias: [
        {
          id: "gasolina-coche",
          creationDate: "01/01/1970",
          name: "Gasolina",
          movimientos: [
            {
              fecha: "01/01/1970",
              cantidad: 100.0,
              info: "3L de gasolina",
            },
          ],
        },
      ],
    },
    {
      id: "casa",
      creationDate: "01/01/1970",
      name: "Casa",
      categorias: [
        {
          id: "alquiler",
          creationDate: "01/01/1970",
          name: "Alquiler",
          movimientos: [
            {
              fecha: "01/01/1970",
              cantidad: 120.0,
              info: "",
            },
          ],
        },
        {
          id: "servicios",
          creationDate: "01/01/1970",
          name: "Servicios",
          movimientos: [
            {
              fecha: "01/01/1970",
              cantidad: 100.0,
              info: "Gas",
            },
          ],
        },
      ],
    },
  ],
  ingresos: [
    {
      id: "trabajo",
      creationDate: "01/01/1970",
      name: "Trabajo",
      categorias: [
        {
          id: "nomina",
          creationDate: "01/01/1970",
          name: "Nomina",
          movimientos: [
            {
              fecha: "01/01/1970",
              cantidad: 100.0,
              info: "",
            },
          ],
        },
      ],
    },
  ],
};
