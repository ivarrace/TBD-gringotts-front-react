export const PresupuestoData = {
  id: 1,
  name: "Personal",
  year: 2022,
  gastos: [
    {
      id: 1,
      name: "Coche",
      subcategorias: [
        {
          id: 1,
          name: "Gasolina",
          gastos: populateGastos(12, 0, 50),
          gastoTotal: 120,
          gastoPromedio: 10,
        },
        {
          id: 2,
          name: "Seguro",
          gastos: populateGastos(12, 1, 23),
          gastoTotal: 120,
          gastoPromedio: 10,
        },
        {
          id: 3,
          name: "Mantenimiento",
          gastos: populateGastos(12, 40, 50),
          gastoTotal: 120,
          gastoPromedio: 10,
        },
      ],
      gastosTotales: {
        mensuales: populateGastos(12, 1000, 2000),
        total: 420121,
        promedio: 11111,
      },
    },
    {
      id: 2,
      name: "Ocio",
      subcategorias: [
        {
          id: 4,
          name: "Videojuegos",
          gastos: populateGastos(12, 0, 50),
          gastoTotal: 120,
          gastoPromedio: 10,
        },
        {
          id: 5,
          name: "Restaurantes",
          gastos: populateGastos(12, 0, 50),
          gastoTotal: 120,
          gastoPromedio: 10,
        },
        {
          id: 6,
          name: "Electronica",
          gastos: populateGastos(12, 0, 50),
          gastoTotal: 120,
          gastoPromedio: 10,
        },
      ],
      gastosTotales: {
        mensuales: populateGastos(12, 1000, 2000),
        total: 420121,
        promedio: 11111,
      },
    },
  ],
};

function populateGastos(numElementos, min, max) {
  const result = [];
  for (let step = 1; step <= numElementos; step++) {
    result.push({
      mes: step,
      total: Math.floor(Math.random() * (max - min)) + min,
    });
  }
  return result;
}

export const DetalleGastos = {
  from: "ayer",
  to: "hoy",
  categoria: "coche",
  registros: [
    { id: 1, notas: "nota 1", fecha: "hoy", gasto: 16 },
    { id: 2, notas: "nota 2", fecha: "ayer", gasto: 16 },
    { id: 3, notas: "nota 3", fecha: "hoy", gasto: 16 },
    { id: 4, notas: "nota 4", fecha: "hoy", gasto: 16 },
    { id: 5, notas: "nota 5", fecha: "hoy", gasto: 16 },
    { id: 6, notas: "nota 6", fecha: "hoy", gasto: 16 },
  ],
  total: 42,
};

//+++++++++++++++++++++++++++++++++++++++++ NUEVO MODELO -> Resumen presupuesto

const mesOverview = (idMes, cantidad) => {
  return { mes: idMes, cantidad: cantidad };
};
const randomTotales = (min, max) => {
  const result = [];
  let total = 0;
  for (let mes = 1; mes <= 12; mes++) {
    let actual = Math.floor(Math.random() * (max - min)) + min;
    total += actual;
    result.push(mesOverview(mes, actual));
  }
  return {
    mensual: result,
    total: total,
    promedio: Math.round((total / 12) * 100) / 100,
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

export const presupuesto = {
  id: 1,
  creationDate: "01/01/1970",
  name: "Personal",
  gastos: [grupo(1), grupo(3), grupo(5)],
  ingresos: [grupo(2)],
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
