import { v4 as uuid } from "uuid";

function getRandomId() {
  const unique_id = uuid().slice(0, 8);
  return unique_id;
}

export default getRandomId;