use foods;

db.dropDatabase();

db.recipes.insertMany([

  {
    id: 1,
    recipe_name: "Honeyed carrot & thyme loaf",
    ingredients:
    [
      "1 tbsp honey",
      "1 tsp coconut oil or olive oil, plus 1 tbsp (if using coconut oil, melt in the microwave before using)",
      "4 carrots peeled and grated (around 300g)",
      "2 tsp dried thyme",
      "100g wholemeal flour",
      "125g plain flour",
      "¾ tsp baking powder",
      "¾ tsp bicarbonate of soda",
      "3 eggs",
      "50g natural yogurt",
      "chutney cheddar, cream cheese or honey, to serve"

    ],

    prep_time: 20,
    cook_time: 60,
    servings: 12,

    nutritional_information:
    {
      kcal: 112,
      fat: "2g",
      saturates: "1g",
      carbs: "17g"
    },

    diet:[
      "vegetarian"
    ],

    cook_method: "Heat oven to 180C/160C fan/gas 4. Mix the honey and 1 tsp oil, then add the carrot and thyme. Season and stir well. Tip onto a baking tray and roast for 10-15 mins, tossing halfway through cooking. Remove from the oven and set aside to cool slightly. Meanwhile, combine the flours, baking powder, bicarb and a pinch of salt. In a separate bowl, lightly beat the eggs, yogurt and remaining oil. Add the flour mix, then fold in the roasted carrot mix. Pour into a lined 900g loaf tin and bake for 50 mins-1 hr. Leave to cool before slicing. To serve, top with chutney and cheddar, cream cheese or honey.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/12/reader-recipe.jpg?itok=jaOh0oQI"

  },

  {
    id: 2,
    recipe_name: "Dairy-free pancakes",
    ingredients:
    [
      "125g plain flour",
      "1 egg",
      "300ml hemp or coconut milk(see tip)",
      "sunflower or rice bran oil, for frying"
    ],

    prep_time: 5,
    cook_time: 25,
    servings: 8,

    nutritional_information:
    {
      kcal: 90,
      fat: "3.2g",
      saturates: "0.5g",
      carbs: "12.6g"
    },

    diet:[
      "dairy-free"
    ],

    cook_method: "Put the flour in a bowl and make a well in the centre. Crack the egg in the middle and pour in a quarter of the milk. Use an electric or balloon whisk to thoroughly combine the mixture. Once you have a paste, mix in another quarter and once lump free, mix in the remaining milk. Leave to rest for 20 mins. Stir again before using. Heat a small, non-stick frying pan with a splash of oil. When hot, pour a small amount of the mixture into the pan and swirl around to coat the base – you want a thin layer. Cook for a few mins until golden brown on the bottom, then turn over and cook until golden on the other side. Repeat until you have used all the mixture, stirring the mixture in between pancakes and adding more oil for frying as necessary. Pile the pancakes up between sheets of baking parchment or cook to order. Serve with the pancake filling of choice.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1213474_11.jpg?itok=Z9cpU9id"

  },
  {

    id: 3,
    recipe_name: "Florentine dairy-free pizza",
    ingredients:
    [
      "2 tbsp olive oil, plus extra for drizzling",
      "2 garlic cloves, sliced",
      "400g can chopped tomatoes",
      "400g frozen spinach, defrosted",
      "toppings of your choice- anchovies, olives, capers, pepperoni, artichoke hearts, grilled peppers",
      "2 eggs",
      "small handful basil leaves",
      "2 handfuls of rocket",
      "juice ½ lemon",
      "350g strong white flour",
      "7g sachet fast-action dried yeast",
      "1 tbsp coarse or fine semolina"
    ],

    prep_time: 25,
    cook_time: 20,
    servings: 2,

    nutritional_information:
    {
      kcal: 827,
      fat: "17g",
      saturates: "2g",
      carbs: "140g"
    },

    diet:[
      "dairy-free"
    ],

    cook_method: "To make the base, tip the flour into the bowl of a table-top mixer (or food processor with a dough attachment). Add 1 tsp salt to one side of the bowl and the yeast to the other. Add 275ml lukewarm water and mix on slow until a sticky dough forms. Turn up the mixer for 5-6 mins until an indent pushed into the dough pops out quickly. Put the dough in a lightly oiled bowl, then cover and leave in a warm place to prove until doubled in size.Meanwhile, heat the oil in a frying pan and sizzle the garlic for a few secs, then tip in the tomatoes, season and simmer for 5 mins until the sauce has thickened.Heat oven to 220C/200C fan/gas 7. Knead the dough for a few mins, then halve and roll each half as thinly as possible. Lay each base on a baking sheet dusted with the semolina. Divide the tomato sauce between the pizzas, spreading almost to the edge. Dot over the spinach, add your toppings and drizzle with a little oil. Cook for 5 mins, then crack an egg onto each pizza. Swap the baking sheets, then cook for 10 mins more or until bases are cooked through. Drizzle the basil and rocket with a drop of oil and the lemon juice. Scatter over the pizza before eating.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--871471_11.jpg?itok=cLyKpRB2"

  },

  {
    id: 4,
    recipe_name: "Dairy-free Slaw",
    ingredients:
    [
      "¼ white cabbage (roughly 200g), finely sliced",
      "¼ red cabbage(roughly 200g), finely sliced",
      "2 medium carrots (roughly 200g), grated",
      "½ red onion, finely sliced",
      "2 tbsp lemon juice",
      "2 tsp good quality Dijon mustard",
      "4 tbsp extra virgin olive oil or rapeseed oil"

    ],

    prep_time: 15,
    cook_time: 0,
    servings: 4,

    nutritional_information:
    {
      kcal: 107,
      fat: "8g",
      saturates: "1g",
      carbs: "6g"
    },

    diet:[
      "dairy-free"
    ],

    cook_method: "Place all the ingredients for the dressing in a bowl and whisk, or shake in a jar. Pour the dressing over the vegetables and mix together thoroughly.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/03/dairy-free-slaw.jpg?itok=BGjQTRaD"

  },

  {
    id: 5,
    recipe_name: "Crispy chilli beef",
    ingredients:
    [
      "350g thin-cut minute steak, very thinly sliced into strips",
      "3 tbsp cornflour",
      "2 tsp Chinese five-spice powder",
      "100ml vegetable oil",
      "1 red pepper, thinly sliced",
      "1 red chilli, thinly sliced",
      "4 spring onions, sliced, green and white parts separated",
      "2 garlic cloves, crushed",
      "thumb-sized piece ginger, cut into matchsticks",
      "4 tbsp rice wine vinegar or white wine vinegar",
      "1 tbsp soy sauce",
      "2 tbsp sweet chilli sauce",
      "2 tbsp tomato ketchup",
      "cooked noodles, to serve (optional)",
      "prawn crackers, to serve (optional)"

    ],

    prep_time: 25,
    cook_time: 15,
    servings: 3,

    nutritional_information:
    {
      kcal: 454,
      fat: "23g",
      saturates: "5g",
      carbs: "32g"
    },

    diet:[
      "meat"
    ],

    cook_method: "Put 350g thin-cut minute steak strips in a bowl and toss in 3 tbsp cornflour and 2 tsp Chinese five-spice powder. Heat 100ml vegetable oil in a wok or large frying pan until hot, then add the beef and fry until golden and crisp. Scoop out the beef and drain on kitchen paper. Pour away all but 1 tbsp oil. Add 1 thinly sliced red pepper, ½ thinly sliced red chilli, sliced white ends of 4 spring onions, 2 crushed garlic cloves and thumb-sized piece ginger, cut into matchsticks, to the pan. Stir-fry for 3 mins to soften, but don’t let the garlic and ginger burn. Mix the 4 tbsp rice wine vinegar or white wine vinegar, 1 tbsp soy sauce, 2 tbsp sweet chilli sauce and 2 tbsp tomato ketchup in a jug with 2 tbsp water, then pour over the veg. Bubble for 2 mins, then add the beef back to the pan and toss well to coat. Serve the beef on noodles with prawn crackers, if you like, scattered with the remaining ½ sliced red chilli and sliced green parts of the spring onions.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1176635_11.jpg?itok=F7bY6fFH"

  },

  {
    id: 6,
    recipe_name: "One-pan prawn pilau",
    ingredients:
    [
      "2 tbsp korma curry paste (Patak's is good)",
      "1 small onion, finely chopped",
      "300g basmati rice, rinsed and drained",
      "700ml chicken stock made from a cube",
      "150g pack cooked peeled prawns, defrosted if frozen",
      "cupful frozen peas",
      "1 red chilli, sliced into rings",
      "handful coriander leaves, chopped",
      "lemon wedges, to serve"
    ],

    prep_time: 25,
    cook_time: 20,
    servings: 4,

    nutritional_information:
    {
      kcal: 340,
      fat: "3g",
      saturates: "1g",
      carbs: "65g"
    },

    diet:[
      "meat"
    ],

    cook_method: "Heat a large wide pan and dry-fry the curry paste with the onions for 4-5 mins until the onion begins to soften. Add the rice to the pan and stir to coat in the curry paste. Add the stock, then bring to the boil. Cover the pan and turn the heat down to low. Leave the rice to simmer slowly for 12-15 mins until all the liquid has been absorbed and the rice is cooked. Turn off the heat and stir in the prawns, peas and chilli. Cover the pan and leave to stand for 5 mins. Fluff up the rice grains with a fork and season if you want. Scatter over the coriander and serve with lemon wedges.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/03/dairy-free-slaw.jpg?itok=BGjQTRaD"

  },

  {
    id: 7,
    recipe_name: "Chicken arrabbiata",
    ingredients:
    [
      "3 tbsp olive oil",
      "2 medium onions, halved and sliced",
      "1 garlic bulb, separated into cloves",
      "2 red chillies, deseeded and sliced",
      "350ml red wine",
      "350ml chicken stock",
      "600g tomato, finely chopped",
      "3 tbsp tomato purée",
      "2 tsp chopped thyme",
      "6 skinless chicken legs",
      "chopped parsley, to serve (optional)",
      "pasta or mash, to serve"
    ],

    prep_time: 25,
    cook_time: 50,
    servings: 6,

    nutritional_information:
    {
      kcal: 327,
      fat: "13g",
      saturates: "3g",
      carbs: "9g"
    },

    diet:[
      "meat"
    ],

    cook_method: "Heat the olive oil in a large heavybased pan. Add the onions and whole garlic cloves. Fry, stirring frequently, for 10 mins, adding the chillies for the final min. Pour in the wine, turn up the heat and allow it to bubble for 1 min to cook off the alcohol. Stir in the stock, tomatoes, tomato purée and thyme with some seasoning. Add the chicken legs, pushing them under the liquid, then part-cover the pan and leave to simmer gently for 45 mins. Remove the lid and cook for a further 15 mins until the chicken is tender and the sauce has reduced a little. Serve scattered with parsley, if you like, and pasta or mash.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1070564_11.jpg?itok=-Y2uaA8u"

  },

  {
    id: 8,
    recipe_name: "Beef stroganoff",
    ingredients:
    [
      "1 tbsp olive oil",
      "1 onion, sliced",
      "1 clove of garlic",
      "1 tbsp butter",
      "250g mushrooms, sliced",
      "1 tbsp plain flour",
      "500g fillet steak, sliced",
      "150g crème fraîche",
      "1 tsp English mustard",
      "100ml beef stock",
      "½ small pack of parsley, chopped"
    ],

    prep_time: 10,
    cook_time: 35,
    servings: 4,

    nutritional_information:
    {
      kcal: 438,
      fat: "31g",
      saturates: "17g",
      carbs: "8g"
    },

    diet:[
      "meat"
    ],

    cook_method: "Heat 1 tbsp olive oil in a non-stick frying pan then add 1 sliced onion and cook on a medium heat until completely softened, around 15 mins, adding a little splash of water if it starts to stick. Crush in 1 garlic clove and cook for 2-3 mins more, then add 1 tbsp butter. Once the butter is foaming a little, add 250g sliced mushrooms and cook for around 5 mins until completely softened. Season everything well, then tip onto a plate. Tip 1 tbsp plain flour into a bowl with a big pinch of salt and pepper, then toss 500g sliced fillet steak in the seasoned flour. Add the steak pieces to the pan, splashing in a little oil if the pan looks dry, and fry for 3-4 mins, until well coloured. Tip the onions and mushrooms back into the pan. Whisk 150g crème fraîche, 1 tsp English mustard and 100ml beef stock together, then stir into the pan. Cook over a medium heat for around 5 mins. Scatter with some chopped parsley, and serve with pappardelle or rice.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/09/beefstroganoff.jpg?itok=H6XBu1VQ"

  },

  {
    id: 9,
    recipe_name: "Black bean & meat stew - feijoada",
    ingredients:
    [
      "250g dried black bean, soaked overnight, then drained",
      "100g streaky smoked bacon, cut into slices",
      "500g pork rib",
      "3 chorizo cooking sausages",
      "500g pork shoulder, cut into 5cm cubes",
      "3 onions, chopped",
      "4 garlic cloves, finely chopped",
      "pinch of chilli flakes",
      "olive oil, for cooking",
      "2 bay leaves",
      "2 tbsp white wine vinegar",
      "steamed rice, chopped parsley or coriander, hot pepper sauce and wedges of oranges"
    ],

    prep_time: 15,
    cook_time: 140,
    servings: 4,

    nutritional_information:
    {
      kcal: 694,
      fat: "30g",
      saturates: "11g",
      carbs: "40g"
    },

    diet:[
      "meat"
    ],

    cook_method: "Heat a large heavy-based saucepan with a fitted lid, add the bacon and fry until crisp. Remove and keep the oil in the pan. In batches sear the ribs, sausages and pork shoulder. Season each batch with salt and pepper. Remove the meat and set aside. Add the onion, garlic and chilli to the pan. Pour in a little olive oil if it needs more. Season with salt and pepper and fry for 8 mins or until soft. Add the meat, bay leaves, white wine vinegar and drained beans. Cover with just enough water to cover, about 650ml. Bring to a boil and reduce the heat to a low simmer. Cover and cook for 2 hrs, or until the beans are soft and the meat is tender. If there is too much liquid in the pot take the lid off in the last hr. You can also use a slow cooker on the short method (4 hr) or make a quick version using a pressure cooker in batches for 30 mins each. Another method is to cook it in the oven for 3-4 hrs at 160C/140C fan/gas 3. Serve with rice, a sprinkle of parsley or coriander, hot pepper sauce and orange slices",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/feijoada.jpg?itok=IWAScQIM"

  },

  {
    id: 10,
    recipe_name:"1",
    ingredients:
    [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
    ],

    prep_time: 1,
    cook_time: 1,
    servings: 1,

    nutritional_information:
    {
      kcal: 1,
      fat:"1",
      saturates:"1",
      carbs: "1"
    },

    diet:[
      "1"
    ],

    cook_method: "1",

    image: "1"

  },

]);
