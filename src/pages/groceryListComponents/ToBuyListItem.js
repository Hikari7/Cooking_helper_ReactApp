export default function ToBuyListItem({
  list,
  text,
  handleCompleted,
  handleDelete,
  handleEdit,
}) {
  return (
    <div className={list.completed ? "completed" : ""}>　//tailwindでつける
      <div className="mx-auto justify-center flex items-center my-2 w-2/4">
        <span
          className="material-symbols-outlined items-center cursor-pointer hover:opacity-30"
          checked
          onClick={() => handleCompleted(list)}
        >
          done
        </span>
        <div className="bg-orange-300 p-2 w-full tracking-wider rounded-md">
          {text}
        </div>
        <span
          className="material-symbols-outlined items-center cursor-pointer hover:opacity-30"
          onClick={() => handleDelete(list)}
        >
          delete
        </span>
        <span
          className="material-symbols-outlined items-center cursor-pointer hover:opacity-30"
          onClick={() => handleEdit(list)}
        >
          edit
        </span>
      </div>
    </div>
  );
}
