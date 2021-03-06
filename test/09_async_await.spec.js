import {expect} from 'chai';
import 'babel-polyfill';

//Documentation for Async functions :
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

describe('Async await', () => {
  describe('Basic async await', () => {
    it('Should display Resolved', (done) => {
      //TODO Fix this function in order to make the test pass with async/await
      function func() {
        const prom = new Promise((resolve) => {
          setTimeout(() => resolve('Resolved'), 300);
        });
        const res = prom;
        expect(res).to.equal('Resolved');
        done();
      }

      func();
    });

    it('Make this code work with async/await', (done) => {
      const organisationName = 'Hackages';
      let organisation = fetch(`https://api.github.com/orgs/${organisationName}`);
      organisation = organisation.json();
      expect(organisation.email).to.equal('007@hackages.io');
      done();
    });

    it('Add results of asyncs actions', (done) => {
      const prom1 = () => new Promise((resolve) => {
        setTimeout(() => resolve(2), 200);
      });
      const prom2 = () => new Promise((resolve) => {
        setTimeout(() => resolve(2), 200);
      });

      //TODO write a function that will wait until both promises (written above) resolve and then sum their result

    });
  });
});

