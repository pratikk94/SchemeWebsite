import scholarshipData from "../data/data.json";

function pushIfNotExists<T>(array: T[], item: T): void {
  if (!array.includes(item)) {
    array.push(item);
  }
}

function removeElementsFromArray(array1: any[], array2: any[]): any[] {
  return array2.filter((item) => !array1.includes(item));
}

function getCommonElements(array1: any[], array2: any[]): any[] {
  return array1.filter((item) => array2.includes(item));
}

export function getResources(
  type: number,
  gender?: string,
  maxFamilyIncome?: number,
  residence?: string,
  reservation?: string,
  disability?: string
): string[] {
  let ids: string[] = [];
  let dataSet = scholarshipData["$scholarship"];
  //   if (type === 1) {
  //
  //   } else {
  //     // change this.
  //     dataSet = scholarshipData[];
  //   }

  let reservationArray: string[] = [];
  let genderArray: string[] = [];

  for (let i = 0; i < dataSet.length; i++) {
    if (dataSet[i]["reservation"] != "N/A") {
      if (dataSet[i]["reservation"] === reservation)
        reservationArray.push(dataSet[i]["id"]);
    } else {
      reservationArray.push(dataSet[i]["id"]);
    }
  }
  for (let i = 0; i < dataSet.length; i++) {
    if (dataSet[i]["gender"] != "N/A") {
      if (dataSet[i]["gender"] === gender) genderArray.push(dataSet[i]["id"]);
    } else {
      genderArray.push(dataSet[i]["id"]);
    }
  }

  let commonElementArray: string[] = getCommonElements(
    genderArray,
    reservationArray
  );

  return commonElementArray;
}
