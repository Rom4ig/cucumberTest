Feature: Onliner login


  Scenario Outline: As a user I want to log into the system

    Given I am on the main page
    When I login with <username> and <password>

    When I search <item>
    Then I should see category with name <category>

    Examples:
      | username            | password | item | category
      | romses2000@mail.ru  | dr0w$$p@ | Компьютер | Компьютеры
