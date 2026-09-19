import React from 'react'

function TaskSummary({
  total,
  concluidas,
  pendentes
}) {
  return (
    <div>
      <h2>Resumo</h2>
      <p>Total: {total}</p>
      <p>Concluídas: {concluidas}</p>
      <p>Pendentes: {pendentes}</p>
    </div>
  )
}

export default TaskSummary