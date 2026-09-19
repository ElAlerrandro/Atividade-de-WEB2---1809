import React from 'react'

function TaskItem({
  id,
  titulo,
  concluida,
  alternarTarefa,
  excluirTarefa
}) {
  return (
    <li>
      <h3>{titulo}</h3>

      <p>
        Status: {concluida ? "Concluída" : "Pendente"}
      </p>

      {!concluida && (
        <button onClick={() => alternarTarefa(id)}>
          Concluir
        </button>
      )}

      <button onClick={() => excluirTarefa(id)}>
        Excluir
      </button>
    </li>
  )
}

export default TaskItem
