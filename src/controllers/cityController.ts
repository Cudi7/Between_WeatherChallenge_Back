import app, { Request, Response } from "express";
import { City } from "../interfaces/cityInterface";
import {
  addCity,
  deleteManyCities,
  deleteSingleCity,
  getAllCities,
} from "../persistance/city";

const route = app.Router();

//@getAllCities
route.get("/all", async (req: Request, res: Response) => {
  const cities = await getAllCities();
  const { status, success, data, error } = cities;

  return success
    ? res.status(status).json({ success, data })
    : res.status(status).json({ success, error });
});

//@getCityBy (date, location)
//@TODO***************************************************************************
route.get("/:id", async (req: Request, res: Response) => {});

//@postNewCity
route.post("/new", async (req: Request, res: Response) => {
  const cityData = req.body;

  const city = await addCity(cityData);

  const { status, success } = city;

  return res.status(status).json({ status, success });
});

//@deleteSingleCity
route.delete("/delete/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const deletedCity = await deleteSingleCity(id);
  const { status, success } = deletedCity;

  return res.status(status).json({ status, success });
});

//@deleteAllCities
//@TODO***************************************************************************
route.delete("/delete", async (req: Request, res: Response) => {});

export default route;
