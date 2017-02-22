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
WHERE a.relname = 'attendees' and c.relname = 'attendees_concert_id_index';
