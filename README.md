# Twubric

## Overview

This is a simple web application designed to help social media users review their followers view their Twubric scores, filter and sort them based on various criteria and optionally remove certain followers.

## Features

- **View Twubric Scores:** See Twubric scores of your followers, which are calculated based on criteria.
- **Filtering:** Filter followers based on their join dates within a specified range.
- **Sorting:** Sort followers based on their Twubric scores or individual criteria such as Friends, Influence, and Chirpiness.
- **Removal:** Optionally remove followers directly from the application.

## Usage

1. **User listing**

   - Upon loading, you can see a list of your followers along with their profile picture, Twubric scores, total followers with their category and joining date displayed on the home page.
   - Twubric scores are calculated based on the criteria and is shown with total followers.

2. **Filtering**

   - Use the calendar filters provided on the home page to filter followers based on their join dates within a specific range.
   - Click on "Search" to apply the filter and see the updated list of followers.

3. **Sorting**

   - Sort followers based on their Twubric scores or individual criteria such as Friends, Influence, and Chirpiness.
   - Click on the criteria you want to sort by, and the list will be sorted accordingly.
   - Clicking again on the same criteria toggles between ascending and descending order.

4. **Visual representation**
   - Each users followers count is represented in a pie chart.
   - All criteria is differentiated with colors.
   - Upon hovering the mouse over the pie chart, the count of each category is displayed.

5. **Removal:**
   - Each follower entry includes a "Remove" option.
   - Click on "Remove" to initiate the removal process for a particular follower.
   - An alert dialog will confirm your action, and upon confirmation, the follower will be removed from your list.

## Twubric Score Calculation

- **Criteria:** Friends, Influence, Chirpiness
- **Weights:**
  - Friends: 2
  - Influence: 4
  - Chirpiness: 4

## Installation

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Access the application through the provided localhost URL.

## Technologies Used

- **React:** The frontend of the application is built using React.js.
- **Tailwind CSS:** Styling is done using Tailwind CSS framework.
- **ShadCN:** Shadcn provides contemporary and minimalist design straight out of the box, providing a sleek and visually appealing user interface. It have built-in interactions and animations for dropdowns, alerts, and dialogs add toast.
- **Zod:** Zod is used for form validation.
- **Lucide React:** Lucide React icons are used for visual elements.


## Contributing

Contributions are welcome. Please feel free to open an issue or submit a pull request with any improvements or features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
