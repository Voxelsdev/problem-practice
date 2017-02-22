/*
Using Knex, build migration files for the following one-to-many relationship.

┌───────────────────────────────────────────────────────────────┐
│                           concerts                            │
├─────────────┬─────────────────────────┬───────────────────────┤
│id           │serial                   │primary key            │
│name         │varchar(255)             │not null default ''    │
│price        │numeric(8, 2)            │not null default 1.00  │
│started_at   │timestamp with time zone │not null default now() │
│ended_at     │timestamp with time zone │not null default now() │
└─────────────┴─────────────────────────┴───────────────────────┘
                                ┼
                                │
                                │
                                ○
                               ╱│╲
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                        attendees                                         │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
│concert_id   │integer                  │not null references concerts(id) on delete cascade│
│name         │varchar(255)             │not null default ''                               │
│age          │integer                  │not null default 0                                │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘

Ensure all primary and foreign keys have an index.

Add the migrations for the concert entity in the 1_concert.js file, and the migrations for the attendees entity in the 2_attendees.js file.

To run tests

npm test 12-knex-migrations/test.js
*/
