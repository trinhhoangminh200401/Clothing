import Directory from "./Directory";
import Categories from './data/categories.json' 
const App = () => {
 
  return (
   <Directory categories={Categories} />
  );
};
export default App;
