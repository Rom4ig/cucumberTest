Feature: Onliner login
  @skip
  Scenario Outline: As a user I want to log into the system

    Given I am on the main page
    When I login with <username> and <password>
    Then I should see profile icon

    Examples:
      | username            | password
      | romses2000@mail.ru  | dr0w$$p@
