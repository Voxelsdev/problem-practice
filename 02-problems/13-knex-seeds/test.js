const db_name = 'knex_seed_test';

const expect = require('chai').expect;
const concertMigration = require('./migrations/1_concert');
const attendeesMigration = require('./migrations/2_attendees');
const concertSeed = require('./1_concert_seed');
const attendeesSeed = require('./2_attendees_seed');

const knexRaw = require('knex')({ client: 'pg', connection: 'postgres://localhost' });
let knexWithDB;

describe('knex seed test', function(){
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
    concertMigration.up(knexWithDB)
    .then(function(){
      return attendeesMigration.up(knexWithDB);
    })
    .then(function(){
      done();
    })
    .catch(function(err){
      done(err);
    })
  })

  it('should run concert seed', function(done){
    concertSeed.seed(knexWithDB)
    .then(function(){
      return knexWithDB('concerts').orderBy('id')
    })
    .then(function(concerts){
      expect(concerts).to.eql([
        {
          id: 1,
          name: 'Capitol Hill Block Party 2016',
          price: '49.99',
          started_at: new Date(concerts[0].started_at),
          ended_at: new Date(concerts[0].ended_at) },
       {
          id: 2,
          name: 'Bumbershoot 2016',
          price: '64.99',
          started_at: new Date(concerts[1].started_at),
          ended_at: new Date(concerts[1].ended_at) }
        ]);
      done();
    })
    .catch(function(err){
      done(err);
    })
  })

  it('should run attendees seed', function(done){
    concertSeed.seed(knexWithDB)
    .then(function(){
      return attendeesSeed.seed(knexWithDB);
    })
    .then(function(){
      return knexWithDB('attendees').orderBy('id')
    })
    .then(function(attendees){
      expect(attendees).to.eql([
        { id: 1, concert_id: 1, name: 'Daniel Bailey', age: 52 },
        { id: 2, concert_id: 1, name: 'Heidi McGuire', age: 30 },
        { id: 3, concert_id: 2, name: 'Corey Reyes', age: 26 },
        { id: 4, concert_id: 2, name: 'Kristi Sheridan', age: 45 }
      ]);
      done();
    })
    .catch(function(err){
      done(err);
    });
  });


  it('should update sequencefor id column in concert table', function(done){
    concertSeed.seed(knexWithDB)
    .then(function(){
      return knexWithDB('concerts').insert({name:'name', price: 12.32});
    })
    .then(function(){
      done();
    })
    .catch(function(err){
      done(err);
    })
  });

  it('should update sequence for id column in attendees table', function(done){
    concertSeed.seed(knexWithDB)
    .then(function(){
      return attendeesSeed.seed(knexWithDB)
    })
    .then(function(){
      return knexWithDB('attendees').insert({concert_id:1});
    })
    .then(function(){
      done();
    })
    .catch(function(err){
      done(err);
    })
  });


  afterEach(function(done){
    attendeesMigration.down(knexWithDB)
    .then(function(){
      return concertMigration.down(knexWithDB)
    })
    .then(function(){
      done();
    })
    .catch(function(err){
      done(err);
    })
  })
});
