import { useDeploy } from './deploy'
import Editor from '@monaco-editor/react'

function App() {
  const { code, update, output, deploy, loading } = useDeploy()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      <div className="col-span-2 col-start-1 md:col-start-2">
        <img src="dinasaur.webp" alt="Dinaseur" className="h-60 mx-auto" />
        <h1 className="text-center font-black text-3xl">DinooBox</h1>
        <h2 className="uppercase font-light text-center">
          I'm Sandbox as a Service, I execute Code!
        </h2>
        <h3 className="uppercase font-medium text-center text-blue-500">
          <a href="/index.txt" target="_blank">
            I am open source, read me!
          </a>
        </h3>
        <div className="px-10 pt-10">
          <div className="bg-[#1c1c1c] py-4">
            <Editor
              height="200px"
              theme="vs-dark"
              language="javascript"
              value={code}
              onChange={update}
            />
          </div>

          <div className="py-4 flex justify-end w-full">
            <button
              onClick={deploy}
              disabled={loading}
              className="px-3 py-2 rounded-md text-white font-medium disabled:bg-red-300 disabled:hover:bg-red-300 bg-red-500 hover:bg-red-600 duration-300"
            >
              {loading ? 'Loading' : 'Deploy'}
            </button>
          </div>
        </div>
        <div className="px-10 pb-10">
          <h2 className="py-2">Output</h2>
          <div className="border border-black/50 rounded-md p-4">
            <p className="text-gray-500">{output ? output : 'No Output'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
