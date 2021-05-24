const initialState = [
    {
      id: 1,
      title: "Product1",
      weight: "1kg",
      price: "100rub",
      typeProduct: "milk",
    },
    {
      id: 2,
      title: "Product2",
      weight: "4kg",
      price: "200rub",
      typeProduct: "sugar",
    },
    {
      id: 3,
      title: "Product3",
      weight: "2kg",
      price: "300rub",
      typeProduct: "fish",
    },
  ];

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "addNewProduct":
        return [
          ...state,
          {
            id: Date.now(),
            title: action.payload.title,
            weight: action.payload.weight,
            price: action.payload.price,
            typeProduct: action.payload.typeProduct,
          },
        ];
      case "changeProduct":
        return  state.map((value) => {
          if (value.id === action.payload.id) {
            return action.payload
          }
          return value;
        })
      case "removeProduct":
        return state.filter((product) => product.id !== action.id);
      default:
        return state;
    }
  };
  