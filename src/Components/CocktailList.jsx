import Wrapper from "../assets/wrappers/CocktailList"
import CocktailCard from "./CocktailCard"

const CocktailList = ({drinks}) => {
    if(!drinks){
        return <h4 style={{textAlign:"center"}}>There is no matching drinks found</h4>
    }
    const formattedDrinks=drinks.map((item)=>{
        const {strDrink,idDrink,strAlcoholic,strGlass,strDrinkThumb}=item
        return {
            id:idDrink,
            name:strDrink,
            image:strDrinkThumb,
            info:strAlcoholic,
            glass:strGlass,
        }
    })

  return (
    <Wrapper>
        {formattedDrinks.map((item)=>{
            return <CocktailCard key={item.id}{...item}/>
        })}
    </Wrapper>
  )
}
export default CocktailList