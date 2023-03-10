import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllGames } from "../store/actions/games.actions";
import { useRouter } from "next/router";
import GamesPage from "./games";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const steamtracker = useSelector((state) => state.steamtracker);
  const { games } = steamtracker;

  useEffect(() => {
    dispatch(fetchAllGames());
  }, [dispatch]);

  useEffect(() => {
    if (games && Object.keys(games).length > 0) {
      router.push("/games");
    }
  }, [games]);

  return <GamesPage />;
}
