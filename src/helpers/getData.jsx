import axios from "axios";

// istek için gerekli ayarlar
const options = {
  headers: {
    "X-RapidAPI-Key": "142656263fmshc864e7cd7f94a1ep1eb00fjsn049788f51e8b",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
  params: {
    lang: "tr",
    geo: "TR",
  },
};

// yapılan bütün isteklerin ortakk olan başlangıcı kısmını belirle
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

// Parametre olarak aldığı url'e istek atıp
// geriye elde ettiği verileri döndüren

export const getData = async (endpoint) => {
  try {
    // api isteği at
    const res = await axios.get(endpoint, options);
    // fonksiyonun çağrıldığı yere veriyi döndür
    return res.data;
  } catch (err) {
    console.log("Verileri çekerken bir hata oluştu");
  }
};
