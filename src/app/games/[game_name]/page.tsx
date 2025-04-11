export default async function IndividualGamesPage({ params, } : {
    params: Promise<{ game_name: string }>
}) {
    const { game_name } = await params
    return (
      <div>
        Game: { game_name }
      </div>
    );
  }
  