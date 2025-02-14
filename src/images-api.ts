import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const apiKey = "6f8nJhVlihGqobcqR-0goLK_NhA2mMBT08K4p0xc8Qw";

export const fetchImagesWithTopic = async <T>(
  topic: string,
  currentPage: number
): Promise<T> => {
  const response = await axios.get("search/photos", {
    params: {
      client_id: apiKey,
      page: currentPage,
      per_page: 12,
      query: topic,
    },
  });
  const result: T = response.data.results;
  return result;
};
