import Separator from "./Separator"
//components
import MenuItem from "./MenuItem"

const menuItems = [
    {
        imgSrc: "/assets/menu/coffee-1.png",
        name: "Espresso",
        desc: "Rich and bold shot of coffee",
        price: 3.3,
    },
    {
        imgSrc: "/assets/menu/coffee-2.png",
        name: "Cappuccino",
        desc: "Espresso with steamed milk and foam",
        price: 4.5,
    },
    {
        imgSrc: "/assets/menu/coffee-3.png",
        name: "Latte",
        desc: "Espresso with steamed milk",
        price: 4.2,
    },
    {
        imgSrc: "/assets/menu/coffee-4.png",
        name: "Americano",
        desc: "Espresso with ghot water",
        price: 3.5,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Mocha",
        desc: "Espresso with chocolate and steamed milk",
        price: 5.4,
    },
    {
        imgSrc: "/assets/menu/coffee-1.png",
        name: "Macchiato",
        desc: "Espresso with a dollop of foam",
        price: 3.75,
    },
    {
        imgSrc: "/assets/menu/coffee-2.png",
        name: "Flat White",
        desc: "Espresso with microfoam milk",
        price: 4.25,
    },
    {
        imgSrc: "/assets/menu/coffee-3.png",
        name: "Icef Coffee",
        desc: "Chilled coffee over ice",
        price: 3.75,
    },
    {
        imgSrc: "/assets/menu/coffee-4.png",
        name: "Affogato",
        desc: "Espresso shot over vanilla ice cream",
        price: 5.5,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Irish Coffee",
        desc: "Coffee with Irish whiskey and cream",
        price: 6.5,
    },
]

const Menu = () => {
  return (
    <section className="pt-12 pb-12 xl:pt-16 xl:pb-36">
        <div className="container mx-auto">
            <div className="flex flex-col gap-4 mb-12 xl:mb-24">
                <h2 className="h2 text-center">Our menu</h2>
                <div className="mb-4">
                    <Separator bg="accent"/>
                </div>
                <p className="text-center max-w-[620px] mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quia quasi adipisci officia, nostrum sequi in quam amet. 
                    Quasi laboriosam recusandae exercitationem beatae minus unde. 
                    Ipsum expedita voluptas cum dolores perspiciatis dignissimos corporis soluta voluptate, 
                    magnam voluptatum mollitia esse animi obcaecati.
                </p>
            </div>                
            {/* menu & btn */}
            <div className="flex flex-col items-center gap-12 xl:gap-24">
                {/* menu grid */}
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
                    {menuItems.map((item, index) => {
                        const {name, desc, price, imgSrc} = item;
                        return (
                            <MenuItem
                            name={name}
                            desc={desc}
                            price={price}
                            imgSrc={imgSrc}
                            key={index}
                        />
                        );
                    })}
                </div>
                <button className="btn">View full menu</button>
            </div>
        </div>
    </section>
  )
}

export default Menu