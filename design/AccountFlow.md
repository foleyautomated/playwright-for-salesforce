:::mermaid
sequenceDiagram
    participant CONT as Contact
    participant ACCT as Account
    participant LEAD as Lead
    participant OPP as Opportunity
    participant AGR as Agreement

    CONT->>ACCT: Create
    ACCT->>LEAD: Field 1
    ACCT->>LEAD: Field 2
    note over ACCT, AGR: Explain Business Logic 💵💸💰
    LEAD->>AGR: Some Trigger
    AGR->>AGR: Internal Agreement Logic
    alt [Opportunity Not Found]
        ACCT->>OPP: Create New Opportunity
    else
        ACCT->>AGR: Continue
        ACCT->>AGR: This Thing
    end

:::