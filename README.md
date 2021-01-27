# Valorant Agents

https://varit-valorant-agents.netlify.app/

## Project Description

Valorant Agents project utilizes React JS, JavaScript, API, CRUD, HTML 5 and CSS 3 to display all 11 Agents data onto a Single Page App. All Agents will have their names displayed on page load. Agent that have their name on focused will additionally have their image, role and biography displayed along side them.

## Wireframes & Color Palette



![imageAlt](https://i.imgur.com/ovycVvA.png)
![imageAlt](https://i.imgur.com/mNib6Gm.png)
![imageAlt](https://i.imgur.com/WXzLtnY.png)
![imageAlt](https://i.imgur.com/vu8xte7.png)
![imageAlt](https://i.imgur.com/ymhUjmv.png)
![imageAlt](https://i.imgur.com/SUGXXRp.png)

## Component Hierarchy

![imageAlt](https://i.imgur.com/vn7eife.png)

## API and Data Sample

https://airtable.com/shrY9ByolApig7M1f/tble5Cv3lofqkHfqx

Airtable is returning the data for this base as follows:

```
{
records: [
    {
        id: "rec4bLmiHqGh4ISib",
        fields: {
            name: "Breach",
            biography: "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
            image: "https://static.wikia.nocookie.net/valorant_esports_gamepedia_en/images/d/de/Agent_Breach_Half.png",
            role: "Initiator"
        },
        createdTime: "2021-01-20T14:14:49.000Z"
        },
        {
        id: "rec5FRunF4ExseaPL",
        fields: {
            name: "Brimstone",
            biography: "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.",
            image: "https://static.wikia.nocookie.net/valorant_esports_gamepedia_en/images/9/91/Agent_Brimstone_Half.png",
            role: "Controller"
        },
        createdTime: "2021-01-20T14:04:50.000Z"
    },

```

### MVP/PostMVP

#### MVP

- Display Agents' image, name, role and biography
- User able to create and display new Agent and update Airtable API data
- Scrollable Agents' name

#### PostMVP

- Create parallax scrolling
- Create custom animated background

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| 1/20/2021 | Proposal Approval / Airtable Setup         | Complete |
| 1/21/2021 | Component Creation / Get, Set              | Complete |
| 1/22/2021 | Component Creation, continued/ CSS Components | Complete |
| 1/23/2021 | CSS Components, continued / MVP                | Complete |
| 1/24/2021 | Advanced CSS                               | Complete |
| 1/27/2021 | Presentations                              | Complete |

## Timeframes

| Component                                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------| :------: | :------------: | :-----------: | :---------: |
| Proposal                                  |    H     |      2hrs      |     2hrs      |     2hrs    |
| Airtable setup                            |    H     |     .5hrs      |     .5hrs     |     .5hrs   |
| Components Header, creation               |    H     |      1hr       |     1hr       |     1hr     |
| Components Footer, creation               |    H     |      1hr       |     1hr       |     1hr     |
| Components Name, creation                 |    H     |      1hr       |     1hr       |     1hr     |
| Components Image, creation                |    H     |      1hr       |     1hr       |     1hr     |
| Components Description, creation          |    H     |      1hr       |     1hr       |     1hr     |
| Components Create, creation               |    H     |      1hr       |     1hr       |     1hr     |
| Components Hamburger, creation            |    H     |      1hr       |     1hr       |     1hr     |
| Components Header, implementation         |    H     |      2hrs      |     2hrs      |     2hrs    |
| Components Footer, implementation         |    H     |      2hrs      |     2hrs      |     2hrs    |
| Components Name, implementation           |    H     |      2hrs      |     2hrs      |     2hrs    |
| Components Image, implementation          |    H     |      2hrs      |     2hrs      |     2hrs    |
| Components Description, implementation    |    H     |      2hrs      |     2hrs      |     2hrs    |
| Components Create, implementation         |    H     |      2hrs      |     2hrs      |     2hrs    |
| Components Hamburger Menu, implementation |    H     |      2hrs      |     2hrs      |     2hrs    |
| Basic CSS                                 |    H     |      5hrs      |     5hrs      |     5hrs    |
| Advanced CSS                              |    H     |      15hrs     |     15hrs     |     15hrs   |
| Total                                     |    H     |    43.5hrs     |     43.5hrs   |     43.5hrs |