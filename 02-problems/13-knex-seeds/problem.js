/*
Using Knex, build seed files for the following database tables.

Concerts

| id | name                          | price |
|----|-------------------------------|-------|
| 1  | Capitol Hill Block Party 2016 | 49.99 |
| 2  | Bumbershoot 2016              | 64.99 |


Attendees

| id | concert_id | name            | age |
|----|------------|-----------------|-----|
| 1  | 1          | Daniel Bailey   | 52  |
| 2  | 1          | Heidi McGuire   | 30  |
| 3  | 2          | Corey Reyes     | 26  |
| 4  | 2          | Kristi Sheridan | 45  |


Add seeds for the concerts table in the 1_concert_seed.js file, and seeds for the attendees table in the 2_attendees_seed.js file

To test:
npm test 13-knex-seeds/test.js

*/
