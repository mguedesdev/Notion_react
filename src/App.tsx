function App() {

  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-rose-400 to-orange-300">
      <div className=" bg-white w-[1100px] mx-auto rounded-xl min-h-[700px] shadow-md border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r-zinc-100 p-4 shadow-md">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400 duration-200"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400 duration-200"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400 duration-200"></button>
          </div>
        </aside>
        <main></main>
      </div>
    </div>
  )
}

export default App
