import axios from 'axios'
import { useState } from 'react'


export const useDeploy = () => {
  const [code, update] = useState<string | undefined>(`function run() {
        return 'Hello World'
}

run()`)

  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const deploy = async () => {
    if (!code) {
      alert('Write some code..')
      return
    }
    setLoading(true)
    try {
      const { data } = await axios.post(import.meta.env.VITE_API, code, {
        headers: {
          'Content-Type': 'text/plain',
        },
      })
      setOutput(data)
    } catch (error: any) {
      console.log(error)

      setOutput(error.message)
    }
    setLoading(false)
  }

  return { code, loading, update, output, deploy }
}
