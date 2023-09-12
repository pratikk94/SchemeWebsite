import scholarshipData from "../data/data.json";

function pushIfNotExists<T>(array: T[], item: T): void {
  if (!array.includes(item)) {
    array.push(item);
  }
}

export function getResources(
  type: number,
  gender?: string,
  maxFamilyIncome?: number,
  residence?: string,
  disability?: string,
  reservation?: string
): string[] {
  let ids: string[] = [];
  let dataSet = scholarshipData["$scholarship"];
  //   if (type === 1) {
  //
  //   } else {
  //     // change this.
  //     dataSet = scholarshipData[];
  //   }
  console.log(type);
  for (let i = 0; i < dataSet.length; i++) {
    if (dataSet[i]["gender"] === "N/A") ids.push(dataSet[i]["id"]);
    if (dataSet[i]["gender"] === gender) pushIfNotExists(ids, dataSet[i]["id"]);
  }
  return ids;
}
