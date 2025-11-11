---
title: Walk through Polkadot Grant Ecosystem
presenter: Tin
duration: 75 minutes
---

# Polkadot Grant Ecosystem

**Writing Winning Proposals and Accessing Funding**

**Presenter:** Tin

**Workshop Focus:** Understanding grants, writing proposals, and securing funding

---

## 📺 Workshop Recording

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/9mqerlQXgMk?si=gkycaA8hhSI5aO8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🎯 Workshop Objectives

By the end of this workshop, you will:

- Understand the Polkadot funding landscape
- Know different grant programs and their requirements
- Learn to write compelling proposals
- Analyze good vs bad proposals
- Master tips and tricks for success
- Understand the application and review process

![Grant Ecosystem](https://via.placeholder.com/800x400/0D0D0D/E6007A?text=Grant+Funding)

---

## The Polkadot Funding Landscape

### Overview

**Multiple Funding Sources:**

```mermaid
graph TB
    ROOT[Polkadot Ecosystem Funding]

    ROOT --> W3F[Web3 Foundation Grants]
    ROOT --> TREAS[Polkadot Treasury]
    ROOT --> COMM[Community Grants]
    ROOT --> HACK[Hackathons & Accelerators]

    W3F --> L1[Level 1: $10k]
    W3F --> L2[Level 2: $30k]
    W3F --> L3[Level 3: $30k+]

    TREAS --> PROP[Proposals: Variable]
    TREAS --> BOUNT[Bounties: Large]

    COMM --> ECO[Ecosystem Grants]
    COMM --> DEV[Developer Grants]
    COMM --> EDU[Education Grants]

    HACK --> PRIZE[Hackathon Prizes]
    HACK --> BUILD[Substrate Builders]
    HACK --> VC[VC Funding]

    style ROOT fill:#E6007A,stroke:#fff,color:#fff
    style W3F fill:#552BBF,stroke:#fff,color:#fff
    style TREAS fill:#552BBF,stroke:#fff,color:#fff
    style PARA fill:#552BBF,stroke:#fff,color:#fff
    style HACK fill:#552BBF,stroke:#fff,color:#fff
```

### Funding by Stage

**Idea Stage:**

- Hackathons ($1k-$10k)
- Level 1 Grants ($10k)

**Building Stage:**

- Level 2 Grants ($30k)
- Community Grants ($10k-$50k)

**Growth Stage:**

- Level 3 Grants ($30k-$100k+)
- Treasury Proposals ($50k-$500k+)

**Scale Stage:**

- Polkadot Hub Deployment
- VC Funding
- Revenue generation

![Funding Stages](https://via.placeholder.com/800x400/0D0D0D/552BBF?text=Funding+Journey)

---

## Web3 Foundation Grants

### Grant Levels Explained

**Level 1: Up to $10,000**

**Characteristics:**

- Fast approval (2-4 weeks)
- Minimal requirements
- Perfect for individuals
- Proof of concept focus
- No legal entity needed
- No interview required

**Ideal For:**

- Research projects
- Prototypes
- Developer tools
- Educational content
- Small improvements

**Example Projects:**

- Substrate pallet
- Developer tutorial series
- Analysis tool
- Library or SDK
- Documentation improvements

---

**Level 2: Up to $30,000**

**Characteristics:**

- Longer review (4-8 weeks)
- More detailed requirements
- Working prototype preferred
- Team recommended
- Sometimes requires interview
- Milestone-based payments

**Ideal For:**

- Feature-complete applications
- Substantial improvements
- Complex developer tools
- Multi-phase projects
- Team projects

**Example Projects:**

- Full dApp with UI
- Substrate chain
- Infrastructure service
- Complex integration
- Security tool

---

**Level 3: $30,000+**

**Characteristics:**

- Extended review (8-12 weeks)
- Comprehensive application
- Established team required
- Multiple interviews
- Strict milestone tracking
- Ongoing reporting

**Ideal For:**

- Production-ready projects
- Major infrastructure
- Significant R&D
- Long-term initiatives
- Established teams

**Example Projects:**

- Parachain development
- Major protocol upgrade
- Large infrastructure project
- Extensive research
- Ecosystem-wide tool

![Grant Levels](https://via.placeholder.com/800x400/0D0D0D/00B2FF?text=Grant+Tiers)

---

## Polkadot Treasury

### What is the Treasury?

**The Polkadot Treasury:**

- On-chain fund
- Community governed
- Funded by inflation + fees
- Distributed via proposals
- No limit on amount

**Current Stats:**

- ~$200M+ in treasury
- ~5% inflation funding
- Regular spending proposals
- Community decides allocation

### Treasury Proposal Process

```mermaid
graph TB
    START[Draft Proposal]

    subgraph STEP1["Step 1: Discussion (1-2 weeks)"]
        START --> FORUM[Forum Discussion]
        FORUM --> FEEDBACK[Gather Feedback]
        FEEDBACK --> REFINE[Refine Proposal]
    end

    subgraph STEP2["Step 2: Submission (On-chain)"]
        REFINE --> SUBMIT[Submit Proposal<br/>+ Deposit]
        SUBMIT --> COUNCIL[Council Review]
        COUNCIL --> VOTE[Community Voting]
        VOTE --> DECISION{Approval/Rejection}
    end

    subgraph STEP3["Step 3: Execution"]
        DECISION -->|Approved| APPROVE[Approved Proposal]
        APPROVE --> MILESTONE[Milestone Delivery]
        MILESTONE --> PAY[Payment Release]
        PAY --> REPORT[Ongoing Reports]
    end

    DECISION -->|Rejected| REJECT[Rejected]

    style START fill:#E6007A,stroke:#fff,color:#fff
    style SUBMIT fill:#552BBF,stroke:#fff,color:#fff
    style APPROVE fill:#00ff00,stroke:#fff,color:#000
    style REJECT fill:#ff0000,stroke:#fff,color:#fff
```

### Treasury vs Grants

**Web3 Foundation Grants:**
✅ Faster approval
✅ Clear criteria
✅ Support provided
❌ Capped amounts
❌ Specific scope

**Treasury Proposals:**
✅ Unlimited funding
✅ Community driven
✅ Flexible scope
❌ Slower process
❌ Political aspect
❌ Requires reputation

**Best Strategy:** Start with grants, graduate to treasury

---

## What Gets Funded?

### Priority Categories

**1. Developer Tools (High Priority)**

**Examples:**

- IDEs and plugins
- Testing frameworks
- Deployment tools
- SDK and libraries
- Code generators
- Documentation tools

**Why Funded:**

- Improves DX
- Accelerates development
- Benefits entire ecosystem
- Long-term impact

**Recent Grants:**

- Substrate playground improvements
- Polkadot.js enhancements
- Testing utilities
- Code audit tools

---

**2. Infrastructure (High Priority)**

**Examples:**

- Block explorers
- RPC nodes
- Indexing services
- Monitoring tools
- Analytics platforms
- Archive nodes

**Why Funded:**

- Critical to ecosystem
- Public goods
- Reduces friction
- Enables other projects

**Recent Grants:**

- SubQuery development
- Subscan improvements
- RPC infrastructure
- Monitoring solutions

---

**3. Core Protocol (High Priority)**

**Examples:**

- Runtime improvements
- Substrate pallets
- XCM enhancements
- Security audits
- Performance optimizations
- Protocol research

**Why Funded:**

- Direct protocol improvement
- Security critical
- Benefits all users
- Technical excellence

---

**4. Applications (Medium Priority)**

**Examples:**

- DeFi protocols
- NFT platforms
- DAO tools
- Gaming applications
- Social platforms
- Identity solutions

**Why Funded:**

- Showcase capabilities
- Attract users
- Prove use cases
- Drive adoption

**Note:** Must be exceptional and open-source

---

**5. Education (Medium Priority)**

**Examples:**

- Tutorials and courses
- Workshop materials
- Documentation
- Video content
- Translation work
- Community education

**Why Funded:**

- Lowers barriers
- Grows community
- Reduces support burden
- Long-term investment

---

**6. Research (Medium Priority)**

**Examples:**

- Cryptographic research
- Economic models
- Scalability solutions
- Privacy technology
- Consensus improvements

**Why Funded:**

- Innovation
- Technical advancement
- Academic credibility
- Future-proofing

---

### What Doesn't Get Funded

❌ **Closed Source Projects**

- Must be open source
- Exception for deployment/operations

❌ **Marketing Only**

- Pure marketing campaigns
- Social media management
- No technical substance

❌ **Clone Projects**

- Copies of existing projects
- No unique value
- Fork without innovation

❌ **For-Profit Only**

- Projects with no public benefit
- Solely commercial ventures
- Token sales

❌ **Incomplete Applications**

- Vague descriptions
- No technical details
- Missing team info
- Unrealistic timelines

❌ **Unrealistic Scope**

- Over-ambitious goals
- Insufficient budget
- Inexperienced team
- No proof of capability

![Funding Categories](https://via.placeholder.com/800x400/0D0D0D/E6007A?text=What+Gets+Funded)

---

## Writing a Winning Proposal

### Proposal Structure

**Essential Components:**

```
1. Project Overview (1 page)
   - What you're building
   - Why it matters
   - Key benefits

2. Team (1 page)
   - Who you are
   - Relevant experience
   - Past work
   - GitHub profiles

3. Technical Details (2-3 pages)
   - Architecture
   - Technologies used
   - Implementation plan
   - Technical challenges

4. Milestones (1-2 pages)
   - Clear deliverables
   - Timeline
   - Payment schedule
   - Success criteria

5. Budget (1 page)
   - Detailed breakdown
   - Justification
   - Market rates

6. Long-term Vision (1 page)
   - Sustainability
   - Maintenance plan
   - Future development
   - Growth strategy
```

### Project Overview Best Practices

**Bad Example:**

```
"We want to build a DEX on Polkadot because
DeFi is important and there aren't enough DEXes."
```

**Why Bad:**

- Too generic
- No differentiation
- Unclear value proposition

**Good Example:**

```
"We propose building an order-book DEX specifically
optimized for cross-chain trading via XCM. Unlike
existing AMMs, our solution provides:

1. Better price execution for large trades
2. Native cross-chain liquidity aggregation
3. MEV protection through fair ordering
4. Professional trading features (limit orders, etc.)

This fills a critical gap in the Polkadot DeFi
ecosystem, as current solutions are limited to
single-chain AMMs."
```

**Why Good:**

- Specific solution
- Clear differentiation
- Identified gap
- Concrete benefits

![Proposal Writing](https://via.placeholder.com/800x400/0D0D0D/552BBF?text=Write+Well)

---

### Team Section Best Practices

**Bad Example:**

```
"John: Developer with 5 years experience
Jane: Marketing expert
Bob: Operations"
```

**Why Bad:**

- Too vague
- No relevant experience
- No proof of ability
- Missing GitHub/LinkedIn

**Good Example:**

```
"John Smith - Lead Developer
- 5 years Substrate development
- Core contributor to Pallet-XCM
- Previously built DeFi protocol (GitHub: @john)
- Delivered 2 W3F grants successfully
- LinkedIn: linkedin.com/in/johnsmith

Jane Doe - Full-stack Developer
- 3 years React/TypeScript
- Built polkadot.js-based dApps
- Open source contributor (GitHub: @jane)
- Portfolio: janedoe.dev

Technical Advisor: Dr. Bob Lee
- PhD in Distributed Systems
- 10 years blockchain research
- Published papers on consensus
- Currently at Parity Technologies"
```

**Why Good:**

- Specific experience
- Relevant to project
- Verifiable credentials
- Proof of past work
- Clear roles

---

### Milestone Structure

**Bad Example:**

```
Milestone 1: Development (2 months) - $10,000
Milestone 2: Testing (1 month) - $5,000
Milestone 3: Deployment (1 month) - $5,000
```

**Why Bad:**

- Too vague
- No clear deliverables
- Can't verify completion
- Arbitrary timelines

**Good Example:**

```
Milestone 1: Core Protocol (6 weeks) - $8,000
Deliverables:
- Order book matching engine (Rust)
- Unit tests (>80% coverage)
- Technical documentation
- Running on local testnet

Success Criteria:
- Can place and match orders
- All tests passing
- Documentation complete
- Demo video provided

---

Milestone 2: XCM Integration (4 weeks) - $6,000
Deliverables:
- XCM message handlers
- Cross-chain order routing
- Integration tests
- Deployed on Rococo testnet

Success Criteria:
- Orders routable across parachains
- XCM messages working
- Integration tests passing
- Testnet deployment verified

---

Milestone 3: Frontend (4 weeks) - $6,000
Deliverables:
- React-based trading UI
- Wallet integration
- Order management interface
- User documentation

Success Criteria:
- Functional trading interface
- Connects to testnet
- User testing completed
- Documentation published
```

**Why Good:**

- Specific deliverables
- Verifiable completion
- Clear success criteria
- Realistic timelines
- Appropriate pricing

![Milestones](https://via.placeholder.com/800x400/0D0D0D/00B2FF?text=Clear+Milestones)

---

### Budget Best Practices

**Bad Example:**

```
Development: $20,000
Testing: $5,000
Deployment: $5,000
Total: $30,000
```

**Why Bad:**

- No breakdown
- No justification
- Round numbers suspicious
- No market rates

**Good Example:**

```
Development Costs:
- Senior Substrate Developer:
  200 hours @ $75/hr = $15,000
- Frontend Developer:
  120 hours @ $60/hr = $7,200
- Smart Contract Development:
  80 hours @ $70/hr = $5,600

Infrastructure:
- Testnet deployment: $500
- Security audit: $3,000
- Server costs (3 months): $300

Third-party Services:
- Design work: $1,200
- Technical writing: $800

Contingency (10%): $3,360

Total: $36,960

Justification:
- Rates based on Polkadot developer market
- Audit required for security
- Design ensures professional UX
- Contingency for unexpected issues
```

**Why Good:**

- Detailed breakdown
- Hourly rates specified
- Market justification
- Includes necessary extras
- Realistic contingency

---

### Long-term Sustainability

**Bad Example:**

```
"After the grant, we'll continue development
and seek more funding."
```

**Why Bad:**

- No concrete plan
- Dependent on more grants
- Unclear sustainability

**Good Example:**

```
Long-term Sustainability Plan:

Phase 1 (Grant Period):
- Deliver core functionality
- Build user base
- Establish reputation

Phase 2 (Months 4-6):
- Apply for Polkadot Treasury funding
- Implement premium features
- Launch token economic model

Phase 3 (Months 7-12):
- Transaction fees generate revenue
- Premium API for institutions
- Possible parachain deployment

Phase 4 (Year 2+):
- Self-sustaining via fees
- Community governance
- Continuous improvement
- Give back to ecosystem

Revenue Model:
- 0.1% trading fees
- Premium API subscriptions ($500/mo)
- Institutional features ($2,000/mo)

Projected Revenue (Year 2):
- Trading fees: $50,000/year
- Premium features: $30,000/year
- Sustainable without grants
```

**Why Good:**

- Specific phases
- Revenue model
- Realistic projections
- Path to sustainability
- Community focus

---

## Comparing Good vs Bad Proposals

### Example 1: Developer Tool

**❌ Bad Proposal:**

```
Title: Substrate Development Tool

Overview:
We want to build a tool for Substrate developers.
It will make development easier.

Team:
- Developer with experience

Milestones:
- Month 1: Start development
- Month 2: Continue development
- Month 3: Finish development

Budget: $15,000

This tool will help the ecosystem.
```

**Problems:**

- Vague description
- No specifics
- Unverifiable milestones
- No technical details
- Minimal team info
- No market analysis

---

**✅ Good Proposal:**

```
Title: Substrate REPL with Hot-Reload Support

Overview:
We propose building a REPL (Read-Eval-Print Loop)
for Substrate runtime development with hot-reload
capabilities, addressing the slow compile-test cycle
that developers currently face.

Problem:
Current Substrate development requires 5-10 minute
compile times for each change, significantly slowing
iteration speed. A REPL would enable instant feedback.

Solution:
A tool that allows developers to:
1. Test pallet logic interactively
2. Query state in real-time
3. Hot-reload runtime changes
4. Inspect and debug execution

Technical Approach:
- Built in Rust using reedline library
- Integrates with substrate-node-template
- WASM interpreter for hot-reload
- State introspection via RPC
- VS Code extension for integration

Team:
[Detailed team info as in previous example]

Similar Projects:
Unlike Polkadot.js Apps (UI-focused) or Subxt
(client library), our REPL focuses on runtime
development workflow, similar to Python's iPython
for blockchain development.

Milestones:
[Detailed milestones with specific deliverables]

Budget: $15,000
[Detailed breakdown]

Impact:
- Reduces development time by 50%
- Lowers barrier to entry
- Improves developer experience
- Benefits all Substrate developers
- Estimated 500+ developers will use

Long-term:
- Maintain as open source
- Community contributions
- VS Code marketplace distribution
- Integration with Substrate Playground
```

**Why Excellent:**

- Specific problem identified
- Clear solution
- Technical details
- Market analysis
- Verifiable impact
- Sustainability plan

![Good vs Bad](https://via.placeholder.com/800x400/0D0D0D/00B2FF?text=Proposal+Quality)

---

## Tips and Tricks for Success

### Before You Apply

**1. Do Your Research**

```
✅ Study similar grants
✅ Read forum discussions
✅ Check granted projects
✅ Understand priorities
✅ Know the reviewers' perspective
```

**2. Start Small**

```
✅ Apply for Level 1 first
✅ Build reputation
✅ Deliver successfully
✅ Then apply for larger grants
```

**3. Engage with Community**

```
✅ Join Discord/Forum
✅ Ask questions early
✅ Share progress
✅ Help others
✅ Build relationships
```

**4. Validate Your Idea**

```
✅ Build proof of concept
✅ Get user feedback
✅ Demo at events
✅ Gather support
```

---

### Writing the Application

**1. Be Specific**

```
❌ "Build a DeFi application"
✅ "Build an order-book DEX with XCM integration"

❌ "Experienced team"
✅ "John: 5 years Substrate, delivered 2 W3F grants"

❌ "Will improve ecosystem"
✅ "Will reduce development time by 50% for
    500+ Substrate developers"
```

**2. Show, Don't Tell**

```
❌ "We are qualified"
✅ "GitHub: github.com/username showing
    3 years of Substrate contributions"

❌ "This is important"
✅ "Survey of 200 developers shows 80% need this tool"

❌ "We can deliver"
✅ "Previously delivered X and Y projects on time"
```

**3. Address Concerns Proactively**

```
"Why this is better than existing solutions..."
"Why our team is qualified..."
"How we'll ensure sustainability..."
"What if we face technical challenges..."
```

---

### Milestone Design

**SMART Milestones:**

**Specific:**

- "Implement order-book matching engine"
- Not: "Work on backend"

**Measurable:**

- "Unit tests with >80% coverage"
- Not: "Write tests"

**Achievable:**

- Based on team capacity
- Realistic timelines
- Appropriate scope

**Relevant:**

- Contributes to final goal
- Verifiable progress
- Clear value

**Time-bound:**

- Specific duration
- Clear deadline
- Reasonable timeline

**Example Milestone Template:**

```
Milestone X: [Name] (Duration: X weeks)
Budget: $X,XXX

Deliverables:
1. [Specific deliverable 1]
2. [Specific deliverable 2]
3. [Specific deliverable 3]

Technical Details:
- [Technology/approach]
- [Key challenges]
- [Testing strategy]

Success Criteria:
- [Measurable criterion 1]
- [Measurable criterion 2]
- [Measurable criterion 3]

Documentation:
- [Type of docs]
- [Tutorials/guides]
```

---

### Common Mistakes to Avoid

**1. Scope Creep**

```
❌ "We'll build a DEX, wallet, explorer, and NFT marketplace"
✅ "We'll build a DEX with these specific features"
```

**2. Unrealistic Timeline**

```
❌ "Full production application in 2 months"
✅ "MVP in 2 months, full features in 4 months"
```

**3. Insufficient Detail**

```
❌ "Use modern technology stack"
✅ "React 18, TypeScript, Polkadot.js, Hardhat"
```

**4. No Differentiation**

```
❌ "Another DEX for Polkadot"
✅ "First order-book DEX with cross-chain support"
```

**5. Vague Budget**

```
❌ "Development: $20,000"
✅ "Senior Dev: 200hrs @ $75/hr = $15,000..."
```

**6. Ignoring Feedback**

```
❌ Submit and wait
✅ Engage in forum, address questions, update proposal
```

**7. No Proof of Concept**

```
❌ Pure theory
✅ Working prototype or technical demo
```

![Tips for Success](https://via.placeholder.com/800x400/0D0D0D/552BBF?text=Success+Tips)

---

## The Application Process

### Step-by-Step Guide

```mermaid
graph LR
    W1[Week 1-2:<br/>Preparation] --> W3[Week 3:<br/>Application]
    W3 --> W4[Week 4:<br/>Review]
    W4 --> W5[Week 5:<br/>Submission]

    W1 -.-> W1A[Validate Idea<br/>Build POC<br/>Research<br/>Draft]
    W3 -.-> W3A[GitHub Setup<br/>Fork Repo<br/>Fill Template]
    W4 -.-> W4A[Team Review<br/>Get Feedback<br/>Revise]
    W5 -.-> W5A[Submit PR<br/>Respond<br/>Interview]

    style W1 fill:#E6007A,stroke:#fff,color:#fff
    style W3 fill:#552BBF,stroke:#fff,color:#fff
    style W4 fill:#E6007A,stroke:#fff,color:#fff
    style W5 fill:#552BBF,stroke:#fff,color:#fff
```

**Week 1-2: Preparation**

1. Validate idea
2. Build proof of concept
3. Research similar projects
4. Draft initial proposal
5. Get informal feedback

**Week 3: Application**

1. Create GitHub account (if needed)
2. Fork grants repository
3. Copy application template
4. Fill out all sections
5. Add supporting materials

**Week 4: Review**

1. Internal team review
2. Get external feedback
3. Revise and improve
4. Check all requirements
5. Proofread carefully

**Week 5: Submission**

1. Submit Pull Request
2. Monitor for questions
3. Respond promptly
4. Be ready for interview
5. Stay engaged

### GitHub Application Process

**1. Fork Repository**

```bash
# Fork on GitHub
github.com/w3f/Grants-Program

# Clone your fork
git clone https://github.com/YourUsername/Grants-Program
cd Grants-Program
```

**2. Create Application**

```bash
# Copy template
cp applications/application-template.md \
   applications/your-project-name.md

# Edit your application
# Fill out all sections
```

**3. Submit Pull Request**

```bash
# Commit changes
git add applications/your-project-name.md
git commit -m "Add your-project-name application"
git push origin main

# Create PR on GitHub
# Title: "[Application] Your Project Name"
# Fill in PR template
```

**4. Respond to Reviews**

```
- Check GitHub notifications
- Answer questions promptly
- Make requested changes
- Update PR as needed
- Be professional and patient
```

---

### Review Process Timeline

**Level 1 Grants:**

```
Submit → 1 week → Initial feedback
       → 2-3 weeks → Committee review
       → 4 weeks → Decision
```

**Level 2 Grants:**

```
Submit → 2 weeks → Initial feedback
       → 4-6 weeks → Committee review
       → 1-2 weeks → Interview (maybe)
       → 6-8 weeks → Decision
```

**Level 3 Grants:**

```
Submit → 2-3 weeks → Initial feedback
       → 6-8 weeks → Detailed review
       → 2-3 weeks → Multiple interviews
       → 10-12 weeks → Decision
```

**What Reviewers Look For:**

- Technical feasibility
- Team capability
- Clear value proposition
- Realistic scope
- Appropriate budget
- Ecosystem benefit
- Long-term viability

---

## After Getting the Grant

### Milestone Delivery

**1. Meet Deadlines**

```
✅ Deliver on time
✅ Communicate if delayed
✅ Update regularly
✅ Be transparent
```

**2. Provide Evidence**

```
For each milestone:
- GitHub repository link
- Commit hash
- Running instance (if applicable)
- Documentation
- Demo video
- Test results
```

**3. Documentation**

```
Required:
- README with setup instructions
- API documentation
- Architecture overview
- Testing guide
- Usage examples
```

**4. Communication**

```
- Regular progress updates
- Report issues early
- Ask for help when needed
- Share learnings
```

### Milestone Delivery Format

```markdown
# Milestone X Delivery

- **Application Document:** Link to approved application
- **Milestone Number:** X
- **Milestone Payment:** $X,XXX

## Deliverables

| Number | Deliverable | Link        | Notes        |
| ------ | ----------- | ----------- | ------------ |
| 1      | Feature X   | GitHub link | Completed    |
| 2      | Tests       | GitHub link | 85% coverage |
| 3      | Docs        | Link        | Published    |
| 4      | Article     | Link        | Medium post  |

## Additional Information

- All deliverables completed as specified
- Tests passing (see CI)
- Documentation deployed
- Demo video: [link]

### Notable changes:

- Used library Y instead of X (better performance)
- Added feature Z (no extra cost)
```

![Delivery Process](https://via.placeholder.com/800x400/0D0D0D/00B2FF?text=Deliver+Quality)

---

## Building Your Reputation

### First Grant Success

**During First Grant:**

```
✅ Over-deliver on quality
✅ Meet all deadlines
✅ Communicate proactively
✅ Document everything
✅ Help other grantees
```

**After First Grant:**

```
✅ Share your experience
✅ Write about learnings
✅ Continue maintenance
✅ Engage with community
✅ Prepare for next grant
```

### Building Track Record

**Grant #1: Small Success**

- Level 1 grant
- Deliver perfectly
- Build reputation

**Grant #2: Larger Scope**

- Level 2 grant
- Reference previous grant
- Proven track record

**Grant #3: Major Project**

- Level 3 or Treasury
- Established credibility
- Ambitious scope

**Long-term:**

- Become ecosystem contributor
- Help review applications
- Mentor other teams
- Give back

---

## Resources and Tools

### Essential Links

**Grant Programs:**

- W3F Grants: https://grants.web3.foundation
- Treasury: https://polkadot.polkassembly.io
- Substrate Builders: https://substrate.io/builders-program

**Application Resources:**

- Grant Application Template
- Approved Applications (study these!)
- FAQs
- Guidelines

**Community:**

- Grants Discord channel
- Polkadot Forum (Grants category)
- Office hours (scheduled)

### Helpful Tools

**Proposal Writing:**

- Grammarly (grammar check)
- Hemingway App (readability)
- Draw.io (diagrams)
- GitHub Markdown preview

**Budget Calculation:**

- Market rate research
- Hour estimation tools
- Currency converters

**Project Planning:**

- GitHub Projects
- Notion
- Linear
- Spreadsheets for budgets

![Resources](https://via.placeholder.com/800x400/0D0D0D/00B2FF?text=Use+Resources)

---

## Live Proposal Workshop

### Exercise: Write a Mini Proposal

**Scenario:**
You want to build a Substrate pallet for decentralized identity.

**Your Task (30 minutes):**

1. **Project Overview** (5 min)

   - What problem does it solve?
   - Why is it needed?
   - What makes it unique?

2. **Team** (5 min)

   - Your background
   - Relevant experience
   - Why you're qualified

3. **Technical Approach** (10 min)

   - High-level architecture
   - Key technologies
   - Main challenges

4. **Milestones** (10 min)
   - 2-3 milestones
   - Specific deliverables
   - Timeline
   - Budget estimate

**We'll Review Together:**

- Share your proposals
- Get feedback
- Learn from each other
- Refine approaches

---

## Q&A Session

### Common Questions

**Q: How long does grant review take?**
A: Level 1: ~4 weeks, Level 2: ~6-8 weeks, Level 3: ~10-12 weeks

**Q: Can I apply for multiple grants?**
A: Yes, but disclose all applications. Don't double-fund same work.

**Q: What if my grant is rejected?**
A: Ask for feedback, improve, and reapply. Many successful projects were rejected initially.

**Q: How much detail is too much?**
A: Better too much than too little. But stay focused and organized.

**Q: Should I include a token in my proposal?**
A: Only if essential to the project. Don't make it about the token.

**Q: Can I change milestones after approval?**
A: Small changes are OK with communication. Major changes need re-approval.

**Q: What if I can't deliver a milestone?**
A: Communicate immediately. Honesty is crucial. Can often adjust.

**Q: Do I need a company to apply?**
A: Not for Level 1-2. Level 3 usually requires legal entity.

**Q: Can I apply from any country?**
A: Yes, but some restrictions may apply based on sanctions.

**Q: Should I apply for maximum amount?**
A: No. Request what you actually need with justification.

### Open Discussion

**Your Questions:**

- Application concerns
- Specific project ideas
- Budget questions
- Process clarifications

---

## Success Stories

### Case Study 1: SubQuery

**Initial Grant:**

- Level 2 grant (~$30k)
- Built indexing tool
- Delivered perfectly

**Growth:**

- Multiple follow-up grants
- Treasury funding
- VC investment
- Parachain launch

**Key Lessons:**

- Started focused
- Delivered quality
- Scaled strategically
- Community first

---

### Case Study 2: DeFi Protocol on Polkadot Hub

**Journey:**

- Started with hackathon prototype
- Won initial prizes
- Applied for Level 1 grant
- Built MVP on Polkadot Hub testnet
- Secured Level 2 funding

**Key Lessons:**

- Prove concept first
- Use Polkadot Hub for quick deployment
- Build in public
- Engage community early
- Leverage EVM tooling

---

### Case Study 3: NFT Platform on Polkadot Hub

**Strategy:**

- Clear value proposition: Easy NFT creation
- Built on Polkadot Hub for accessibility
- Strong technical team
- Excellent execution and UX

**Key Lessons:**

- Fill specific need in ecosystem
- Execute professionally
- Support developers with documentation
- Build ecosystem partnerships
- Leverage relay chain security

**Common Success Factors:**

1. Clear vision
2. Strong execution
3. Community engagement
4. Quality over speed
5. Long-term thinking

![Success Stories](https://via.placeholder.com/800x400/0D0D0D/E6007A?text=Learn+from+Success)

---

## Action Plan

### Next Steps

**This Week:**

```
✅ Validate your project idea
✅ Create GitHub account
✅ Study approved applications
✅ Draft project overview
✅ Join grants Discord channel
```

**Next 2 Weeks:**

```
✅ Build proof of concept
✅ Write full proposal draft
✅ Get feedback from community
✅ Revise based on feedback
✅ Prepare supporting materials
```

**Week 4:**

```
✅ Final proposal review
✅ Submit application
✅ Monitor for feedback
✅ Respond to questions
✅ Prepare for interview (if needed)
```

### Proposal Checklist

**Before Submitting:**

Technical Content:

- [ ] Clear problem statement
- [ ] Specific solution description
- [ ] Technical architecture diagram
- [ ] Technology stack specified
- [ ] Risks and mitigations identified

Team:

- [ ] All team members listed
- [ ] Relevant experience shown
- [ ] GitHub profiles linked
- [ ] Past work referenced
- [ ] Roles clearly defined

Milestones:

- [ ] Specific deliverables
- [ ] Verifiable success criteria
- [ ] Realistic timelines
- [ ] Appropriate pricing
- [ ] Test plans included

Budget:

- [ ] Detailed breakdown
- [ ] Hourly rates specified
- [ ] Justified amounts
- [ ] Contingency included
- [ ] Market-rate comparison

Documentation:

- [ ] Long-term plan
- [ ] Maintenance strategy
- [ ] Revenue model (if applicable)
- [ ] Community benefits clear
- [ ] Open-source commitment

Presentation:

- [ ] No typos
- [ ] Clear formatting
- [ ] Diagrams included
- [ ] Links working
- [ ] Professional tone

---

## Final Tips

### Do's and Don'ts

**DO:**
✅ Start small and build reputation
✅ Over-communicate
✅ Ask questions early
✅ Study successful applications
✅ Be specific and detailed
✅ Show your work (GitHub, demos)
✅ Think long-term
✅ Be patient with process

**DON'T:**
❌ Overpromise
❌ Be vague
❌ Ignore feedback
❌ Rush application
❌ Copy others
❌ Focus only on money
❌ Forget community benefit
❌ Disappear after grant

### Remember

> "Grants are not just funding - they're partnerships with the ecosystem. Your success is the ecosystem's success."

**Core Principles:**

1. **Quality over quantity**
2. **Community over individual**
3. **Long-term over short-term**
4. **Execution over promises**
5. **Collaboration over competition**

---

## Thank You!

### Stay Connected

**Grant Resources:**

- W3F Grants Program
- Polkadot Forum
- Grants Discord

**Continue Learning:**

- Review approved applications
- Join office hours
- Engage with community
- Help others

### Next Steps for Hackathon

**After These Workshops:**

1. Apply learnings to your project
2. Build MVP
3. Deploy to testnet
4. Document everything
5. Prepare grant application

**Remember:**

- Every successful project started somewhere
- Your first grant might be small
- Build reputation over time
- Focus on delivering value
- The ecosystem is rooting for you!

### Good Luck! 🚀

**Now go build something amazing!**

![Build the Future](https://via.placeholder.com/800x400/0D0D0D/552BBF?text=Go+Build!)
