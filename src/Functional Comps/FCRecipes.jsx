import FCRecipe from "../Functional Comps/FCRecipe"

export default function FCRecipes (props) {

    const getIDFromRecipe=(id2Eat) =>{
        props.sendID2EatFromRecipeLIST(id2Eat);
    }

    let recipesStr=props.RecipesList.map((Recipe) => {
    return <FCRecipe id={Recipe.id}
     img={Recipe.img}
     name={Recipe.name}
     details={Recipe.details}
     key={Recipe.id}
     button={props.button}//to chang the button name
     sendId2Father={getIDFromRecipe}
     />
    })

    return(
        <div>
            <div className="recipesDiv">
             {recipesStr}
          </div>
        </div>
    )
}