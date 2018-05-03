import createId from "./addFunctions";
import './addFunctions';

const PRODUCTS = [
  {
    name: `Apple`,
  },
  {
    name:  `Mango`,
  },
  {
    name: `Plum`,
  },
  {
    name: `Nectarine`,
  },
  {
    name:  `Lime`,
  },
  {
    name: `Pear`,
  },
].map(product => Object.assign({ 
  ...product,
  id: createId(),
  isDeleted: false,
}));

export default PRODUCTS;
