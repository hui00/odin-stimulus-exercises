# README

Exercises for Stimulus 

https://www.theodinproject.com/lessons/ruby-on-rails-stimulus

- Write some HTML that uses the example controller in app/javascript/controllers/hello_controller.js

- Create your own toggle controller and use it in your view. It should be able to show/hide elements upon clicking a button.

- Make sure your toggle controller is reusable. Try to make it do the following things:
    - Clicking a button will show another element (like a dropdown menu)
    - Clicking an element will hide the clicked element and show another
    - Clicking a checkbox will highlight the element containing the checkbox

- Write a controller for text inputs with a limited length. Warn a user when they are close or over the maximum character count (imagine a user writing a tweet which has a maximum length of 280 characters)

- Project: In a new Rails app, create a car model that :has_many variants; make up some attributes. Then create a form to edit a car in which you can dynamically add more variants using :accepts_nested_attributes_for and a Stimulus controller (that adds the form fields you need for a new variant entry). Bonus points for destroying existing records when submitting.
