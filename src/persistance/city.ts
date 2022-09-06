import { City } from "../interfaces/cityInterface";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { colRef, db } from "../config/firebase";

export const getAllCities = async () => {
  try {
    const data = await getDocs(colRef);

    const cities: { firestoreId: string }[] = [];

    data.docs.forEach((doc) =>
      cities.push({ ...doc.data(), firestoreId: doc.id })
    );

    return { success: true, status: 200, data: cities };
  } catch (error: unknown) {
    return { success: false, status: 500, error: error };
  }
};

//@TODO***************************************************************************
export const getCityBy = async (id: string) => {};

export const addCity = async (cityData: any) => {
  try {
    await addDoc(colRef, cityData);
    return { success: true, status: 200 };
  } catch (e) {
    return { success: false, status: 500 };
  }
};

export const deleteSingleCity = async (id: string) => {
  try {
    const docRef = doc(db, "cities", id);

    deleteDoc(docRef);

    return { success: true, status: 200 };
  } catch (error: any) {
    return { success: false, status: 500 };
  }
};

//@TODO***************************************************************************
export const deleteManyCities = async () => {};
