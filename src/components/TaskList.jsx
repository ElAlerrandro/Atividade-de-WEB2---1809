import React from 'react'
import TaskItem from './TaskItem'

function TaskList({
  tarefas,
  alternarTarefa,
  excluirTarefa
}) {
  return (
    <div>
      <h2>Lista de tarefas</h2>

      <ul>
        {tarefas.map((tarefa) => (
          <TaskItem
            key={tarefa.id}
            id={tarefa.id}
            titulo={tarefa.titulo}
            concluida={tarefa.concluida}
            alternarTarefa={alternarTarefa}
            excluirTarefa={excluirTarefa}
          />
        ))}
      </ul>
    </div>
  )
}

export default TaskList
