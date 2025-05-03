Feature: Ecommerce validations
  As a user
  I want to be able to add items to my cart
  So that I can purchase them later
  @Regression_Parameterization
  Scenario Outline: Placing the order
    Given A login to ecommerce application with "<username>" and "<password>"
    When Add "ZARA COAT 3" to cart
    Then Verify Zara Coat 3 is displayed in the cart after entering "Dami@gmail.com" and "India"
    When Enter valid details and place the order
    Then Verify " Thankyou for the order. " order is present in the order history

    Examples:
      | username            | password    |
      | Dami@gmail.com      | Iamking@000 |
