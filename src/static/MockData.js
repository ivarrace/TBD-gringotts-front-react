export const PresupuestoData = {
  id: 1,
  name: "Personal",
  year: 2022,
  categoriasGastos: [
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

export const meses = [
  { id: 1, nombre: "Enero" },
  { id: 2, nombre: "Febrero" },
  { id: 3, nombre: "Marzo" },
  { id: 4, nombre: "Abril" },
  { id: 5, nombre: "Mayo" },
  { id: 6, nombre: "Junio" },
  { id: 7, nombre: "Julio" },
  { id: 8, nombre: "Agosto" },
  { id: 9, nombre: "Septiembre" },
  { id: 10, nombre: "Octubre" },
  { id: 11, nombre: "Noviembre" },
  { id: 12, nombre: "Diciembre" },
];

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
