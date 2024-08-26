import { FormEventHandler } from 'react';
import Logo from '../assets/Logo.png';
import CirclePlus from '../assets/iconPlus.svg';

interface HeaderProps {
  onCreateItem: FormEventHandler<HTMLFormElement>;
  inputValue: string;
  setInputValue: (value: string) => void;
}

function Header({ onCreateItem, inputValue, setInputValue }: HeaderProps) {
  return (
    <header className="lg:max-w-[1440px] lg:h-[200px] bg-gray-70 flex flex-col items-center justify-end">
      <img src={Logo} className='mb-14' alt="Logo escrito 'to do'" />
      <form onSubmit={onCreateItem} className='flex justify-center w-[46rem] items-center gap-2 font-inter mb-[-2rem] text-white'>
        <input
          name="toDoCreateItem"
          placeholder='Adicione uma nova tarefa'
          id=""
          className='w-[736px] bg-gray-50 placeholder:flex placeholder:items-center placeholder:justify-center h-[54px] rounded-lg border border-gray-70 p-4'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className='text-white flex justify-center items-center bg-blue-dark rounded-lg h-[52px] p-4 gap-2'>
          Criar <img src={CirclePlus} alt="" />
        </button>
      </form>
    </header>
  );
}

export default Header;
