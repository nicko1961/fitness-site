 
 export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '688e84f6fbmsh30ccf846cba09f1p1720b8jsn3f90ce9f1e37',   
    },
  };

 export const youtubeOptions = {

    method: 'GET',
    headers:{
      'X-RapidAPI-Key': '688e84f6fbmsh30ccf846cba09f1p1720b8jsn3f90ce9f1e37',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    },
  };
  
export  const fetchData = async (url, options) => {
    const response  = await fetch(url, options);
    const data = await response.json();

    return data;

};
