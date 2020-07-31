import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: ''
  }
  
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(initialValues);

  function setValue(key, value) {
    setCategory({
      ...category,
      [key]: value
    })
  }

  function handlerChanges(event){
    setValue(event.target.getAttribute('name'), event.target.value)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {category.name}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategories([
          ...categories,
          category
        ]);

        setCategory(initialValues);
      }}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={category.name}
          onChange={handlerChanges}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={category.description}
          onChange={handlerChanges}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={category.color}
          onChange={handlerChanges}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category.name}${index}`}>
              {category.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;