export const AccountingRecords = {
  scope: "accounting",
  from: "01/01/1970",
  to: "01/01/1971",
  accounting: { id: "ac1", name: "Acc1" },
  groupType: "expense",
  group: { id: "gr1", name: "Casa" },
  category: { id: "cat1", name: "Alquiler" },
  data: [
    {
      id: 1,
      accounting: "Acc1",
      type: "Gasto",
      group: "Casa",
      category: "Alquiler",
      date: "01/01/1970",
      ammount: "12€",
      details: "-",
    },
    {
      id: 2,
      accounting: "Acc1",
      type: "Gasto",
      group: "Casa",
      category: "Alquiler",
      date: "01/01/1970",
      ammount: "1223€",
      details: "-",
    },
    {
      id: 3,
      accounting: "Acc1",
      type: "Gasto",
      group: "Casa",
      category: "Alquiler",
      date: "01/01/1970",
      ammount: "12€",
      details: "-",
    },
  ],
};

export const RecordsMock = {
  accountingId: "mock-acc",
  accountingName: "Mock accounting",
  year: 2022,
  groupType: "expense",
  groupId: "grp1",
  groupName: "Casa",
  groups: [
    {
      id: "casa",
      name: "Casa",
      categories: [
        {
          id: "cat1",
          name: "Alquiler",
          annualTotals: {
            monthly: [
              { id: 1, ammount: 11 },
              { id: 2, ammount: 12 },
              { id: 3, ammount: 13 },
              { id: 4, ammount: 14 },
              { id: 5, ammount: 15 },
              { id: 6, ammount: 0 },
              { id: 7, ammount: 10 },
              { id: 8, ammount: 10 },
              { id: 9, ammount: 7 },
              { id: 10, ammount: 10 },
              { id: 11, ammount: 10 },
              { id: 12, ammount: 10 },
            ],
            total: 23,
            average: 32,
          },
        },
        {
          id: "cat2",
          name: "Luz",
          annualTotals: {
            monthly: [
              { id: 1, ammount: 11 },
              { id: 2, ammount: 12 },
              { id: 3, ammount: 13 },
              { id: 4, ammount: 14 },
              { id: 5, ammount: 15 },
              { id: 6, ammount: 0 },
              { id: 7, ammount: 10 },
              { id: 8, ammount: 10 },
              { id: 9, ammount: 7 },
              { id: 10, ammount: 10 },
              { id: 11, ammount: 10 },
              { id: 12, ammount: 10 },
            ],
            total: 23,
            average: 32,
          },
        },
        {
          id: "cat3",
          name: "Gas",
          annualTotals: {
            monthly: [
              { id: 1, ammount: 11 },
              { id: 2, ammount: 12 },
              { id: 3, ammount: 13 },
              { id: 4, ammount: 14 },
              { id: 5, ammount: 15 },
              { id: 6, ammount: 0 },
              { id: 7, ammount: 10 },
              { id: 8, ammount: 10 },
              { id: 9, ammount: 7 },
              { id: 10, ammount: 10 },
              { id: 11, ammount: 10 },
              { id: 12, ammount: 10 },
            ],
            total: 23,
            average: 32,
          },
        },
      ],
    },
  ],
};
