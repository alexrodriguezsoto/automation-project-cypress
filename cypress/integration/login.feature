Feature: log in
  Feature Description
  Navigate and log in to Application under test

  Scenario: Log in
    Given I am in landing page
    Then I enter username
    Then I enter Password
    And I validate current page