/* Exercise sqlMigrations
// Using SQL, build a migration for the following one-to-many relationship.
//
// ┌───────────────────────────────────────────────────────────────┐
// │                           concerts                            │
// ├─────────────┬─────────────────────────┬───────────────────────┤
// │id           │serial                   │primary key            │
// │name         │varchar(255)             │not null default ''    │
// │price        │numeric(8, 2)            │not null default 1.00  │
// │started_at   │timestamp with time zone │not null default now() │
// │ended_at     │timestamp with time zone │not null default now() │
// └─────────────┴─────────────────────────┴───────────────────────┘
//                                 ┼
//                                 │
//                                 │
//                                 ○
//                                ╱│╲
// ┌──────────────────────────────────────────────────────────────────────────────────────────┐
// │                                        attendees                                         │
// ├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
// │id           │serial                   │primary key                                       │
// │concert_id   │integer                  │not null references concerts(id) on delete cascade│
// │name         │varchar(255)             │not null default ''                               │
// │age          │integer                  │not null default 0                                │
// └─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
//
//
//
// Ensure all primary and foreign keys have an index. Rememember to drop any existing tables from the database before creating new ones.
//
// To test:
// npm test 10-SQL-migrations/test.js
*/


DROP TABLE IF EXISTS attendees;
DROP TABLE IF EXISTS concerts;

-- Add solutions here




/* Exercise getPrimaryKeyOnConcertsTable
   Please do modify, it used in the tests
*/

SELECT constraint_name, constraint_type
FROM information_schema.table_constraints
WHERE table_name = 'concerts' AND constraint_type='PRIMARY KEY';


/* Exercise getPrimaryKeyOnAttendiesTable
   Please do modify, it used in the tests
*/

SELECT constraint_name, constraint_type
FROM information_schema.table_constraints
WHERE table_name = 'attendees' AND constraint_type='PRIMARY KEY';


/* Exercise getForeignKeyOnAttendeesTable
   Please do modify, it used in the tests
*/

SELECT constraint_name, constraint_type
FROM information_schema.table_constraints
WHERE table_name = 'attendees' AND constraint_type='FOREIGN KEY';

/* Exercise getIndexesOnAttendeesTable
   Please do modify, it used in the tests
*/

SELECT
c.relname AS index_name
FROM
pg_class AS a
JOIN pg_index AS b ON (a.oid = b.indrelid)
JOIN pg_class AS c ON (c.oid = b.indexrelid)
WHERE a.relname = 'attendees' and c.relname = 'attendees_concert_id_idx';
