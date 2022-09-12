import { useEffect, useState } from 'react';
import categoryTree from '../src/categoryTree.json'
import './App.css';

function App() {
  const [csv, setCsv] = useState([])

  const handleCreateCsv = (categories) => {
    /*
      tiene un grado importante de hardCode por ahora.
      en este caso estoy forzando 3 niveles de categorías,
      pero esto podría automatizarse, siempre que se consulte
      hasChildren y se lleve una cuenta de los niveles en
      donde estás parado.
      De todas maneras, el mega-menú neceista (y sólo usa) 3 niveles
    */
    let indexOrder = { categorie: 1, subCategorie: 1, subSubCategorie: 1}
    let prevCsv = categories.map((categorie) =>
      ({
        "id": `${categorie.url.split('/')[3]}-${categorie.id}`,
        "name": `${categorie.name}`,
        "icon": "",
        "slug": `${categorie.url.split('/')[3]}`,
        "styles": "",
        "display": true,
        "enableSty": true,
        "order": indexOrder.categorie++,
        "slugRoot": `${categorie.url.split('/')[3]}`,
        "menu": categorie.hasChildren ? (
          indexOrder.subCategorie = 1,
          categorie.children.map((subCategorie) => ({
          "id": `${subCategorie.url.split('/')[4]}-${subCategorie.id}`,
          "name": `${subCategorie.name}`,
          "icon": "",
          "slug": `/${subCategorie.url.split('/')[3]}/${subCategorie.url.split('/')[4]}`,
          "styles": "",
          "display": true,
          "enableSty": true,
          "order": indexOrder.subCategorie++,
          "slugRoot": `${subCategorie.url.split('/')[4]}`,
          "slugRelative": `/${subCategorie.url.split('/')[3]}`,
          "menu": subCategorie.hasChildren ? (
            indexOrder.subSubCategorie = 1,
            subCategorie.children.map((subSubCategorie) => ({
            "id": `${subSubCategorie.url.split('/')[5]}-${subSubCategorie.id}`,
            "name": `${subSubCategorie.name}`,
            "icon": "",
            "slug": `/${subSubCategorie.url.split('/')[3]}/${subSubCategorie.url.split('/')[4]}/${subSubCategorie.url.split('/')[5]}`,
            "styles": "",
            "display": true,
            "enableSty": true,
            "order": indexOrder.subSubCategorie++,
            "slugRoot": `${subSubCategorie.url.split('/')[5]}`,
            "slugRelative": `/${subSubCategorie.url.split('/')[3]}/${subSubCategorie.url.split('/')[4]}`,
            "__typename": "Menu"
          }))) : [],
          "__typename": "Menu"
        }))) : [],
        "__typename": "Menu"
      })
    )

    setCsv(prevCsv)

  }
  useEffect(() => {
    handleCreateCsv(categoryTree)
  }, [])

  /* 
  también dejo el console log, para ver por consola
  de manera ordenada y linda todo el objeto que se armó
   */
  console.log(csv)

  return (
    <div style={{padding: "24px"}}>
      {
        csv.map((part, i) => (
          <div key={i}>
            <br/><br/><h1>
              {`${i}. ${part.name}`}
            </h1><br/>
            {JSON.stringify(part.menu)}
          </div>
        ))
      }
    </div>
  );
}

export default App;
