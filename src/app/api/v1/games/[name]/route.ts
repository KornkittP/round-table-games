export async function GET(
    request: Request, 
    { params }: {
        params: Promise<{ name: string }>
    }
) {
    const { name } = await params
    console.log(name)
    return Response.json({
        gameName: name,
        yeah: "Yeah!"
    })
}