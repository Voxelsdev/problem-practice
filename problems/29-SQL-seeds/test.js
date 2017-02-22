const db_name = 'seeds_test'

const expect = require('chai').expect;
const extract = require('./extract_sql_sync');
const knex = require('knex');
const path = require('path');

const knexRaw = require('knex')({ client: 'pg', connection: 'postgres://localhost' });
const sql = extract(path.join(__dirname,'problem.sql'));
const sqlMigrations = extract(path.join(__dirname,'migration.sql')).sqlMigrations;

let knexWithDB;

describe('sql seeds warmup', function(){
  before(function(done){
    knexRaw.raw(`DROP DATABASE IF EXISTS ${db_name}`)
    .then(function(){
      return knexRaw.raw(`CREATE DATABASE ${db_name};`)
    })
    .then(function(){
      knexWithDB =require('knex')({ client: 'pg', connection: `postgres://localhost/${db_name}` });
    })
    .then(function() {
      knexWithDB.raw(sqlMigrations)
      .then(function() {
        done();
      }).catch(function(err) {
        done(err);
      })
    })
    .catch(function(err){
      done(err);
    });
  });

  it('should seed concerts table with values', function(done){
    knexWithDB.raw(sql.seedConcerts)
    .then(function(result){
      knexWithDB('concerts').then((actual) => {
        const expected = [{
          id: 1,
          name: 'Capitol Hill Block Party 2016',
          price: '49.99',
          started_at: '2017-01-04T04:26:09.103Z',
          ended_at: '2017-01-04T04:26:09.103Z'
        },{
          id: 2,
          name: 'Bumbershoot 2016',
          price: '64.99',
          started_at: '2017-01-04T04:26:09.103Z',
          ended_at: '2017-01-04T04:26:09.103Z'
        }];

        for (var i = 0; i <= expected.length-1; i++) {
          let tmpDate = new Date(actual[i].started_at);
          expect(actual[i].id).to.eql(expected[i].id);
          expect(actual[i].name).to.eql(expected[i].name);
          expect(actual[i].price).to.eql(expected[i].price);
          expect(tmpDate).to.be.at.most(Date.now());
        };

        done();
      })
      .catch(function(err) {
        done(err)
      })
    })
    .catch(function(err){
      done(err);
    })
  })

  it('should seed attendees table with values', function(done){
    knexWithDB.raw(sql.seedAttendees)
    .then(function(result){
      knexWithDB('attendees').then((actual) => {
        const expected = [{
          id: 1,
          concert_id: 1,
          name: 'Daniel Bailey',
          age: 52
        },{
          id: 2,
          concert_id: 1,
          name: 'Heidi McGuire',
          age: 30
        },{
          id: 3,
          concert_id: 2,
          name: 'Corey Reyes',
          age: 26
        },{
          id: 4,
          concert_id: 2,
          name: 'Kristi Sheridan',
          age: 45
        }];

        expect(actual).to.eql(expected);
        done();
      })
      .catch(function(err) {
        done(err)
      })
    })
    .catch(function(err){
      done(err);
    })
  })

});
