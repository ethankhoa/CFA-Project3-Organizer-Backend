process.env.MONGOLAB_LOCAL_URI="mongodb://localhost/churchOrganizer_test"

var expect = require('chai').expect;
const request = require('supertest');
const mongoose = require('mongoose');


var app = require('../app');
app.listen(3003);

describe ('simple test', function() {
  it ('always true', function() {
    expect(true).to.be.true;
  });
});


describe ('api tests', function() {


    before(function(done) {
		mongoose.connect(process.env.MONGOLAB_LOCAL_URI,function(){
		    /* Drop the DB */
		    mongoose.connection.db.dropDatabase(function() {
			    done();
			});
		});
    })

  it ('check /members returns members json array', function(done) {
    request(app)
      .get('/members')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        console.log("reached end", res.body)
        done(err);
      });
  });

  it ('adds user to /members returns members json array', function(done) {
    request(app)
      .post('/members')
      .send({ firstName: "bob", lastName: "loblaw", email: "tester@test.com"})
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        console.log("reached end", res.body)
        done(err);
      });
  });

  it ('check /members returns members json array', function(done) {
    request(app)
      .get('/members')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(function(res) {
        expect(res.body).to.have.lengthOf(1);
      })
      .end(function(err, res) {
        console.log("reached end", res.body)
        done(err);
      });
  });

});
