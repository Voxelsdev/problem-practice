const db_name = 'migration_test'


const expect = require('chai').expect;
const extract = require('./extract_sql_sync');
const knex = require('knex');
const path = require('path');

const knexRaw = require('knex')({ client: 'pg', connection: 'postgres://localhost' });
const sql = extract(path.join(__dirname,'problem.js'));

let knexWithDB;


describe('sql migration warmup', function(){
  before(function(done){
    knexRaw.raw(`DROP DATABASE IF EXISTS ${db_name}`)
    .then(function(){
        return knexRaw.raw(`CREATE DATABASE ${db_name};`)
    })
    .then(function(){
      knexWithDB =require('knex')({ client: 'pg', connection: `postgres://localhost/${db_name}` })
      done();
    })
    .catch(function(err){
      done(err);
    });
  });

  it('should be a table named attendees', function(done){
    knexWithDB.raw(sql.sqlMigrations)
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
             defaultValue: '0' }
         }
      );
      done();
    })
    .catch(function(err){
      done(err);
    })
  })


  it('should be a table name concerts', function(done){
    knexWithDB.raw(sql.sqlMigrations)
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
           defaultValue: '1.00' },
          started_at:
          { type: 'timestamp with time zone',
           maxLength: null,
           nullable: false,
           defaultValue: 'now()' },
          ended_at:
          { type: 'timestamp with time zone',
           maxLength: null,
           nullable: false,
           defaultValue: 'now()' }
        }
      );
      done();
    })
    .catch(function(err){
      done(err);
    })
  })

  it('should have a primary key of `id` of concerts table', function(done){
    knexWithDB.raw(sql.getPrimaryKeyOnConcertsTable)
    .then(function(data){
      expect(data.rows[0]).to.eql({ constraint_name: 'concerts_pkey', constraint_type: 'PRIMARY KEY' });
      done();
    })
    .catch(function(err){
      done(err);
    })
  })


  it('should have a primary key of `id` of attendees table', function(done){
    knexWithDB.raw(sql.getPrimaryKeyOnAttendiesTable)
    .then(function(data){
      expect(data.rows[0]).to.eql({ constraint_name: 'attendees_pkey', constraint_type: 'PRIMARY KEY' });
      done();
    })
    .catch(function(err){
      done(err);
    })
  });

  it('should have a foreign key constraint on `concert_id` in the attendees table', function(done){
    knexWithDB.raw(sql.getForeignKeyOnAttendeesTable)
    .then(function(data){
      expect(data.rows[0]).to.eql({ constraint_name: 'attendees_concert_id_fkey', constraint_type: 'FOREIGN KEY' });
      done();
    })
    .catch(function(err){
      done(err);
    })
  });


  it('should have and index on `concert_id` in the attendees table', function(done){
    knexWithDB.raw(sql.getIndexesOnAttendeesTable)
    .then(function(data){
      expect(data.rows[0]).to.eql({ index_name: 'attendees_concert_id_idx' });
      done();
    })
    .catch(function(err){
      done(err);
    });
  });
});
