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

export default async function TestPage() {
    const mocks = await getTest()
    console.log("mocks: ", mocks)

    return (
      <div>
        Test page
        {
          mocks.map((mock, index) => (
            <div key={mock.id}>
              { mock.name } { mock.email }
            </div>
          ))
        }
      </div>
    );
  }
  