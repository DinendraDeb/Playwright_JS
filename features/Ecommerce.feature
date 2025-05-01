Feature: Ecommerce validations
  As a user
  I want to be able to add items to my cart
  So that I can purchase them later

  Scenario: Placing the order
    Given A login to ecommerce application with "Dami@gmail.com" and "Iamking@000"
    When Add "Zara Coat 3" to cart
    Then Verify "Zara Coat 3" is displayed in the cart
    When Enter valid details and place the order
    Then Verify order is present in the order history
