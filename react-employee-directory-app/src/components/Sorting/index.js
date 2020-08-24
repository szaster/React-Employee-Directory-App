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

function compareDobs(a, b) {
  return 0;
}

export function sortByName(employees) {
  return employees.sort(compareNames);
}

export function sortByDob(employees) {
  return employees.sort(compareDobs);
}

export class SortingCategory {
  static ByName = "byname";
  static ByDOB = "byDOB";
}
