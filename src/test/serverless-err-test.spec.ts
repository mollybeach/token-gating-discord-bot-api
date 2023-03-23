import chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
const host = process.env.OFFLINE_API;

chai.use(chaiHttp);
const expect = chai.expect;

describe('DiscordTokenGate API Request Error check', () => {
  // it('should return response on /transfers POST call', () => {
  //   return chai.request(host).post('/transfers').send(mock)
  //     .then(res => {
  //       expect(res.text).to.eql("");
  //     })
  // })

  it('should return response on /create POST call', (done) => {
    chai.request(host)
    .post('/users')
    .send({})
    .end((err, res) => {
      console.log(err);
      expect(res.text).to.eql("Could not create the user.");
      done();
    });
  });

  it('should return response on /users/${id} GET call', (done) => {
    chai.request(host).get('/users/' + 'JohnnyAppleSeed6601')
    .end((err, res) => {
      console.log(err);
      expect(res.text).to.eql("Could not fetch the user.");
      done();
    });
  });

  it('should return response on /user/${id} PUT call', (done) => {
    chai.request(host).put('/users/' + 'JohnnyAppleSeed6690').send({})
    .end((err, res) => {
      console.log(err);
      expect(res.text).to.eql("Could not fetch the user.");
      done();
    });
  });
});