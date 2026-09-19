import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskSummary from './components/TaskSummary'

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: "Estudar React",
      concluida: false
    },
    {
      id: 2,
      titulo: "Estudar back-end",
      concluida: false
    },
    {
      id: 3,
      titulo: "Estudar APS",
      concluida: false
    },
    {
      id: 4,
      titulo: "Estudar Probabilidade",
      concluida: false
    }
  ])

  function alternarTarefa(id) {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id
          ? {
              ...tarefa,
              concluida: !tarefa.concluida
            }
          : tarefa
      )
    )
  }

  function excluirTarefa(id) {
    setTarefas((prevTarefas) =>
      prevTarefas.filter(
        (tarefa) => tarefa.id !== id
      )
    )
  }

  const total = tarefas.length

  const concluidas = tarefas.filter(
    (tarefa) => tarefa.concluida
  ).length

  const pendentes = tarefas.filter(
    (tarefa) => !tarefa.concluida
  ).length

  return (
    <div>
      <Header />

      <TaskSummary
        total={total}
        concluidas={concluidas}
        pendentes={pendentes}
      />

      {pendentes > 0 ? (
        <p>Você ainda possui tarefas pendentes.</p>
      ) : (
        <p>
          Parabéns! Todas as tarefas foram concluídas!
        </p>
      )}

      <TaskList
        tarefas={tarefas}
        alternarTarefa={alternarTarefa}
        excluirTarefa={excluirTarefa}
      />
    </div>
  )
}

export default App
