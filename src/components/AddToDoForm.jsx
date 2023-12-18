



const AddToDoForm = () => {
    return ( 
      <form className="flex space-x-3">
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-200"
        placeholder="Ajouter"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
      >
        Ajouter
      </button>
    </form>
    )
}

export default AddToDoForm