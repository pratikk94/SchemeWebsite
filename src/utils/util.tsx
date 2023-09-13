import scholarshipData from "../data/data.json";

// function pushIfNotExists<T>(array: T[], item: T): void {
//   if (!array.includes(item)) {
//     array.push(item);
//   }
// }

// function removeElementsFromArray(array1: any[], array2: any[]): any[] {
//   return array2.filter((item) => !array1.includes(item));
// }

function getCommonElements(array1: any[], array2: any[]): any[] {
  return array1.filter((item) => array2.includes(item));
}

export function getResources(
  type: number,
  reservation: string,
  gender: string,
  maxFamilyIncome?: number,
  residence?: string,
  disability?: string,
  age?: number
): string[] {
  let dataSet;
  if (type === 1) {
    dataSet = scholarshipData["scheme"];
  } else {
    dataSet = scholarshipData["scholarship"];
  }

  let reservationArray: string[] = [];
  let genderArray: string[] = [];

  for (let i = 0; i < dataSet.length; i++) {
    if (dataSet[i]["reservation"].length !== 0) {
      if (dataSet[i]["reservation"].indexOf(reservation) !== -1)
        reservationArray.push(dataSet[i]["id"]);
    } else {
      reservationArray.push(dataSet[i]["id"]);
    }
  }
  for (let i = 0; i < dataSet.length; i++) {
    if (dataSet[i]["gender"].length !== 0) {
      if (dataSet[i]["gender"].indexOf(gender) !== -1)
        genderArray.push(dataSet[i]["id"]);
    } else {
      genderArray.push(dataSet[i]["id"]);
    }
  }

  let commonElementArray: string[] = getCommonElements(
    genderArray,
    reservationArray
  );

  if (age !== undefined) {
    let ageArray: string[] = [];
    for (let i = 0; i < dataSet.length; i++) {
      if (
        Number(dataSet[i]["max_age"]) >= age &&
        Number(dataSet[i]["min_age"] <= age)
      ) {
        ageArray.push(dataSet[i]["id"]);
      }
    }
    commonElementArray = getCommonElements(commonElementArray, ageArray);
  }

  return commonElementArray;
}
