export const accountingListMock = [
  {
    id: "mock1",
    name: "Personal",
    creationDate: "01/01/1970",
    lastUpdate: "01/01/1970",
    summary: {
      year: 2022,
      monthly: [
        { month: 1, expenses: 1, income: 10, savings: 9 },
        { month: 2, expenses: 2, income: 10, savings: 8 },
        { month: 3, expenses: 3, income: 10, savings: 7 },
        { month: 5, expenses: 5, income: 10, savings: 5 },
        { month: 9, expenses: 9, income: 10, savings: 1 },
      ],
    },
    //TODO estos para el form
    expenses: [
      {
        id: "ex1",
        name: "Casa",
        groups: [
          { id: 1, name: "Luz" },
          { id: 2, name: "Gas" },
        ],
      },
      {
        id: "ex2",
        name: "Coche",
        groups: [
          { id: 3, name: "Seguro" },
          { id: 4, name: "Gasolina" },
        ],
      },
      { id: "ex3", name: "Ocio", groups: [{ id: 5, name: "Videojuegos" }] },
    ],
    income: [
      {
        id: "in1",
        name: "Trabajo",
        groups: [
          { id: 6, name: "Nomina" },
          { id: 7, name: "Extras" },
        ],
      },
    ],
  },
  {
    id: "ac2",
    name: "Compartida",
    creationDate: "01/01/1970",
    lastUpdate: "01/01/1970",
    summary: {
      year: 2022,
      monthly: [
        { month: 1, expenses: 10, income: 10, savings: 0 },
        { month: 2, expenses: 20, income: 10, savings: -10 },
        { month: 3, expenses: 30, income: 10, savings: -20 },
        { month: 4, expenses: 40, income: 10, savings: -30 },
        { month: 5, expenses: 50, income: 10, savings: -40 },
      ],
    },
    expenses: [],
    income: [],
  },
];
