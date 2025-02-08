const categories = [
  {
    id: 1,
    name: "Clothes",
    description: "These are the clothes that you will be able to buy.",
  },

  {
    id: 2,
    name: "Electronics",
    description: "These are the electronics that you will be able to buy.",
  },

  {
    id: 3,
    name: "Essentials",
    description: "These are the essentials that you will be able to buy.",
  },
  {
    id: 4,
    name: "Jewellery",
    description: "These are the jewellery that you will be able to buy.",
  },
  {
    id: 5,
    name: "Travel",
    description: "These are the items that you will be able to buy.",
  },
];

localStorage.setItem("categories", JSON.stringify(categories));

export default categories;