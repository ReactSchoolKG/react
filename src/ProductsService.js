import createId from "./createId";

let PRODUCTS = [
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

export const getAll = () => PRODUCTS;
export const getOne = id => JSON.parse(JSON.stringify(PRODUCTS.find(product => product.id === id)));
export const updateProducts = (id, changeProperty) => {
  const product = getOne(id);
  const updatedProduct = product && (Object.assign({}, product, changeProperty));
  return PRODUCTS = PRODUCTS.map(p => p.id === id ? updatedProduct : p);
};
