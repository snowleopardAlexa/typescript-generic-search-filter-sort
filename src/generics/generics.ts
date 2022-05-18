interafce IVeganRestaurant {
    vegan: string
    restaurant: string
}

const veganRestaurants: Array<IVeganRestaurant> = [
    {
      vegan: "vegan1",
      restaurant: "restaurant1"
    },
    {
      vegan: "I am vegan two",
      restaurant: "I am restaurant two"
    },
    {
      vegan: "I am vegan three",
      restaurant: "I am restaurant three"
    }
]

function sortByVegan(veganRestaurants: Array<IVeganRestaurant>) {
    veganRestaurants.sort((a, b) => {
        if (a.vegan > b.vegan) {
            return 1
        }
        if (a.vegan < b.vegan) {
            return -1
        }
        return 0
    })
}

function sortByRestaurant(veganRestaurants: Array<IVeganRestaurnt>) {
    veganRestaurants.sort((a, b) => {
        if (a.vegan > b.vegan) {
            return 1
        }
        if (a.vegan < b.vegan) {
            return -1
        }
        return 0
    })
}

// generics 
// start with <> and capital letter T - sometimes it starts with T but you might see letters like: T, U, V
// generics types: T, U, V
// 