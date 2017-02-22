const db_name = 'knex_migration_test'

const expect = require('chai').expect;
const path = require('path');
const extract = require('./extract_sql_sync');
const concertMigration = require('./1_concert');
const attendeesMigration = require('./2_attendees');

const knexRaw = require('knex')({ client: 'pg', connection: 'postgres://localhost' });
const sql = extract(path.join(__dirname,'test_sql_helpers.js'));


let knexWithDB;

describe('sql seeds warmup', function(){
  before(function(done){
    knexRaw.raw(`DROP DATABASE IF EXISTS ${db_name}`)
    .then(function(){
      return knexRaw.raw(`CREATE DATABASE ${db_name};`)
    })
    .then(function(){
      knexWithDB = require('knex')({ client: 'pg', connection: `postgres://localhost/${db_name}` });
      done();
    })
    .catch(function(err){
      done(err);
    });
  });

  beforeEach(function(done){
    knexWithDB.raw('DROP TABLE IF EXISTS attendees')
    .then(function(){
      return knexWithDB.raw('DROP TABLE IF EXISTS concerts');
    })
    .then(function(){
      done();
    })
    .catch(function(err){
      done(err);
    })
  })

  it('should run up migrations for concerts', function(done){
    concertMigration.up(knexWithDB)
    .then(function(){
      return knexWithDB('concerts').columnInfo();
    })
    .then(function(columnInfo){
      expect(columnInfo).to.eql(
        { id:
         { type: 'integer',
           maxLength: null,
           nullable: false,
           defaultValue: 'nextval(\'concerts_id_seq\'::regclass)' },
        name:
         { type: 'character varying',
           maxLength: 255,
           nullable: false,
           defaultValue: '\'\'::character varying' },
        price:
         { type: 'numeric',
           maxLength: null,
           nullable: false,
           defaultValue: '\'1\'::numeric' },
        started_at:
         { type: 'timestamp with time zone',
           maxLength: null,
           nullable: false,
           defaultValue: 'now()' },
        ended_at:
         { type: 'timestamp with time zone',
           maxLength: null,
           nullable: false,
           defaultValue: 'now()' } }
      );
      done();
    })
    .catch(function(err){
      done(err);
    })
  });

  it('should run down migrations for concerts', function(done){
    concertMigration.up(knexWithDB)
    .then(function(){
      return concertMigration.down(knexWithDB);
    })
    .then(function(){
      return knexWithDB('concerts').columnInfo();
    })
    .then(function(columnInfo){
      expect(columnInfo).to.eql({});
      done();
    })
    .catch(function(err){
      done(err);
    })

  });

  it('should run up migrations for attendees', function(done){
    concertMigration.up(knexWithDB)
    .then(function(){
      return attendeesMigration.up(knexWithDB)
    })
    .then(function(){
      return knexWithDB('attendees').columnInfo();
    })
    .then(function(columnInfo){
      expect(columnInfo).to.eql(
        { id:
         { type: 'integer',
           maxLength: null,
           nullable: false,
           defaultValue: 'nextval(\'attendees_id_seq\'::regclass)' },
        concert_id:
         { type: 'integer',
           maxLength: null,
           nullable: false,
           defaultValue: null },
        name:
         { type: 'character varying',
           maxLength: 255,
           nullable: false,
           defaultValue: '\'\'::character varying' },
        age:
         { type: 'integer',
           maxLength: null,
           nullable: false,
           defaultValue: '0' } }
      );
      done();
    })
    .catch(function(err){
      done(err);
    })
  });

  it('should run down migrations for attendees', function(done){
    concertMigration.up(knexWithDB)
    .then(function(){
      return attendeesMigration.up(knexWithDB)
    })
    .then(function(){
      return attendeesMigration.down(knexWithDB)
    })
    .then(function(){
      return knexWithDB('attendees').columnInfo();
    })
    .then(function(columnInfo){
      expect(columnInfo).to.eql({});
      done();
    })
    .catch(function(err){
      done(err);
    })
  });

  it('should have a primary key of `id` of concerts table', function(done){
    concertMigration.up(knexWithDB)
    .then(function(){
      return knexWithDB.raw(sql.getPrimaryKeyOnConcertsTable)
    })
    .then(function(data){
      expect(data.rows[0]).to.eql({ constraint_name: 'concerts_pkey', constraint_type: 'PRIMARY KEY' });
      done();
    })
    .catch(function(err){
      done(err);
    })
  })

  it('should have a primary key of `id` of attendees table', function(done){
    concertMigration.up(knexWithDB)
    .then(function(){
      return attendeesMigration.up(knexWithDB)
    })
    .then(function(){
      return knexWithDB.raw(sql.getPrimaryKeyOnAttendiesTable)
    })
    .then(function(data){
      expect(data.rows[0]).to.eql({ constraint_name: 'attendees_pkey', constraint_type: 'PRIMARY KEY' });
      done();
    })
    .catch(function(err){
      done(err);
    })
  });

  it('should have a foreign key constraint on `concert_id` in the attendees table', function(done){
    concertMigration.up(knexWithDB)
    .then(function(){
      return attendeesMigration.up(knexWithDB)
    })
    .then(function(){
      return knexWithDB.raw(sql.getForeignKeyOnAttendeesTable)
    })
    .then(function(data){
      expect(data.rows[0]).to.eql({ constraint_name: 'attendees_concert_id_foreign', constraint_type: 'FOREIGN KEY' });
      done();
    })
    .catch(function(err){
      done(err);
    })
  });


  it('should have and index on `concert_id` in the attendees table', function(done){
    concertMigration.up(knexWithDB)
    .then(function(){
      return attendeesMigration.up(knexWithDB)
    })
    .then(function(){
      return knexWithDB.raw(sql.getIndexesOnAttendeesTable)
    })
    .then(function(data){
      expect(data.rows[0]).to.eql({ index_name: 'attendees_concert_id_index' });
      done();
    })
    .catch(function(err){
      done(err);
    });
  });

});
