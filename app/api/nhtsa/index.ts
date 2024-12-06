import axios from "axios";
import { Make, Model } from "./types";

const nhtsa = axios.create({
  baseURL: process.env.api,
  params: { format: "json" },
});

export async function GetMakesForVehicleType() {
  return (await nhtsa.get("GetMakesForVehicleType/car")).data.Results as Make[];
}

export async function GetModelsForMakeIdYear(
  make: string | number,
  year: string | number,
) {
  return (
    await nhtsa.get(`GetModelsForMakeIdYear/makeId/${make}/modelyear/${year}`)
  ).data.Results as Model[];
}
