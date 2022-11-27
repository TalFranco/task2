import { render } from '@testing-library/react';
import { Component } from "react";
import FCRecipes from '../Functional Comps/FCRecipes';

//initialization of the recipes
var InitRecipesList=[
{id:1,img:"https://glebekitchen.com/wp-content/uploads/2016/11/easypadthaibowltop-1-500x500.jpg" ,name:'Pad Thai',details:'stir-fry dish, mix all ingredients together', button:""},
{id:2, img:"https://kirbiecravings.com/wp-content/uploads/2020/04/chop-suey-5.jpg", name:'Chop Suey', details:'5 minute stir fry,add each vegetable in the order in which they cook', button:"" }, 
{id:3, img:"https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe.jpg", name:'Spring roll', details:'crispy and tender vegetarian appetizer cousin', button:"" }, 
]

export default class CCMyKitchen extends Component{
  
   constructor(props){
    super(props);

    this.state={
      RecipesList:InitRecipesList,
      Ready2EatList:[]
    };
   }
   
   moveRecipeToEat=(id)=>{
    let tempPrep=this.state.RecipesList.filter(recipe=>recipe.id!==id);//take out the choosen

    let temp2Eat=this.state.RecipesList.filter(recipe=>recipe.id==id);//take the choosen
    let tempEat=[...this.state.Ready2EatList]
    tempEat.push(temp2Eat[0]);

    this.setState({
      RecipesList:tempPrep,
      Ready2EatList:tempEat
    })
   }

   moveRecipeToPrep=(id)=>{
    let temp2Eat=this.state.Ready2EatList.filter(recipe=>recipe.id!==id);//take out the choosen
    
    let tempPrep=this.state.Ready2EatList.filter(recipe=>recipe.id==id);//take the choosen
    let tempPrep2=[...this.state.RecipesList];
    tempPrep2.push(tempPrep[0]);
    
    this.setState({
      RecipesList:tempPrep2,
      Ready2EatList:temp2Eat
    })
   }

  render(){
    const Ready2EatList=this.state.Ready2EatList;
    const RecipesList=this.state.RecipesList;

    let EatnumDiv;
    let upperTitle="Recipes made :";
    let lowerTitle;

    //if not null show the titles
    if (Ready2EatList!=0){
      lowerTitle="Ready to EAT!"
      EatnumDiv="Recipes made: "+ Ready2EatList.length; 
    } 
    
        
    //if  null hide the titles
    if(RecipesList==0){
      upperTitle=""
    }

  return (
    <div className='header'>
      <h2>O&T resturant</h2>
      <div><h6>{upperTitle}</h6>
      <FCRecipes RecipesList={this.state.RecipesList} button={'Prepare dish'} sendID2EatFromRecipeLIST={this.moveRecipeToEat}/>
      </div>

      <hr></hr>
      
      <div>
      <h2>{lowerTitle}</h2>
      {EatnumDiv}
      <FCRecipes RecipesList={this.state.Ready2EatList}  button={'bon appétit'} sendID2EatFromRecipeLIST={this.moveRecipeToPrep}/>
      </div>
      
    </div>
  );
  }
}

