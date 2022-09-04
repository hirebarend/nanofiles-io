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
      password: "13A07622D7FC8962C7D948CF885B2A78",
      username: "F8BDA464EDC9B041AD311E5806C24475",
    },
    params: {
      tags: [spaceId],
    },
  });

  return response.data;
}
