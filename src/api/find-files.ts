import axios from "axios";
import { File } from "../types";

export async function findFiles(spaceId: string): Promise<{
  count: number;
  items: Array<File>;
  page: number;
  pageSize: number;
}> {
  const response = await axios.get<{
    count: number;
    items: Array<File>;
    page: number;
    pageSize: number;
  }>("https://api.filemonkey.io/api/v1/files", {
    auth: {
      password: "c944e0ec-dd3c-416d-8e96-a38b2413d7d6",
      username: "dd60f56f-7fba-4a5d-bc26-702c9f98ac61",
    },
    params: {
      tags: [spaceId],
    },
  });

  return response.data;
}
