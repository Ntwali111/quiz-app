Locate the index.html file in the extracted folder.
Right-click on the file and select Open with Browser (or use a live server if available).
Start the Quiz:

The application will launch in your browser.
Click "Start Quiz" to begin.
How to Deploy the Application
Option 1: Deploy via GitHub Pages
Push the project to your GitHub repository.
Open the repository’s Settings.
Navigate to Pages > Branch, select the main branch, and save.
Your app will be live at https://<your-github-username>.github.io/<repository-name>/.
Option 2: Deploy via Netlify
Go to Netlify and sign in.
Drag and drop your project folder into the Netlify dashboard.
Once uploaded, Netlify will generate a live URL for your app.
Option 3: Deploy via Vercel
Install the Vercel CLI:
bash
Copy code
npm install -g vercel
Deploy the app:
bash
Copy code
vercel
Your app will be deployed and a URL provided by Vercel.
API Information
This application uses the Open Trivia Database API to fetch quiz questions dynamically.

API URL: Open Trivia Database
Endpoint:
bash
Copy code
https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple
Replace the query parameters (amount, category, difficulty, and type) as needed to customize the quiz.
Challenges Encountered
API Integration:

Initially, the API requests failed due to incorrect query parameters.
Solution: Referred to the API documentation to fix query parameters.
User Interface Design:

Ensuring the app looked good on different devices was challenging.
Solution: Used CSS flexbox and tested across multiple screen sizes.
Dynamic Question Rendering:

Displaying new questions without reloading the page required managing state effectively.
Solution: Leveraged JavaScript event listeners and DOM manipulation.
Credits
Open Trivia Database API: For providing trivia questions.
FontAwesome: For emojis and icons.
Mozilla Developer Network (MDN): For JavaScript and CSS documentation.
Stack Overflow: For troubleshooting and debugging help.
Future Enhancements
Add scoring and leaderboard functionality.
Include a timer for each question.
Expand question categories and difficulty levels.
Implement user authentication and profiles.
