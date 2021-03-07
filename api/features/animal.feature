@animal
Feature: As a user i want to add animal details at medic portal

    Scenario Outline: To verify user should add his pet details successfully

        Given As a user i want to add my animal details at <PortalName>
        Then User should receive the status code <status>
        Examples:
            | PortalName  | status |
            | medicAnimal | 201    |


