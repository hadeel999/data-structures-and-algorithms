const  {quickSort}  = require("../quick-sort");

describe("Test quick sort", () => {
  it("Can properly quick sort the array", () => {
    let arr = [5, 3, 7, 6, 2, 9];
    let result = quickSort(arr, 0, arr.length - 1);

    expect(result).toEqual([2,3,5,6,7,9]);
  });
});