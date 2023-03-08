import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQueries = () => {
  const { data: SuperHeroes } = useQuery("super-heroes", fetchSuperHeros);
  const { data: friends } = useQuery("friends", fetchFriends);
};

export default ParallelQueries;
