/*
	Question:
	Implement a function calculateTotalSpentByCategory that takes a list of transactions as a parameter and returns a list of objects where each object is unique category-wise and has total price spent as its value.

	Description:
  Function: calculateTotalSpentByCategory
  Description: Calculates the total spent for each category in a list of transactions.

	@param {Array<{ id: number, timestamp: number, price: number, category: string, itemName: string }>} transactions - An array of transaction objects.
	*@returns {Array<{ category: string, totalSpent: number }>} An array of objects with category and total spent.
 */

function calculateTotalSpentByCategory(transactions) {
  // Check if transactions array is empty
  if (transactions.length === 0) {
    console.log('Transactions array is empty.');
    return [];
  }

  /* ---- Way-1 Using Ojbect & Destructuring ---- */
  // Initialize an object to store category and total spent
  const categoryTotal = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const {category, price} = transaction;

    // If the category already exists, add the price to the total
    if (categoryTotal[category]) {
      categoryTotal[category] += price;
    } else {
      // If the category doesn't exist, create a new entry
      categoryTotal[category] = price;
    }
  });

  // Convert the object into an array of objects
  const totalSpentByCategory = Object.keys(categoryTotal).map(category => ({
    category,
    totalSpent: categoryTotal[category],
  }));

  return totalSpentByCategory;

  /* ----- Way-2: Using Maps ------ */
  /*
		// Initialize a map to store category and total spent
		const totalSpentByCategory = new Map();

		// Loop through each transaction
		for (const transaction of transactions) {
			const category = transaction.category;
			const price = transaction.price;

			// Check if category already exists
			if (!totalSpentByCategory.has(category)) {
				totalSpentByCategory.set(category, 0);
			}

			// Update total spent for the category
			totalSpentByCategory.set(category, totalSpentByCategory.get(category) + price);
		}

		// Convert map to an array of objects
		return Array.from(totalSpentByCategory.entries()).map(
			([category, totalSpent]) => ({
				category,
				totalSpent,
			})
		);
	*/
}

// Example usage
let transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 20,
    category: 'Clothing',
    itemName: 'Shirt',
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 15,
    category: 'Food',
    itemName: 'Coffee',
  },
];
console.log(calculateTotalSpentByCategory(transactions));

// Export the function for reuse in other modules
module.exports = calculateTotalSpentByCategory;
