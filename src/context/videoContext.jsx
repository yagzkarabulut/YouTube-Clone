import { createContext, useEffect, useState } from "react";
import { categories } from "../constant";
import { getData } from "../helpers/getData";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);

  //kategori her değiştiğinde api'dan veriyi al
  useEffect(() => {
    // menu seçildiyse fonksiyonları durdur
    if (selectedCategory.type === "menu") return;
    // önceki kategorilerin verilerini temizle
    setVideos(null);
    // type'ı home ise home endpointeine istek at
    if (selectedCategory.type === "home") {
      getData("/home").then((res) => setVideos(res.data));
    }
    // type'ı tending ise trending endpointeine istek at
    if (selectedCategory.type === "trending") {
      getData("/trending").then((res) => setVideos(res.data));
    }
    // type'ı category ise search endpointeine istek at
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((res) =>
        setVideos(res.data)
      );
    }
  }, [selectedCategory]);
  return (
    <VideoContext.Provider
      value={{ videos, selectedCategory, setSelectedCategory }}
    >
      {children}
    </VideoContext.Provider>
  );
};
