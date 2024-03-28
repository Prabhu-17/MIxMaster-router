import axios from "axios";
import { useLoaderData } from "react-router-dom"
import CocktailList from "../Components/CocktailList";
import SearchForm from "../Components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const searchCocktailquery=(searchTerm)=>{
    return {
      queryKey:['search',searchTerm||'all'],
      queryFn:async()=>{
          const response=await axios.get(`${cocktailSearchUrl}${searchTerm}`)
          return response.data.drinks
      }
    }
  }
export const loader=(queryClient)=>async({request})=>{
  const url=new URL(request.url)
  const searchTerm=url.searchParams.get('search')||''
  await queryClient.ensureQueryData(searchCocktailquery(searchTerm))
  return{searchTerm}
}

const Landing = () => {
  const {searchTerm}=useLoaderData();
  const {data:drinks}=useQuery(searchCocktailquery(searchTerm))
  return (<div>
    <SearchForm searchTerm={searchTerm}/>
    <CocktailList drinks={drinks}/>
  </div>
  )
}
export default Landing