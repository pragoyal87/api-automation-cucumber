@vote
Feature: Verification of voting API

    @regression
    Scenario Outline:  Verify Vote API should respond success message when user enter valid for voting
        When User vote to the party <image_id> and sub party <sub_id> and value of his vote is <value> at <PortalName>
        Then User should receive the status code <status>
        And User should get the response message <message>

        Examples:
            | image_id | sub_id | value | status | message | PortalName  |
            | congress | INC    | yes   | 200    | SUCCESS | voteUK |

    @error
    Scenario Outline:  Verify Vote API should respond with valid error message when user don't select the image for voting
        When User vote to the party <image_id> and sub party <sub_id> and value of his vote is <value> at <PortalName>
        Then User should receive the status code <status>
        And User should get the response message <message>

        Examples:
            | image_id | sub_id | value | status | message                     | PortalName  |
            |          | INC    | yes   | 400    | "image_id" must be a string | voteUK |

