export const calculateRectangle = (x, y) => {

  return new Promise((resolve, reject) => {
    if(x <= 0 || y <= 0) {
      reject(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
    } else {
      setTimeout(() => 
        resolve({
          perimeter: () => 2 * (x + y),
          area: () => x * y
        }),
        2000
        );
    }
  })
  
};