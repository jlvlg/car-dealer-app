import axios from "axios";
import { Make } from "./types";

const nhtsa = axios.create({ baseURL: process.env.api });

export async function GetMakesForVehicleType() {
  return (
    await nhtsa.get("GetMakesForVehicleType/car", {
      params: { format: "json" },
    })
  ).data.Results as Make[];
}
