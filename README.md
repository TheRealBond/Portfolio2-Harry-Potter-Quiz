# Portfolio2-Harry-Potter-Quiz
A website built using HTML5, CSS and Javascript to allow users to test their Harry Potter knowledge.It is built to allow fans of the Harry Potter books an films to attempty a quiz that is responsive to their actions and answers to demonstrate the power of Javascript to improve the user experience of a website.

## Features:

- Header: Clearly lets the user know what the purpose of what the website is and what to expect as they scroll down, which is a quiz on Harry Potter while welcoming them.
![headerimage](/assets/images/header-readme.png)

- Hogwarts House selector: Allows the user to choose which Hogwarts House they belong to using the buttons. With the background colour of the quiz area responding to reflect their choice giving it that personal touch.
![house-selectorimage](/assets/images/house-select-readme.png)

- Quiz area: This is the part of the website that tests the user's knowledge by asking them to answer 5 questions based on the Harry Potter books and films. It responds to their answers when they click the Submit Answers button. Correct answers will have their answer box background changed to gold.
![quiz-areaimage](/assets/images/quiz-area-readme.png)

- Footer: This area will also respond to the user's answers when they click the Submit Answers button by adding to the Correct and Incorrect Answer tallys depending if the user's answers are correct. It also has a hyper-link included to enable the user to click and go to the official website of Harry Potter (https://www.wizardingworld.com/) in a new tab/window where they can research their answers if needed or simply enjoy learning more about Harry Potter.
![footerimage](/assets/images/footer-readme.png)

-Future: In the future I would like to add the ability to show house scores for the duration of the day or week to enable the running of a competion between fans to see which house scores the highest and would win the house cup for that time period. This hasn't been implemented so far as it would require an external database to hold the user's score and Hogwarts house which is not set up yet.

## Testing:

The website has been extensively tested to ensure that all features are working correctly across different browsers and devices so that as many people as possible can enjoy the challenge of the quiz it holds fairly.
Use of alerts to test checkAnswers function was working correctly when comparing user answers to correct ones held in Javascript was especially useful as it enabled fast effective testing before alerts were removed to improve the user experience to only having one now to ask them to select a Hogwarts house. Once checkAnswers functions were confirmed as working correctly it allowed for more complex functions to be introduced depending on the outcome such as score changes and background colour changes.

- HTML: No errors are now returned when using the offical [W3C Validator] (https://validator.w3.org/nu/#textarea) after initially discovering that an id of `question4` had been used twice and a `>`character was missing from `<meta charset="UTF-8`.
![HTMLtestimage](/assets/images/htmltest.png)
![HTMLpassimage](/assets/images/htmlpass.png)

- CSS: No errors returned when using the official [Jigsaw Validator] (https://jigsaw.w3.org/css-validator/#validate_by_input).
![CSSpassimage](/assets/images/cssjigsawpass.png)

- Javascript: No errors were returned when passing through the offical [jshint validator] (https://jshint.com/), a number of warnings are showing which has been reduced following first run through due to incorrect uses of (;).
![Javascripttestimage](/assets/images/jshinttest.png)
![Javasciptimproveimage](/assets/images/jshintimprove.png)

- lighthouse: Lighthouse scores are now high after intial tests showed that website needed improving so labels were added to Answer boxes.
![lighthousefailimage](/assets/images/lighthousefail.png)
![lighthousepassimage](/assets/images/lighthousepass.png)

## Bugs: 
There are now no bugs remaining having encountered one that would not load the website's CSS when it was deployed. This was removed by adding the correct file pathway `(href="./assets/css/style.css")` that needed the `./` to begin with to find the assets folder which holds the css folder and file.

## Deployment:
 This website was built using Gitpod and Github services which has now been deployed at the following address: (https://therealbond.github.io/Portfolio2-Harry-Potter-Quiz/)
I had to create a repository on my Github profile called: Portfolio2-Harry-Potter-Quiz. 
Then click on settings, pages, and ensure that the Source had been set to Branch-main and /root before saving.
This then started the process of deploying the page which loaded a live link after a few minutes.

## Credits:

-Harry Potter:
This quiz is based on the Harry Potter series of books and subsequent films by J.K. Rowling and Warner Bros.


-favicon: Link to supply Mage icon that appears in browser tab alongside it's title:
 https://favicon.io/emoji-favicons/mage
Code used: ```    <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">```
    
-Font Awesome: Wizard hat icon used in ```<h2>``` to resemble the sorting hat from the books.
  website: https://fontawesome.com/icons/hat-wizard?s=regular
Code used: ``` <i class="fa-solid fa-hat-wizard"></i>```
