Feature: Cash Withdrawl
Scenario: Sucessfull withdrawl from a account in credit
Given I have deposit <deposited> NOK in my account 
When I withdraw <withdrawd> NOK
Then <dispens> NOK should be dispensed
And balance of the account is <balance> NOK

Examples:
    | deposited | withdrawd | dispens | balance|
    | 1000      |   200     | 200     | 800    |
    | 500       |   300     | 300     | 200    |