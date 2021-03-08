import React, { useState } from 'react'
const fs = require('fs')

export default function Home() {
  const [select, setSelect] = useState('')

  function setEnv(val) {
    const { name, value } = val.target
    const env = JSON.stringify({
      [name]: value,
      prod: {
        bank: 'brm1',

        api_base_url: '',

        client_id: '',
        client_secret: '',

        username: '',
        password: '',

        oauth_client: ''
      },
      homo: {
        bank: 'brm1',

        api_base_url: '',

        client_id: '',
        client_secret: '',

        username: '',
        password: '',

        oauth_client: ''
      }
    })
    console.log(JSON.parse(env)[value])
  }

  return (
    <>
      <div>
        <select name="run_start" onChange={setEnv}>
          <option></option>
          <option value="homo">Homologação</option>
          <option value="prod">Produção</option>
        </select>
        {select}
      </div>
    </>
  )
}
