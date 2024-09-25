import Trash from "../assets/trash.svg"
interface ItemListProps {
    id: number;
    title: string;
    completed: boolean;
    onCheckboxChange: (id: number, checked: boolean) => void;
    onDelete: (id: number) => void;
  }
  
  function ItemList({ id, title, completed, onCheckboxChange, onDelete }: ItemListProps) {
    return (
      <div 
        className="flex items-center justify-center gap-2 bg-gray-50 
        text-white font-inter text-sm p-5 rounded-lg border border-[#333333]"
      >
        <input
          type="checkbox"
          checked={completed}
          className="appearance-none h-6 w-6 border-2 border-blue rounded-full checked:bg-purple text-center
           checked:border-purple focus:outline-none focus:ring-2 checked:text-white checked:before:content-['✓']"
          onChange={(e) => onCheckboxChange(id, e.target.checked)}
        />
        <label 
          htmlFor={`task-${id}`} 
          className={
            completed ?  
            'line-through font-inter text-sm font-bold' : 
            'font-inter text-sm font-bold'
            }>
          {title}
        </label>
        <img 
            onClick={()=>onDelete(id)}
            src={Trash} 
            className="hover:cursor-pointer"
            alt="Icone de lixeira" />
      </div>
    );
  }
  
  export default ItemList;
  