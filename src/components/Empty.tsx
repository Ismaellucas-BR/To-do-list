import Clipboard from "../assets/Clipboard.svg"

function Empty() {
  return (
    <section className="flex flex-col justify-center items-center w-[46rem] text-gray-30 font-inter pt-16 border-t border-gray-30 rounded-tr-lg rounded-tl-lg">
        <img src={Clipboard} alt="Icone de prancheta" />
        <strong className="mt-4">Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
  )
}

export default Empty