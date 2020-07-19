const calculateTotal = (products) => {
  if (products.length === 0) {
    return 0;
  }
  const result = products.map((product) => product.quantity * product.price);
  return Math.round(result.reduce((a, b) => a + b) * 100) / 100;
};

export const initialState = {
  products: false,
  currentTransaction: {
    products: [],
    total: 0,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'ADD_TO_TRANSACTION': {
      let match = false;
      const updatedTransaction = state.currentTransaction.products.map((product) => {
        if (product.name === action.payload.name) {
          match = true;
          return { ...product, quantity: product.quantity + 1 };
        }
        return { ...product };
      });

      if (match) {
        return {
          ...state,
          currentTransaction: {
            products: [...updatedTransaction],
            total: calculateTotal(updatedTransaction),
          },
        };
      }
      return {
        ...state,
        currentTransaction: {
          products: [...state.currentTransaction.products, action.payload],
          total: calculateTotal([...state.currentTransaction.products, action.payload]),
        },
      };
    }
    case 'INCREMENT_ITEM': {
      const updatedArr = state.currentTransaction.products.map((product) => {
        if (product.name === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return { ...product };
      });
      return {
        ...state,
        currentTransaction: {
          products: [...updatedArr],
          total: calculateTotal(updatedArr),
        },
      };
    }
    case 'DECREMENT_ITEM': {
      const updatedArr = state.currentTransaction.products
        .filter((product) => {
          if (product.name === action.payload) {
            return product.quantity !== 1;
          }
          return true;
        })
        .map((product) => {
          if (product.name === action.payload) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return { ...product };
        });
      return {
        ...state,
        currentTransaction: {
          products: [...updatedArr],
          total: calculateTotal(updatedArr),
        },
      };
    }
    case 'COMPLETE_TRANSACTION':
      if (state.currentTransaction.products.length !== 0) {
        fetch('/api/transactions', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state.currentTransaction),
        });
        return {
          ...state,
          currentTransaction: {
            products: [],
            total: 0,
          },
        };
      }
      return state;
    default:
      return state;
  }
};
