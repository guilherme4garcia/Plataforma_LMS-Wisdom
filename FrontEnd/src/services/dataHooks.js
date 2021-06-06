/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useState, useContext } from 'react';
import faker from 'faker';
import moment from 'moment';

const ClassContext = createContext({});

const ClassProvider = ({ children }) => {
  const [commentaries, setCommentaries] = useState([
    {
      user: 'Carlos',
      content: 'Ótimo Curso!',
      time: moment().startOf('day').fromNow(),
    },
    {
      user: 'Otávio',
      content: 'Péssimo Curso!',
      time: moment().startOf('day').fromNow(),
    },
  ]);

  const [teacherPost, setTeacherPost] = useState([
    {
      user: 'Professor Teste',
      content: 'A segunda seção possui uma informação interessante!',
      extra: '',
      time: moment().startOf('day').fromNow(),
    },
    {
      user: 'Professor Teste',
      content:
        'Preciso que vejam esse vídeo complementar para o entendimento completo da seção!',
      extra: 'https://www.youtube.com/watch?v=6t5YjEXlNhw',
      time: moment().startOf('day').fromNow(),
    },
  ]);

  const students = [
    {
      id: 1,
      name: 'Aluno Teste',
      status: 'Matriculado',
    },
    {
      id: faker.datatype.uuid(),
      name: 'Carlos',
      status: 'Matriculado',
    },
    {
      id: faker.datatype.uuid(),
      name: 'Otávio',
      status: 'Matriculado',
    },
    {
      id: faker.datatype.uuid(),
      name: 'Ronald',
      status: 'Aguardando',
    },
    {
      id: faker.datatype.uuid(),
      name: 'Ana',
      status: 'Recusado',
    },
  ];

  const students2 = [
    {
      id: faker.datatype.uuid(),
      name: 'Carlos',
      status: 'Matriculado',
    },
    {
      id: faker.datatype.uuid(),
      name: 'Otávio',
      status: 'Matriculado',
    },
    {
      id: faker.datatype.uuid(),
      name: 'Ronald',
      status: 'Aguardando',
    },
    {
      id: faker.datatype.uuid(),
      name: 'Ana',
      status: 'Recusado',
    },
  ];

  const [data, setData] = useState([
    {
      id: faker.datatype.uuid(),
      title: 'Aplicações do FakerJS no dia a dia',
      category: 'Tech',
      description:
        'Nesse curso você vai aprender a aplicar o FakerJs no seu dia a dia como um programador front-end.',
      rating: 4,
      sections: [
        {
          name: 'Fundamentos do Faker',
          description:
            'Fundamentos basicos da lib do faker para uso no dia a dia',
        },
      ],
      students: students2,
      commentaries,
    },
    {
      id: faker.datatype.uuid(),
      title: 'React Hooks na prática',
      category: 'Tech',
      description:
        'Esse curso explica como usar as ferramentas poderosas que o React oferece, os seus Hooks.',
      rating: 4.5,
      sections: [
        {
          name: 'Fundamentos dos Hookes',
          description: 'Fundamentos basicos dos hooks para uso no dia a dia',
        },
        {
          name: 'UseEffect e sua utilização',
          description:
            'Como o UseEffect funciona e como ele pode aumentar seu desempenho',
          extras:
            'Procure a documentação do useEffect para aumentar seu conhecimento',
        },
      ],
      students: students2,
      commentaries,
    },
    {
      id: faker.datatype.uuid(),
      title: 'Axios para conexão a API',
      category: 'Tech',
      description:
        'Você vai aprender com esse curso como fazer uma conexão poderosa com a API utilizando a lib Axios.',
      rating: 5,
      sections: [
        {
          name: 'Fundamentos do Axios',
          description:
            'Explicação básica de como o Axios pode auxiliar no dia a dia conectando back-end e front-end',
        },
      ],
      students,
      commentaries,
    },
    {
      id: faker.datatype.uuid(),
      title: 'Configurando Eslint e Prettier',
      category: 'Tech',
      description:
        'Eslint e Prettier são duas ferramentas de padronização de código muito úteis no seu dia a dia. Descubra como.',
      rating: 3.5,
      sections: [
        {
          name: 'O que é Eslint e Prettier?',
          description: 'Vamos descobrir o que é o Eslint e prettier.',
        },
        {
          name: 'Configuraçṍes do Eslint',
          description: 'Vamos aprender como configurar corretamente o eslint',
          extras:
            'Tudo sobre configurações do eslint você pode encontrar na documentação oficial',
        },
        {
          name: 'Configuraçṍes do Prettier',
          description: 'Vamos aprender como configurar corretamente o prettier',
          extras:
            'Tudo sobre configurações do prettier você pode encontrar na documentação oficial',
        },
      ],
      students,
      commentaries,
    },
  ]);

  const AddCommentarie = useCallback(
    (newData) => {
      const newCommentarieArray = [...commentaries, newData];
      setCommentaries(newCommentarieArray);
    },
    [commentaries]
  );

  const AddTeacherPost = useCallback(
    (newData) => {
      const newTeacherPostArray = [...teacherPost, newData];
      setTeacherPost(newTeacherPostArray);
    },
    [teacherPost]
  );

  const AddData = useCallback(
    (newData) => {
      const id = faker.datatype.uuid();
      newData.id = id;
      newData.rating = 0;
      const newDataArray = [...data, newData];
      setData(newDataArray);
    },
    [data]
  );

  const RemoveData = useCallback(
    (id) => {
      const deletedDataArray = data.filter((item) => item.id !== id);
      setData(deletedDataArray);
    },
    [data]
  );

  const EditData = useCallback(
    (id, values, rating) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          data[i] = {
            rating,
            ...values,
          };
          return;
        }
      }
    },
    [data]
  );

  const EditStudent = useCallback(
    (id, values, name) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
          students[i] = {
            name,
            status: values,
          };
          return;
        }
      }
    },
    [students]
  );

  const EditStudent2 = useCallback(
    (id, values, name) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < students2.length; i++) {
        if (students2[i].id === id) {
          students2[i] = {
            name,
            status: values,
          };
          return;
        }
      }
    },
    [students2]
  );

  return (
    <ClassContext.Provider
      value={{
        classes: data,
        AddData,
        RemoveData,
        EditData,
        EditStudent,
        AddCommentarie,
        commentaries,
        AddTeacherPost,
        teacherPost,
        students,
        students2,
        EditStudent2,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};

function useClass() {
  const context = useContext(ClassContext);

  if (!context) {
    throw new Error('useClass must be used within an AutoProvider');
  }

  return context;
}

export { ClassProvider, useClass };
