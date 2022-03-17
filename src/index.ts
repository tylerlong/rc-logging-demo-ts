import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  server: 'https://platform.ringcentral.com',
  clientId: 'fake',
  clientSecret: 'fake',
});

RingCentral.config.logger = console;

const main = async () => {
  await rc.authorize({
    username: 'fake',
    extension: '',
    password: 'fake',
  });
};

main();
