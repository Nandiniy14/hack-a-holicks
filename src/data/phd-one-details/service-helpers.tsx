import Axios from "axios";
import { baseURL } from "../constants";
import { async } from "q";

export async function getPHD1Winners() {
  const url = `${baseURL}/phd/winners`;

  return await Axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(() => {
      console.log("Error occured while fetching the PHD winner details");
    });
}

export async function getPHD1Runners() {
  const url = `${baseURL}/phd/runners`;

  return await Axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(() => {
      console.log("Error occured while fetching the PHD runners details");
    });
}

export async function getPHD1Summary() {
  const url = `${baseURL}/phd/summary`;

  return await Axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(() => {
      console.log("Error occured while fetching the PHD details");
    });
}
