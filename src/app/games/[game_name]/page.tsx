'use client' // Component-component rendering

import { useState, useEffect, use } from 'react'
import { submitForm } from './action'

interface MockTest {
  "createdAt": Date
    "name": string
    "avatar": string
    "email": string
    "id": number
}

async function getTest(): Promise<MockTest[]> {
  const response = await fetch("https://67f8eedb094de2fe6e9fd0b8.mockapi.io/test-mock")

  if (!response.ok) {
      throw new Error("cannot fetch test-mock")
  }

  return response.json()
}

export default function IndividualGamesPage({  params, } : {
    params: Promise<{ game_name: string }>
}) {
    const { game_name } = use(params)

    const [ mockState, setMockState ] = useState<MockTest[]>([])
    const initMock = async () => {
      try {
        const results = await getTest()
        setMockState(results)
      } catch (error) {
        console.log('error', error)
      }
    }
    useEffect(() => {
      initMock()
      console.log('use effect')
    }, [])

    console.log(mockState)

    return (
      <div>
        Game: { game_name }
        {
          mockState.map((mock, index) => (
            <div key={mock.id}>
              { mock.name } { mock.email }
            </div>
          ))
        }

        <form action={submitForm}>
          Email <input name="email" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
  