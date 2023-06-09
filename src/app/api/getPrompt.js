import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../../../firebase";

const firestore = getFirestore(app);

export default async function handler(req, res) {
  try {
    const snapshot = await getDocs(collection(firestore, "prompts"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(data);
    return data;
  } catch (error) {
    console.log(error)
  }

  // res.send(data);
  // return data
}
