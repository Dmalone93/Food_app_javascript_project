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
    recipe_name:"gluten free carrot cake",
    ingredients:
    [
      "140g unsalted butter, softened, plus extra for greasing",
      "200g caster sugar",
      "250g carrots, grated",
      "140g sultanas",
      "2 eggs, lightly beaten",
      "200g gluten-free self-raising flour",
      "1 tsp cinnamon",
      "1 tsp gluten-free baking powder",
      "50g mixed nut, chopped"
    ],

    prep_time: 20,
    cook_time: 55,
    servings: 8,

    nutritional_information:
    {
      kcal: 599,
      fat:"28g",
      saturates:"16g",
      carbs: "86g"
    },

    diet:[
      "gluten free"
    ],

    cook_method: "Step 1: Heat oven to 180C/160C fan/gas 4. Grease and line a 900g/2lb loaf tin with baking parchment. Beat the butter and sugar until soft and creamy, then stir in the grated carrot and sultanas. Pour the eggs into the mix a little at a time. Add the flour, cinnamon, baking powder and most of the chopped nuts and mix well. Tip the mix into the loaf tin, then bake for 50-55 mins or until a skewer poked in the middle comes out clean. Allow to cool in the tin for 15 mins, then remove from the tin and cool completely on a wire rack. Meanwhile, make the icing. Beat the butter in a large bowl until it is really soft, add the icing sugar and cinnamon, then beat until thick and creamy. When the cake is cool, spread the icing on top, then sprinkle with a little more cinnamon and the remaining chopped nuts.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1201555_11.jpg?itok=ZJpDQyyz"

  },

  {
    id: 11,
    recipe_name:"gluten free storecupboard fishcakes",
    ingredients:
    [
      "2 large potatoes(about 550g/1lb 4oz), cut into small chunks",
      "2 x 120g cans of tuna in spring water, drained",
      "1 lemon, ½ juiced, ½ cut into wedges",
      "½ small pack chives, snipped",
      "1 egg, beaten",
      "4 spring onions, chopped",
      "4 tbsp gluten-free mayonnaise",
      "2 tbsp gluten-free flour, for dusting",
      "2 tbsp olive oil",
      "mixed leaves, to serve"
    ],

    prep_time: 15,
    cook_time: 12,
    servings: 3,

    nutritional_information:
    {
      kcal: 624,
      fat:"49g",
      saturates:"8g",
      carbs: "19g"
    },

    diet:[
      "gluten free"
    ],

    cook_method: "Step1: Put the potatoes in a saucepan, cover in cold, salted water and bring to the boil. Once boiling reduce to a simmer and cook for about 8 mins until tender. Drain and leave to steam-dry for 2 mins. Step 2: Mash the potatoes in a large bowl. Add the tuna and combine, breaking it up with a fork, then add the lemon juice and chives. Season well, add the egg and use your hands to bring everything together. Divide the mixture into 6 and shape into fishcakes. Chill for 10 mins to firm up. Step 3: Meanwhile, mix the spring onions with the mayonnaise and chill until ready to serve. To cook the fishcakes, heat half the oil in a large non-stick pan and lightly dust the fishcakes with flour. Cook half for 3-4 mins each side until golden and warmed through, then repeat with the rest of the fishcakes.",

    step4: "Step 4: Serve with the mayonnaise, a lemon wedge and some mixed leaves.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/gluten-free-storecupboard-fish-cakes.jpg?itok=c_y0BN0l"

  },

  {
    id: 12,
    recipe_name:"gluten free lemon drizzle cake",
    ingredients:
    [
      "200g butter, softened",
      "200g golden caster sugar",
      "4 eggs",
      "175g ground almond (switch for polenta or wheat-free flour to make this recipe nut-free)",
      "250g mashed potato",
      "zest 3 lemons",
      "2 tsp gluten-free baking powder(Supercook does one)",
      "For the drizzle",
      "4 tbsp granulated sugar",
      "juice 1 lemon",
    ],

    prep_time: 30,
    cook_time: 40,
    servings: 10,

    nutritional_information:
    {
      kcal: 514,
      fat:"36g",
      saturates:"2g",
      carbs: "41g"
    },

    diet:[
      "gluten free"
    ],

    cook_method: "Heat oven to 180C/fan 160C/gas 4. Butter and line a deep, 20cm round cake tin. Beat the sugar and butter together until light and fluffy, then gradually add the egg, beating after each addition. Fold in the almonds, cold mashed potato, lemon zest and baking powder. Tip into the tin, level the top, then bake for 40-45 mins or until golden and a skewer inserted into the middle of the cake comes out clean. Turn out onto a wire rack after 10 mins cooling. Mix the granulated sugar and the lemon juice together, then spoon over the top of the cake, letting it drip down the sides. Let the cake cool completely before slicing.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--363662_11.jpg?itok=GcHQasYn"

  },

  {
    id: 13,
    recipe_name:"gluten free fresh topped pizza",
    ingredients:
    [
      "200g gluten-free flour",
      "½ salt",
      "2 tbsp olive oil",
      "7g sachet fast-action dried yeast",
      "1 tbsp chopped rosemary",
      "1 tsp ground black pepper",
      "125-150ml warm water",
      "210g jar tomato bruschetta topping (we used Napolina)",
      "Fresh topping suggestions",
      "140g mozzarella, thickly sliced",
      "½ avocado, thickly sliced",
      "70g pack rocket",
      "cherry tomato, halved",
      "4 slices Parma ham",
      "4 slices ham",
      "olive oil",
      "balsamic vinegar"

    ],

    prep_time: 30,
    cook_time: 40,
    servings: 10,

    nutritional_information:
    {
      kcal: 525,
      fat:"18g",
      saturates:"2g",
      carbs: "93g"
    },

    diet:[
      "gluten free"
    ],

    cook_method: "Heat oven to 220C/fan 200C/gas 7. Put the flour, salt, olive oil, yeast, rosemary and pepper into a food processor. Pulse until well mixed. With the motor running, add enough water to bring the flour to a soft, but not sticky dough. Tip onto a work surface and knead until it comes together. Halve the dough. If you only have one shelf in your oven and are cooking in batches, wrap one half in cling film. Roll out each half directly onto lightly oiled baking sheets into very thin 25cm/10in rounds. Do not form a rim at the edge. Spread the tomato topping over each piece of dough, almost to the edge. Leave to stand for 15 mins. Bake in the hot oven for 12-15 mins or until the dough is crisp. Lift each round onto a plate and serve warm. Pass the toppings around and let each diner assemble their own pizza.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1980_10.jpg?itok=rr5kK3qW"

  },

  {
    id: 14,
    recipe_name:"gluten free glamorgan cheese sausage rolls",
    ingredients:
    [
      "For the pastry",
      "175g gluten-free flour (we used Doves Farm, widely available)",
      "85g butter",
      "pinch cayenne pepper",
      "1 egg yolk mixed with 3 tbsp cold water",
      "For the filling",
      "100g gluten-free breadcrumbs (we used Dietary Specials Gluten-Free bread)",
      "100g Caerphilly cheese, grated",
      "1 small leek, finely chopped",
      "1 tsp mustard seeds, crushed",
      "3 egg yolks",
      "handful tarragon or thyme leaves (optional)"
    ],

    prep_time: 30,
    cook_time: 15,
    servings: 25,

    nutritional_information:
    {
      kcal: 86,
      fat:"6g",
      saturates:"3g",
      carbs: "8g"
    },

    diet:[
      "gluten free"
    ],

    cook_method: "To make the pastry, put the flour, butter and cayenne pepper into a food processor, then whizz into fine breadcrumbs. sprinkle the egg and water mixture onto the flour and pulse again until the mixture begins to come together. Tip the mixture onto a board, then gently squeeze the pastry until it begins to come together in a ball, adding more water if it feels dry. Divide the mixture in half, roll each piece into a 12 x 30cm rectangle and slip onto a baking sheet. Do not chill. Heat oven to 200C/fan 180C/gas 6. Mix the filling ingredients together, except one egg yolk, which you need for glazing, in a food processor. Divide in two and roll each into a 30cm-long sausage shape. Lay a cheese sausage on one side of the pastry. Brush the sausage and pastry with egg yolk and fold the pastry over the top to encase the sausage. Seal the two edges, trim the ends, then cut into 2cm pieces. Arrange on a baking sheet and chill for 30 mins. Brush the rolls with a little more egg yolk, place herbs on top, if you like, then bake for 12-15 mins until golden brown.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--4447_10.jpg?itok=n35Tqg-j"

  },

  {
    id: 15,
    recipe_name:"Chicken and chorizo jambalaya",
    ingredients:
    [
      "1 large onion",
      "6 garlic cloves, roughly chopped",
      "50g ginger, roughly chopped",
      "4 tbsp vegetable oil",
      "2 tsp cumin seeds",
      "1 tsp fennel seeds",
      "5cm cinnamon stick",
      "1 tsp chilli flakes",
      "1 tsp garam masala",
      "1 tsp turmeric",
      "1 tsp caster sugar",
      "400g can chopped tomatoes",
      "8 chicken thighs, skinned, boneless (about 800g)",
      "250ml hot chicken stock",
      "2 tbsp chopped coriander"
    ],

    prep_time: 15,
    cook_time: 30,
    servings: 4,

    nutritional_information:
    {
      kcal: 382,
      fat:"17g",
      saturates:"3g",
      carbs: "10g"
    },

    diet:[
      "meat"
    ],

    cook_method: "Heat 1 tbsp olive oil in a large frying pan with a lid and brown 2 chopped chicken breasts for 5-8 mins until golden. Remove and set aside. Tip in the 1 diced onion and cook for 3-4 mins until soft.Add 1 thinly sliced red pepper, 2 crushed garlic cloves, 75g sliced chorizo and 1 tbsp Cajun seasoning, and cook for 5 mins more.Stir the chicken back in with 250g long grain rice, add the 400g can of tomatoes and 350ml chicken stock. Cover and simmer for 20-25 mins until the rice is tender.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--1274503_8.jpg?itok=y2r-R0BV"

  },

  {
    id: 16,
    recipe_name:"home style chicken curry",
    ingredients:
    [
      "1 large onion",
      "6 garlic cloves, roughly chopped",
      "50g ginger, roughly chopped",
      "4 tbsp vegetable oil",
      "2 tsp cumin seeds",
      "1 tsp fennel seeds",
      "5cm cinnamon stick",
      "1 tsp chilli flakes",
      "1 tsp garam masala",
      "1 tsp turmeric",
      "1 tsp caster sugar",
      "400g can chopped tomatoes",
      "8 chicken thighs, skinned, boneless (about 800g)",
      "250ml hot chicken stock",
      "2 tbsp chopped coriander"
    ],

    prep_time: 15,
    cook_time: 30,
    servings: 4,

    nutritional_information:
    {
      kcal: 382,
      fat:"17g",
      saturates:"3g",
      carbs: "10g"
    },

    diet:[
      "meat"
    ],

    cook_method: "Roughly chop 1 large onion, transfer to a small food processor, and add 3 tbsp of water - process to a slack paste. You could use a stick blender for this or coarsely grate the onion into a bowl – there’s no need to add any water if you are grating the onion. Tip into a small bowl and leave on one side. Put 6 roughly chopped garlic cloves and 50g roughly chopped ginger into the same food processor and add 4 tbsp water – process until smooth and spoon into another small bowl. Alternatively, crush the garlic to a paste with a knife or garlic press and finely grate the ginger. Heat 4 tbsp vegetable oil in a wok or sturdy pan set over a medium heat. Combine 2 tsp cumin seeds and 1 tsp fennel seeds with a 5cm cinnamon stick and 1 tsp chilli flakes and add to the pan in one go. Swirl everything around for about 30 secs until the spices release a fragrant aroma. Add the onion paste – it will splutter in the beginning. Fry until the water evaporates and the onions turn a lovely dark golden - this should take about 7-8 mins. Add the garlic and ginger paste and cook for another 2 mins – stirring all the time. Stir in 1 tsp garam masala, 1 tsp turmeric, and 1 tsp caster sugar and continue cooking for 20 secs before tipping in a 400g can chopped tomatoes. Continue cooking on a medium heat for about 10 mins without a lid until the tomatoes reduce and darken. Cut 8 skinless, boneless chicken thighs into 3cm chunks and add to the pan once the tomatoes have thickened to a paste. Cook for 5 mins to coat the chicken in the masala and seal in the juices, and then pour over 250ml hot chicken stock. Simmer for 8-10 mins without a lid until the chicken is tender and the masala lightly thickened – you might need to add an extra ladleful of stock or water if the curry needs it.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--1274503_8.jpg?itok=y2r-R0BV"

  },

  {
    id: 16,
    recipe_name:"beef bourguignon with celeriac mash",
    ingredients:
    [
      "1 tbsp goose fat",
      "600g shin beef, cut into large chunks",
      "100g smoked streaky bacon, sliced",
      "350g shallotor pearl onions, peeled",
      "250g chestnut mushrooms (about 20)",
      "2 garlic cloves, sliced",
      "1 bouquet garni (See know-how below)",
      "1 tbsp tomato purée",
      "750ml bottle red wine, Burgundy is good",
      "For the celeriac mash",
      "600g (about 1) celeriac",
      "2 tbsp olive oil, plus a glug",
      "1 or 2 rosemary and thyme sprigs",
      "2 bay leaves",
      "4 cardamom pods"
    ],

    prep_time: 20,
    cook_time: 195,
    servings: 4,

    nutritional_information:
    {
      kcal: 571,
      fat:"32g",
      saturates:"10g",
      carbs: "4g"
    },

    diet:[
      "meat"
    ],

    cook_method: "Heat a large casserole pan and add 1 tbsp goose fat. Season 600g large chunks of shin beef and fry until golden brown, about 3-5 mins, then turn over and fry the other side until the meat is browned all over, adding more fat if necessary. Do this in 2-3 batches, transferring the meat to a colander set over a bowl when browned. In the same pan, fry 100g sliced smoked streaky bacon, 350g peeled shallots or pearl onions, 250g chestnut mushrooms, 2 sliced garlic cloves and 1 bouquet garni until lightly browned.Mix in 1 tbsp tomato purée and cook for a few mins, stirring the mixture. This enriches the bourguignon and makes a great base for the stew. Then return the beef and any drained juices to the pan and stir through. Pour over 750ml bottle red wine and about 100ml water so the meat bobs up from the liquid, but isn’t completely covered. Bring to the boil and use a spoon to scrape the caramelised cooking juices from the bottom of the pan – this will give the stew more flavour. Heat oven to 150C/fan 130C/gas 2. Make a cartouche: tear off a square of foil slightly larger than the casserole, arrange it in the pan so it covers the top of the stew and trim away any excess foil. Cook for 3 hrs. If the sauce looks watery, remove the beef and veg with a slotted spoon, and set aside. Cook the sauce over a high heat for a few mins until the sauce has thickened a little, then return the beef and vegetables to the pan. To make the celeriac mash, peel 600g celeriac and cut into cubes. Heat 2 tbsp olive oil in a large frying pan. Tip in the celeriac and fry for 5 mins until it turns golden. Season well with salt and pepper. Stir in 1 or 2 sprigs of rosemary and thyme, 2 bay leaves and 4 cardamom pods, then pour over 200ml water, enough to nearly cover the celeriac. Turn the heat to low, partially cover the pan and leave to simmer for 25-30 mins. After 25-30 mins, the celeriac should be soft and most of the water will have evaporated. Drain away any remaining water, then remove the herb sprigs, bay and cardamom pods. Lightly crush with a potato masher, then finish with a glug of olive oil and season to taste. Spoon the beef bourguignon into serving bowls and place a large spoonful of the celeriac mash on top. Garnish with one of the bay leaves, if you like.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--1035610_10.jpg?itok=HX7sCMfb"

  },

  {
    id: 17,
    recipe_name:"thai beef stir-fry",
    ingredients:
    [
      "2 tbsp vegetable oil",
      "400g beef strips, or steak cut into thin strips",
      "1 red chilli, deseeded and finely sliced",
      "2 tbsp oyster sauce",
      "handful basil leaves"
    ],

    prep_time: 5,
    cook_time: 5,
    servings: 4,

    nutritional_information:
    {
      kcal: 178,
      fat:"10g",
      saturates:"2g",
      carbs: "1g"
    },

    diet:[
      "meat"
    ],

    cook_method: "Heat a wok or large frying pan until smoking hot. Pour in the oil and swirl around the pan, then tip in the beef strips and chilli. Cook, stirring all the time, until the meat is lightly browned, about 3 mins, then pour over the oyster sauce. Cook until heated through and the sauce coats the meat. stir in the basil leaves and serve with plain rice",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--192670_12.jpg?itok=AvUnOm97"

  },

  {
    id: 17,
    recipe_name:"greek roast lamb",
    ingredients:
    [
      "1 large leg of lamb, about 3kg/6lb 8oz",
      "6 garlic cloves",
      "1 bunch oregano",
      "zest and juice 1 lemon",
      "6 tbsp olive oil",
      "1½ kg new potatoes",
      "400g can chopped tomato",
      "large handful pitted baby kalamata olives"
    ],

    prep_time: 15,
    cook_time: 105,
    servings: 8,

    nutritional_information:
    {
      kcal: 685,
      fat:"36g",
      saturates:"14g",
      carbs: "32g"
    },

    diet:[
      "meat"
    ],

    cook_method: "Heat oven to 240C/fan 220C/gas 9. Pound the garlic, half the oregano, lemon zest and a pinch of salt in a pestle and mortar, then add the lemon juice and a drizzle of olive oil. Stab the lamb all over with a sharp knife, then push as much of the herb paste as you can into the holes. Tip the potatoes into a large roasting tin, then toss in the remaining olive oil and any remaining herb paste. Nestle the lamb amongst the potatoes, roast for 20 mins, then reduce the temperature to 180C/fan 160C/gas 4. Roast for 1 hr 15 mins for medium-rare, adding another 15 mins if you prefer your lamb medium. Baste the lamb once or twice with the juices and toss the potatoes. When the lamb is done to your liking, remove from the tin and let it rest. Throw the rest of the oregano in with the potatoes, scoop from the tin and keep warm. Place the roasting tin over a medium flame, add the canned tomatoes and olives to the pan juices, then simmer for a few mins. Serve the lamb with the potatoes and sauce and a simple salad.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1035742_11.jpg?itok=3GgK-2kL"

  },

  {
    id: 18,
    recipe_name:"chickpea fritters with courgette salad",
    ingredients:
    [
      "400g can chickpea, drained and rinsed",
      "2 large eggs",
      "3 tbsp full-fat milk",
      "4 tbsp plain flour",
      "1 tsp baking powder",
      "bunch spring onions, ½ chopped, ½ sliced lengthways",
      "4 tsp harissa",
      "3 tbsp sunflower oil",
      "2 courgettes, thinly sliced",
      "200g pack feta cheese, crumbled",
      "small bunch mint leaves",
      "150ml pot natural yogurt, to serve"
    ],

    prep_time: 10,
    cook_time: 20,
    servings: 4,

    nutritional_information:
    {
      kcal: 417,
      fat:"24g",
      saturates:"10g",
      carbs: "28g"
    },

    diet:[
      "vegetarian"
    ],

    cook_method: "Blitz half the can of chickpeas in a food processor until smooth. With the motor running, add the eggs and milk, then sift in the flour and baking powder. Process until you have a lump-free batter. Fold in the whole chickpeas and chopped spring onions. Season and add half the harissa.  Heat half the oil and fry the courgettes in batches until golden; keep warm in a low oven. Heat a little more oil and cook 2 tbsp-portions of the fritter mix in batches for a couple of mins, until you see bubbles appear, then flip over and cook the other side until golden. Keep warm with the courgettes.  Toss together the courgettes, feta, mint and sliced spring onions. Divide between 4 plates and top each with 2 fritters and a dollop of yogurt swirled with the remaining harissa.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1249463_8.jpg?itok=5oSJ3Qti"

  },

  {
    id: 19,
    recipe_name:"coconut and squash dhansak",
    ingredients:
    [
      "1 tbsp vegetable oil",
      "500g butternut squash, peeled and chopped into bite-sized chunks",
      "100g frozen chopped onions",
      "4 heaped tbsp mild curry paste",
      "400g can chopped tomatoes",
      "400g can light coconut milk",
      "400g can lentils, drained",
      "200g bag baby spinach",
      "150ml coconut yogurt, plus extra to serve",
      "mini naan bread, to serve"
    ],

    prep_time: 5,
    cook_time: 15,
    servings: 4,

    nutritional_information:
    {
      kcal: 320,
      fat:"17g",
      saturates:"9g",
      carbs: "29g"
    },

    diet:[
      "vegetarian"
    ],

    cook_method: "Heat the oil in a large pan. Put the squash in a bowl with a splash of water. Cover with cling film and microwave on High for 10 mins or until tender. Meanwhile, add the onions to the hot oil and cook for a few mins until soft. Add the curry paste, tomatoes and coconut milk, and simmer for 10 mins until thickened to a rich sauce.  Warm the naan breads in a low oven or in the toaster. Drain any liquid from the squash, then add to the sauce with the lentils, spinach and some seasoning. Simmer for a further 2-3 mins to wilt the spinach, then stir in the coconut yogurt. Serve with the warm naan and a dollop of extra yogurt.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/coconut-squash-dhansak.jpg?itok=RP9IpvY1"

  },

  {
    id: 20,
    recipe_name:"roasted carrots with goat’s cheese and pomegranate",
    ingredients:
    [
      "750g carrots",
      "2 tbsp olive oil",
      "2 tsp cumin seed",
      "grated zest and juice 1 small orange",
      "400g can chickpea, drained and rinsed",
      "100g white-rinded vegetarian goat's cheese",
      "small bunch oregano or mint, roughly chopped",
      "75g pomegranate seeds",
      "warm flatbreads, to serve"
    ],

    prep_time: 10,
    cook_time: 50,
    servings: 4,

    nutritional_information:
    {
      kcal: 190,
      fat:"10g",
      saturates:"4g",
      carbs: "20g"
    },

    diet:[
      "vegetarian"
    ],

    cook_method: "Heat oven to 190C/170C fan/gas 5. Toss the carrots with 1 tbsp of the oil, sprinkle with the cumin seeds and orange zest, and season with salt. Spread onto a large baking sheet and roast for 50 mins until tender and catching some colour on the edges.  Stir the chickpeas into the roasted carrots, then tip onto a large serving platter. Drizzle with the remaining oil and a little of the orange juice. Crumble over the goat’s cheese and scatter with the herbs and pomegranate seeds. Serve warm with toasted flatbreads.",

    image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--901834_10.jpg?itok=bQHZx56-"

  },

]);
