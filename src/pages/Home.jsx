/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import ListCards from "../components/ListCards";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useDate from "../Hooks/useDate";
import Carousel from "../components/Carousel";

const HomePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const [maxNews, setMaxNews] = useState(6);
  const [news, setNews] = useState([]);
  const { date, dayName, monthName, year } = useDate();

  const fetchNews = useCallback(
    async (id) => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://berita-indo-api-next.vercel.app/api/cnn-news/${
            id === "home" ? "" : id
          }`
        );
        setNews(response.data.data);
      } catch (e) {
        if (e?.response?.status === 400) {
          navigate("/404");
        }
      } finally {
        setIsLoading(false);
      }
    },
    [id]
  );

  useEffect(() => {
    fetchNews(id);
  }, [id]);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section className="w-full">
            <Carousel />
          </section>
          <section className="flex flex-col items-center pt-6">
            <h2 className="capitalize text-center text-2xl font-bold">
              Berita{" "}
              {location === "/berita/home" ? "Hari ini" : location.substring(8)}{" "}
              {dayName}-{date}-{monthName}-{year}
            </h2>
            <ListCards datas={news.slice(0, maxNews)} />
            <button
              disabled={isLoadingBtn}
              className={`text-white font-semibold p-3 mt-6 rounded-lg ${
                isLoadingBtn ? "bg-slate-500" : "bg-sky-500"
              }`}
              onClick={() => {
                setIsLoadingBtn(true);
                setTimeout(() => {
                  setMaxNews((prev) => prev + 6);
                  setIsLoadingBtn(false);
                }, 2000);
              }}>
              {isLoadingBtn ? "Loading..." : "Lihat Berita Lainnya"}
            </button>
          </section>
        </>
      )}
    </main>
  );
};

export default HomePage;
