Feature: Visit home page
    As a user
    I want to visit the home page

    Scenario: Visit index page
        Given I am on the homepage
        Then The title of header should equal "Angular end-to-end"
