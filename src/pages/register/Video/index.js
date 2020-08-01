import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function RegisterVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ title }) => title);
  const { handleChange, values } = useForm({
    title: 'Video Padrão',
    url: 'https://www.youtube.com/watch?v=88UEZBoXUcA',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categories) => {
        setCategorias(categories);
      });
  }, []);

  console.log(categorias);

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias
          .find((categoria) => categoria.title === values.categoria);

        console.log(categoriaEscolhida);

        videosRepository.create({
          titulo: values.title,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Video cadastrado com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;
