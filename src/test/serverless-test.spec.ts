// import * as handler from '../handler';
import chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';
import { tokenDefaults } from '../models';
import * as mock from './mocked-users';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
const host = process.env.OFFLINE_API;

chai.use(chaiHttp);
const expect = chai.expect;

describe('DiscordTokenGate API Request Success check', () => {
  // it('should return response on /transfers POST call', () => {
  //   return chai.request(host).post('/transfers').send(mock)
  //     .then(res => {
  //       expect(res.text).to.eql("");
  //     })
  // })

  it('should return response on /users POST call', (done) => {
    chai.request(host)
      .post('/users')
      .send(mock.testOne)
      .end((err, res) => {
        console.log(err);
        console.log(res.status);
        expect(res.status).to.eql(200);
        done();
      });
  });

  it('should return response on /users/${id} GET call', (done) => {
    chai.request(host)
      .get('/users/' + mock.mockOne._id)
      .end((err, res) => {
        console.log(err);
        expect(res.status).to.eql(200);
        done();
      });
  });

  it('should return response on /users GET call', (done) => {
    chai.request(host)
      .get('/users')
      .end((err, res) => {
        console.log(err);
        expect(res.status).to.eql(200);
        done();
      });
  });

  it('should return response on /users/${id} PUT call', (done) => {
    chai.request(host)
      .put('/users/' + mock.mockOne._id)
      .send(mock.mockOne)
      .end((err, res) => {
        console.log(err);
        expect(res.status).to.eql(200);
        done();
      });
  });
  it('should return response on /tokens/${id} PUT call', (done) => {
    chai.request(host)
      .put('/tokens/' + tokenDefaults[0]._id)
      .send(tokenDefaults[0])
      .end((err, res) => {
        console.log(err);
        expect(res.status).to.eql(200);
        done();
      });
  });
});