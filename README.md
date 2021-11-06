### Requirements
- Email format validation
  - Example: "alex@gmail" is not a valid email
  - The user interface should indicate whether or not the email address is valid
  - Where appropriate the interface should indicate what is wrong with the address
- Email deliverability validation
  - Users often typo an address, for example wrong domain name (gmail.con vs gmail.com), or just mis type it
  - Use an existing API to confirm the email address can be delivered to, we recommend getting a free account at kickbox.io, and using their API
  - Where appropriate the interface should indicate what is wrong
- Autocomplete domain names
  - Typing email addresses is a pain, wouldn't it be nice if we didn't have to type the whole thing in?
  - We have observed that most email addresses end in popular domain names such as gmail.com, yahoo.com
  - Your autocomplete should suggest likely domain names and complete addresses
    - For example if the user types "alex@" we'd expect suggestions based on most popular domains, say "alex@gmail.com", "alex@yahoo.com", ...
    - If the user refines and types "alex@g" we'd expect suggestions based on popular domains beginning with g eg "alex@gmail.com", "alex@gmail.co.uk", ...

### Implementation
- You should build an app, that we can run on any iOS device we might have at the office
- The app should have one screen, with one text box, that we can type an email address into
- Please write your code in Swift. We do not use Objective C and so will not accept a submission in that language.

### Evaluating your solution
Your solution will be evaluated against the following criteria:
- We were able to easily build and run your code using XCode on OSX
- Code quality - is your code clean, simple, commented, modern, well designed
- User experience - how simple, intuitive and clear is the UI
- UI - make sure you're using a good layout, simple/modern colors. It's best to stick with current standards.
- Error handling - your code should handle potential errors gracefully

### Submission
- Do not place your code on GitHub or any other source version control platform.
- Please create a zip file, that we can unzip, open in XCode, and run
  - The cleaner/simpler your zip file the better, we don't want to see any binaries, or other things you wouldn't check into version control
- Upload your zipped submission to DropBox or something similar, and include it in your application.
