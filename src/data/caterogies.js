import HomeIcon from '@mui/icons-material/Home';
import BrushIcon from '@mui/icons-material/Brush';

const categories = {
    "Interior Wall Paints": {
      icon: <HomeIcon />,
      subCategories: {
        "Plain Finishes": [
          {
            id: '1',
            title: 'Tractor Emulsion',
            price: 2499.00,
            description: 'Matte finish paint for interior walls.',
            specifications: ['Color: White', 'Volume: 20 Litres', 'Finish: Matte'],
            imageUrl: 'https://images.unsplash.com/photo-1560185127-6a935f71b8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBhaW50fGVufDB8fHx8MTY4NjU0MDE0Mg&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '2',
            title: 'Apcolite Premium Emulsion',
            price: 4299.00,
            description: 'Smooth and durable finish paint for interior walls.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Smooth'],
            imageUrl: 'https://source.unsplash.com/1600x900/?interior,paint'
          },
          {
            id: '3',
            title: 'Royale Luxury Emulsion',
            price: 4999.00,
            description: 'Luxurious finish for interior walls.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Luxurious'],
            imageUrl: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fHBhaW50fGVufDB8fHx8MTY4NjU0MDE0Mg&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '4',
            title: 'Premium Emulsion',
            price: 3799.00,
            description: 'Premium quality emulsion for interior walls.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Premium'],
            imageUrl: 'https://images.unsplash.com/photo-1504502350688-3066b7e63c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHBhaW50fGVufDB8fHx8MTY4NjU0MDE0Mg&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '5',
            title: 'Velvet Touch',
            price: 4599.00,
            description: 'Smooth and soft finish for interior walls.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Velvet'],
            imageUrl: 'https://images.unsplash.com/photo-1528307560258-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fHBhaW50fGVufDB8fHx8MTY4NjU0MDE0Mg&ixlib=rb-1.2.1&q=80&w=400'
          },
        ],
        "Wall Textures": [
          {
            id: '6',
            title: 'Royale Play Infinitex',
            price: 7899.00,
            description: 'Designer textured paint for interior walls.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Textured'],
            imageUrl: 'https://images.unsplash.com/photo-1580584126784-86c572f8295e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHBhaW50fGVufDB8fHx8MTY4NjU0MDE0Mg&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '7',
            title: 'Royale Play Metallics',
            price: 8199.00,
            description: 'Metallic textured paint for interior walls.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Metallic'],
            imageUrl: 'https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI4fHBhaW50fGVufDB8fHx8MTY4NjU0MDE0Mg&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '8',
            title: 'Royale Play Dune',
            price: 7999.00,
            description: 'Sand textured paint for interior walls.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Sand'],
            imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFydHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '9',
            title: 'Royale Play Stucco',
            price: 8299.00,
            description: 'Stucco textured paint for interior walls.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Stucco'],
            imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFydHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '10',
            title: 'Royale Play Safari',
            price: 8499.00,
            description: 'Safari textured paint for interior walls.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Safari'],
            imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFydHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
        ],
        "Undercoats": [
          {
            id: '11',
            title: 'Asian Paints Interior Wall Primer',
            price: 899.00,
            description: 'Primer for interior walls.',
            specifications: ['Volume: 20 Litres', 'Finish: Primer'],
            imageUrl: 'https://images.unsplash.com/photo-1582587742064-70eec3a42c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE1fHxwYWludHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '12',
            title: 'Dulux Interior Wall Primer',
            price: 949.00,
            description: 'High-quality primer for interior walls.',
            specifications: ['Volume: 20 Litres', 'Finish: Primer'],
            imageUrl: 'https://images.unsplash.com/photo-1601116787211-8a1b96d9bfdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxwYWludHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '13',
            title: 'Berger Interior Wall Primer',
            price: 899.00,
            description: 'Premium primer for interior walls.',
            specifications: ['Volume: 20 Litres', 'Finish: Primer'],
            imageUrl: 'https://images.unsplash.com/photo-1504502350688-3066b7e63c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHBhaW50fGVufDB8fHx8MTY4NjU0MDE0Mg&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '14',
            title: 'Nerolac Interior Wall Primer',
            price: 949.00,
            description: 'Smooth finish primer for interior walls.',
            specifications: ['Volume: 20 Litres', 'Finish: Primer'],
            imageUrl: 'https://images.unsplash.com/photo-1516069677018-378515003435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHxwYWludHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '15',
            title: 'Shalimar Interior Wall Primer',
            price: 899.00,
            description: 'Reliable primer for interior walls.',
            specifications: ['Volume: 20 Litres', 'Finish: Primer'],
            imageUrl: 'https://images.unsplash.com/photo-1560185127-6a935f71b8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBhaW50fGVufDB8fHx8MTY4NjU0MDE0Mg&ixlib=rb-1.2.1&q=80&w=400'
          },
        ],
      },
    },
    "Exterior Wall Paints": {
      icon: <BrushIcon />,
      subCategories: {
        "Plain Finishes": [
          {
            id: '16',
            title: 'Apex Ultima Protek',
            price: 6799.00,
            description: 'High-performance exterior emulsion paint.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Matte'],
            imageUrl: 'https://images.unsplash.com/photo-1558467523-461b5451413c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHxwYWludHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '17',
            title: 'Dulux WeatherShield Max',
            price: 7499.00,
            description: 'Durable and weather-resistant exterior paint.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Smooth'],
            imageUrl: 'https://images.unsplash.com/photo-1592066315558-efe8dc1775f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxwYWludHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '18',
            title: 'Berger WeatherCoat Long Life',
            price: 7199.00,
            description: 'Long-lasting protection for exterior walls.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Matte'],
            imageUrl: 'https://images.unsplash.com/photo-1504502350688-3066b7e63c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHBhaW50fGVufDB8fHx8MTY4NjU0MDE0Mg&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '19',
            title: 'Nerolac Excel Top Guard',
            price: 6999.00,
            description: 'High-performance exterior paint with top guard protection.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Smooth'],
            imageUrl: 'https://images.unsplash.com/photo-1516069677018-378515003435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHxwYWludHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '20',
            title: 'Asian Paints Apex Advanced',
            price: 6899.00,
            description: 'Advanced exterior paint with weather resistance.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Matte'],
            imageUrl: 'https://images.unsplash.com/photo-1560185127-6a935f71b8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBhaW50fGVufDB8fHx8MTY4NjU0MDE0Mg&ixlib=rb-1.2.1&q=80&w=400'
          },
        ],
        "Wall Textures": [
          {
            id: '21',
            title: 'Apex Duracast Textured Finish',
            price: 7899.00,
            description: 'Weather-resistant textured finish for exterior walls.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Textured'],
            imageUrl: 'https://images.unsplash.com/photo-1592066315558-efe8dc1775f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxwYWludHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '22',
            title: 'Royale Play Safari Textures',
            price: 7999.00,
            description: 'Unique safari textures for exterior walls.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Textured'],
            imageUrl: 'https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI4fHBhaW50fGVufDB8fHx8MTY4NjU0MDE0Mg&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '23',
            title: 'Asian Paints SmartCare Textured',
            price: 8299.00,
            description: 'SmartCare textured finish for exterior walls.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Textured'],
            imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFydHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '24',
            title: 'Berger WeatherCoat Textured',
            price: 8499.00,
            description: 'WeatherCoat textured finish for long-lasting protection.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Textured'],
            imageUrl: 'https://images.unsplash.com/photo-1516069677018-378515003435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHxwYWludHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '25',
            title: 'Nerolac Impressions Textured',
            price: 8399.00,
            description: 'Impressions textured finish for a unique look.',
            specifications: ['Color: Customizable', 'Volume: 20 Litres', 'Finish: Textured'],
            imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFydHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
        ],
        "Undercoats": [
          {
            id: '26',
            title: 'Asian Paints Exterior Wall Primer',
            price: 999.00,
            description: 'Primer for exterior walls.',
            specifications: ['Volume: 20 Litres', 'Finish: Primer'],
            imageUrl: 'https://images.unsplash.com/photo-1582587726715-4b59d7fdf4e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI4fHxwYWludHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '27',
            title: 'Dulux Exterior Wall Primer',
            price: 1049.00,
            description: 'High-quality primer for exterior walls.',
            specifications: ['Volume: 20 Litres', 'Finish: Primer'],
            imageUrl: 'https://images.unsplash.com/photo-1601116787211-8a1b96d9bfdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxwYWludHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '28',
            title: 'Berger Exterior Wall Primer',
            price: 999.00,
            description: 'Premium primer for exterior walls.',
            specifications: ['Volume: 20 Litres', 'Finish: Primer'],
            imageUrl: 'https://images.unsplash.com/photo-1504502350688-3066b7e63c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHBhaW50fGVufDB8fHx8MTY4NjU0MDE0Mg&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '29',
            title: 'Nerolac Exterior Wall Primer',
            price: 1049.00,
            description: 'Smooth finish primer for exterior walls.',
            specifications: ['Volume: 20 Litres', 'Finish: Primer'],
            imageUrl: 'https://images.unsplash.com/photo-1516069677018-378515003435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHxwYWludHxlbnwwfHx8fDE2ODY1NDAxNDI&ixlib=rb-1.2.1&q=80&w=400'
          },
          {
            id: '30',
            title: 'Shalimar Exterior Wall Primer',
            price: 999.00,
            description: 'Reliable primer for exterior walls.',
            specifications: ['Volume: 20 Litres', 'Finish: Primer'],
            imageUrl: 'https://images.unsplash.com/photo-1560185127-6a935f71b8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBhaW50fGVufDB8fHx8MTY4NjU0MDE0Mg&ixlib=rb-1.2.1&q=80&w=400'
          },
        ],
      },
    },
  };
  
  
export default categories ;




