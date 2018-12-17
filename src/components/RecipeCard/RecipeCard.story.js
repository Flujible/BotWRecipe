import React from "react";
import { storiesOf, action, withInfo} from "../../stories";

import RecipeCard from "./RecipeCard/RecipeCard";
 
const attributes = { Title: 2.25,    Value: 1,
Duration: 1};

storiesOf("RecipeCard", module)
    .addDecorator((story, context) => 
        withInfo(RecipeCard.description)(story)(context),
    )
    //TODO finish this
    .add("Pimpkin Stew", () => <RecipeCard />)