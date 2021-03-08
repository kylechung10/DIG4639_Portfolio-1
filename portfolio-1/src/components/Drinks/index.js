import React from 'react';
import Menu from '../Menu';

export default function Drinks() {
  let data = [
    {
      menuName: "Soft Drink",
      menuItems: [
        {
          itemId: 11,
          itemPrice: "3",
          itemName: "Coca-Cola Classic Coke",
          itemDescription:
            "A carbonated, sweetened soft drink and is the world's best-selling drink.",
        },
        {
          itemId: 12,
          itemPrice: "2",
          itemName: "Water",
          itemDescription: "Cold bottled water.",
        },
        {
          itemId: 13,
          itemPrice: "5",
          itemName: "Fresh Lemonade",
          itemDescription:
            "Homemade lemonade using freshly squeezed lemons sweetened with sugar.",
        },
      ],
    },
    {
      menuName: "Alcoholic",
      menuItems: [
        {
          itemId: 145,
          itemPrice: "9",
          itemName: "Old Fashioned",
          itemDescription: "Cocktail made by muddling sugar with bitters and water, adding whiskey or, less commonly, brandy, and garnishing with orange slice or zest and a cocktail cherry.",
        },
        {
          itemId: 147,
          itemPrice: "8",
          itemName: "Margarita",
          itemDescription:
            "Cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass.",
        },
        {
          itemId: 149,
          itemPrice: "9",
          itemName: "Moscow Mule",
          itemDescription:
            "Cocktail made with vodka, spicy ginger beer, and lime juice, garnished with a slice or wedge of lime.",
        },
        {
          itemId: 150,
          itemPrice: "10",
          itemName: "Mojito",
          itemDescription: "Simple mixed drink consisting of rum, mint, lime, sugar, and club soda.",
        },
      ],
    },
  ]
  return (
    <div className="drinks">
      <div>
      {data.map((menu, index) => (
        <Menu key={index} {...menu}></Menu>
      ))}
        </div>
    </div>
  )
}