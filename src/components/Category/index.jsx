/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getNews } from "../../services/api";
import NewsCard from "../NewsCard";
import { CategoryContainer } from "./style";

const Category = ({ name }) => {
  const formattedName =
    name === "energy"
      ? "Energia"
      : name === "agribusiness"
      ? "Agronegócio"
      : undefined;

  const NEWS_PER_PAGE = 3;

  const [newsList, setNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [scrollX, setScrollX] = useState(0);

  const listWidth = 320 * newsList.length;

  const handleRightArrow = () => {
    let x = scrollX - 320;

    if (x < -1 * listWidth) {
      x = listWidth;
    }

    setScrollX(x);
  };

  const handleLeftArrow = () => {
    let x = scrollX + 320;

    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const loadNews = async () => {
    setLoading(true);
    const response = await getNews(currentPage, NEWS_PER_PAGE, name);
    setNewsList([...newsList, ...response]);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log("Elemento está visível!");
        setCurrentPage((prevState) => prevState + 1);
      }
    });

    intersectionObserver.observe(document.getElementById("observer"));

    return () => intersectionObserver.disconnect();
  }, []);

  useEffect(() => {
    loadNews();
  }, [currentPage]);

  const handleLoading = () => {
    let array = [];
    for (let i = 0; i < NEWS_PER_PAGE; i++) {
      array.push({});
    }
    return array;
  };

  return (
    <CategoryContainer listWidth={listWidth} scrollX={scrollX + "px"}>
      <h3 className="category--name">{formattedName}</h3>

      <button
        className="category--arrow category--arrow__right"
        onClick={handleRightArrow}
      >
        &gt;
      </button>
      <button
        className="category--arrow category--arrow__left"
        onClick={handleLeftArrow}
      >
        &lt;
      </button>

      <div className="category--listarea">
        <ul className="category--list">
          {!loading &&
            newsList.map((item, index) => <NewsCard key={index} card={item} />)}
          {loading &&
            handleLoading().map((item, index) => (
              <NewsCard isLoading={true} key={"loading-" + index} />
            ))}
          <li id="observer"></li>
        </ul>
      </div>
    </CategoryContainer>
  );
};

export default Category;
