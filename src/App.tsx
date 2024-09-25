import { FormEvent, useState } from 'react';
import Empty from "./components/Empty";
import Header from "./components/Header";
import ItemList from './components/ItemList';

interface Item {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const [completedCount, setCompletedCount] = useState(0);
  const [nextId, setNextId] = useState(4);
  const [inputValue, setInputValue] = useState('');

  function handleCreateItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newItem: Item = {
      id: nextId,
      title: inputValue,
      completed: false,
    };

    setItems(prevItems => [...prevItems, newItem]);
    setNextId(prevId => prevId + 1);
    setInputValue('');
  }

  function handleCheckboxChange(id: number, checked: boolean) {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: checked } : item
      )
    );

    if (checked) {
      setCompletedCount(prevCount => prevCount + 1);
    } else {
      setCompletedCount(prevCount => prevCount - 1);
    }
  }
  function handleDeleteItem(id:number){
    setItems(prevItems=>prevItems.filter(item=>item.id !==id))
  }

  return (
    <>
      <Header onCreateItem={handleCreateItem} inputValue={inputValue} setInputValue={setInputValue} />
      <main className="flex flex-col items-center justify-center bg-gray-60 font-inter pt-16 lg:mt-16">
        <div className="flex justify-between text-white w-full lg:w-[46rem] pb-6 p-5">
          <div className="flex items-end gap-2 font-inter font-bold text-sm">
            <span className="text-blue">Tarefas criadas</span> 
            <span className="bg-gray-40 px-2 py-1 rounded-full">{items.length}</span>
          </div>
          <div className="flex items-end gap-2 font-inter font-bold text-sm">
            <span className="text-purple-dark">Concluídas</span> 
            <span className="bg-gray-40 px-2 py-1 rounded-full">
            {items.length === 0 
              ? '0' 
              : items.filter(item => item.completed).length <= 1 
                ? `${items.filter(item => item.completed).length}` 
                : `${items.filter(item => item.completed).length} de ${items.length}`}
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          {items.length === 0 ? (
            <Empty />
          ) : (
            items.map(item => (
              <ItemList 
                key={item.id}
                id={item.id}
                title={item.title}
                completed={item.completed}
                onCheckboxChange={handleCheckboxChange}
                onDelete={handleDeleteItem}
              />
            ))
          )}
        </div>
      </main>
    </>
  );
}

export default App;
