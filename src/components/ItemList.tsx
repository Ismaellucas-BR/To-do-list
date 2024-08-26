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
      <div className="flex items-center justify-center gap-2 text-white font-inter text-sm">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => onCheckboxChange(id, e.target.checked)}
        />
        <label htmlFor={`task-${id}`} className={completed ? 'line-through' : ''}>
          {title}
        </label>
        <img 
            onClick={()=>onDelete(id)}
            src={Trash} alt="Icone de lixeira" />
      </div>
    );
  }
  
  export default ItemList;
  