import styles from './Description.module.css';
import React from 'react';

 // create global variable here and use it inside of RecipeDescription class
let recipetitle = "Recipes";
let recipeShortDescription = "Find and share everyday cooking inspiration on Allrecipes. Discover recipes, cooks, videos, and how-tos based on the food you love and the friends you follow."

const RecipeAuthor = () =>{
    let authorLink = "https://www.allrecipes.com/recipes/";
    let authorPhoto = "https://www.allrecipes.com/thmb/L9Mbf2Sfl6B8mvwPdqBb4UKGuUg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/molly-fergus-about-us-29c055640c1845d78cebf8363a223a63.jpg";
    let authorName = "Molly Fergus";
    return(  
    <div className = {styles.recipeAuthorBlock}>
        <img 
            src={authorPhoto} 
            alt = {authorName} 
            className={styles.imageUpdates} />
        <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Allrecipes kitchen</a> 
        </div>
    </div>
);  
};

class RecipeDescription extends React.Component {
    render(){
        return(
        <div> 
            <div>
                <h1>{recipetitle}</h1>
                <p>{recipeShortDescription}</p>
            </div>
            <RecipeAuthor />
        </div>
        )
    }
}
export default RecipeDescription;