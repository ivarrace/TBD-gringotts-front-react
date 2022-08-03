const moment = require("moment");
function monthWithId() {
  let result = [];
  moment.monthsShort().forEach(function (value, index) {
    result.push({
      id: index,
      name: value,
    });
  });
  return result;
}

export const monthsShort = moment.monthsShort();

export const months = monthWithId();
