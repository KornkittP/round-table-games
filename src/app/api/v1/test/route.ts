async function getTest() {
    const response = await fetch("https://67f8eedb094de2fe6e9fd0b8.mockapi.io/test-mock")

    if (!response.ok) {
        throw new Error("cannot fetch test-mock")
    }

    return response.json()
}

export async function GET() {
    console.log("test")
    return Response.json({
        name: "Gu dai laew woii"
    })
}