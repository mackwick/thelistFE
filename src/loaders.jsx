//Base URl
const URL = import.meta.env.VITE_BASE_URL;

//Index loader
export const indexLoader = async () => {
  const response = await fetch(`${URL}`);
  const allShows = await response.json();
  return allShows;
};

//Show loader

export const showLoader = async ({ params }) => {
  const response = await fetch(`${URL}${params.id}/`);
  const aShow = await response.json();
  return aShow;
};
