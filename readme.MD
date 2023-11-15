--------------------

**Steps to Implement a Chatfuel Chatbot on Your Website**

**Prerequisites:**

- A Chatfuel account
- A functioning API capable of receiving data from a POST request and forwarding it to Unomi servers for profile storage

**Steps:**

1. **Create a Chatfuel Account:**
   - Sign up for a Chatfuel account at https://chatfuel.com/.
   - Complete the registration process and verify your email address.

2. **Develop an API for User Profile Data Storage:**
   - Create an API endpoint that can receive user profile data in JSON format via a POST request.
   - Implement the logic to process the received data and store it in the Unomi servers.
   - Host the API securely on a reliable hosting platform.

3. **Create a Chatfuel Flow:**
   - Log in to your Chatfuel account and navigate to the Flows dashboard.
   - Click on the "Create New Flow" button to begin creating a new chatbot flow.

4. **Define the Entry Point:**
   - Add an entry point of type "Customer Chat" to specify how users will interact with the chatbot.
   - This entry point will be the starting point of the conversation between users and the chatbot.

5. **Implement API Integration:**
   - Add an action block named "JSON Request" within the flow.
   - Enter the API URL of the endpoint you created in Step 2.
   - Add any necessary headers if required for authentication or authorization.
   - Select the appropriate format for the JSON data you want to send from Chatfuel:
      - "Full profile": Sends the entire user profile data as a single JSON object.
      - "JSON data": Allows you to specify a custom JSON object with specific data fields.
      - "URL encoded": Sends the data as URL-encoded key-value pairs.

6. **Test API Requests:**
   - Click on the "Test the Request" button to verify that the API requests are functioning correctly.
   - Ensure that the data is being sent and processed successfully.

7. **Embed the Chatbot on Your Website:**
   - Navigate to the "Flows" section and locate the entry point you created earlier.
   - Click on the entry point block and copy the provided JavaScript snippet.
   - Paste the JavaScript snippet into the header or footer of your website's HTML code.

8. **Deploy and Test the Chatbot:**
   - Deploy your website and verify that the chatbot is functioning correctly.
   - Engage with the chatbot to ensure that it is responding to user inputs as expected.

--------------------