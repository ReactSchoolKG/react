import createId from "./createId";

const PRODUCTS = [
  {
    name: `Apple`,
    maxPrice: 20,
    minPrice: 10,
    banner: `Apple-company`,
   
  },
  {
    name: `Mango`,
    maxPrice: 19,
    minPrice: 12,
    banner: `Mango-company`,
  },
  {
    name: `Plum`,
    maxPrice: 34,
    minPrice: 33,
    banner: `Plum-company`,
  },
  {
    name: `Nectarine`,
    maxPrice: 46,
    minPrice: 43,
    banner: `Nectarine-company`,
  },
  {
    name:  `Lime`,
    maxPrice: 17,
    minPrice: 16,
    banner: `Lime-company`,
  },
  {
    name: `Pear`,
    maxPrice: 36,
    minPrice: 29,
    banner: `Pear-company`,
  },
].map(product => Object.assign({ 
  ...product,
  id: createId(),
  isDeleted: false,
}));

const copy = data => JSON.parse(JSON.stringify(data));

export const getAll = () => copy(PRODUCTS);
export const getOne = id => getAll().find(product => product.id === id);
export const updateOne = (id, data) => {
  const product = PRODUCTS.find(product => product.id === id);
  product && (Object.assign(product, data));
  return getOne(id);
};
