import React, { useState, useEffect } from "react";
import TarefaCard from "../TarefaCard";
import Api from '../../../api/api'

const ListTarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    getTarefas();
  }, []);

  const getTarefas = async () => {
    const request = await Api.fetchGetAll();
    const data = await request.json();

    setTarefas(data);
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
      {tarefas.map((tarefa) => (
        <TarefaCard data={tarefa} key={tarefa._id} />
      ))}
    </div>
  );
};

export default ListTarefas;