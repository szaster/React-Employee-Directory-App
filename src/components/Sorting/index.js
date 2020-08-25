function compareNames(a, b) {
  let nameA = a.name.first.toUpperCase(); //ingore upper and lowercase
  let nameB = b.name.first.toUpperCase();
  if (nameA < nameB) {
    return -1; // name A comes first in resulting array
  }
  if (nameA > nameB) {
    return 1; // name B comes first in resulting array
  }
  return 0; //names must be equal positions unchanged
}

function compareDob(a, b) {
  let empA = new Date(a.dob.date);
  let empB = new Date(b.dob.date);
  if (empA < empB) {
    return -1;
  }
  if (empA > empB) {
    return 1;
  }
  return 0;
}

let orderDescent = true;

export function sortByName(employees) {
  const sorted = employees.sort(compareNames);
  if (orderDescent) {
    orderDescent = false;
    return sorted;
  } else {
    orderDescent = true;
    return sorted.reverse();
  }
}

export function sortByDob(employees) {
  const sorted = employees.sort(compareDob);
  if (orderDescent) {
    orderDescent = false;
    return sorted;
  } else {
    orderDescent = true;
    return sorted.reverse();
  }
}

export class SortingCategory {
  static ByName = "byname";
  static ByDOB = "byDOB";
}
