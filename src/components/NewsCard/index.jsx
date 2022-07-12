import { NewsCardContainer } from "./style";

const NewsCard = ({ card, isLoading = false }) => {
  const date = `${card?.yoast_head_json?.article_modified_time.slice(
    8,
    10
  )}/${card?.yoast_head_json?.article_modified_time.slice(
    5,
    7
  )}/${card?.yoast_head_json?.article_modified_time.slice(
    0,
    4
  )} ${card?.yoast_head_json?.article_modified_time.slice(11, 16)}`;
  const imageURL = card?.yoast_head_json?.og_image[0].url;

  let formattedDescription = card?.yoast_head_json?.description;
  if (formattedDescription?.length > 80) {
    formattedDescription = formattedDescription?.slice(0, 81) + "...";
  }

  return (
    <NewsCardContainer isLoading={isLoading}>
      {isLoading ? (
        <div className="card--image"></div>
      ) : (
        <img className="card--image" src={imageURL} alt={card?.slug} />
      )}
      <p className="card--description">{!isLoading && formattedDescription}</p>
      <span className="card--date">{!isLoading && date}</span>
    </NewsCardContainer>
  );
};
export default NewsCard;
