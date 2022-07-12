import instance from ".";

export const getNews = async (currentPage, perPage, category) => {
  const CATEGORY_NUMBER =
    category === "energy" ? 74 : category === "agribusiness" ? 76 : undefined;

  const response = await instance
    .get(
      `/posts?_embed=1&categories=${CATEGORY_NUMBER}&page=${currentPage}&per_page=${perPage}`
    )
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));

  console.log(response);
  return response;
};

//yoast_head_json -> article_modified_time, description, og_image[0].url
