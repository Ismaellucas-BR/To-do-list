import Logo from '../assets/Logo.png'
function Header() {
  return (
    <header className="max-w-[1440px] bg-gray-70 flex flex-col items-center">
        <img src={Logo} alt="Logo escrito 'to do'" />
        <form>
            <textarea name="toDoCreateItem" placeholder='Adicione uma nova tarefa' id=""></textarea>
            <button type="submit">Criar</button>
        </form>
    </header>
  )
}

export default Header