import camelize from "camelize";
import { mocks } from "./mock";

export const restaurantRequest = (location = "37.77361, -122.421622") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};

const restaurantTransform = (result) => {
  const newResult = camelize(result);
  return newResult;
};

restaurantRequest()
  .then(restaurantTransform)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("error", err);
  });
