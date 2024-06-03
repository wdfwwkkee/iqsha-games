import { collection, getDocs, query } from "firebase/firestore";
import { db } from "utils/firestore";

export const iqshaService = {
  getAllGames: async () => {
    const q = query(collection(db, "data.sourcePic"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs[0].data().nameCategory;
  },
  getGameById: async (id) => {
    const q = query(collection(db, "data.sourcePic"));
    const querySnapshot = await getDocs(q);
    const array = querySnapshot.docs[0].data().nameCategory;
    return array[id - 1];
  },
};
