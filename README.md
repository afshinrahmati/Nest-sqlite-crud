<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Migration
  
Once you get into production you'll need to synchronize model changes into the database. Typically, it is unsafe to use synchronize: true for schema synchronization on production once you get data in your database. Here is where migrations come to help.
A migration is just a single file with sql queries to update a database schema and apply new changes to an existing database.
Let's say you already have a database and a post entity:

## TypeOrm
we have 2 structure  (Active Record): Entity Extend from  BaseEntity that we dont cant test and we dont have Injection and
all use in BaseEntity and dont can use in User
an other (Data Mapper):we dont have  extends BaseEntity and all time we call this with Injection and use this every where 
and can call that with const userRepository = dataSource.getRepository(User) Or in router call @EntityRepository

## save & create
Save can be used to both create a new Record and update a existing record
Whereas create is used to create a new record by providing all required field at one time.

## Hooks
save format like log table and dont use like object {email:"t",pass:7895} this is not hooks
save() + remove() ==> use Hooks But insert() + update() + deleted() ==> dont use Hooks

## serialize(Show Data with world format) and deserialize your data
Data serialization is the process of converting an object into a stream of bytes to more easily save or transmit it.
why is it important?
In some distributed systems, data and its replicas are stored in different partitions on multiple cluster members. If data is not present on the local member, the system will retrieve that data from another member. This requires serialization for use cases such as:

Deserialization is the process of reconstructing a data structure or object from a series of bytes or a string in order to instantiate the object for consumption. This is the reverse process of serialization, i.e., converting a data structure or object into a series of bytes for storage or transmission across devices. To fetch an object state over a wire or read it from persistent storage, a system must be able to deserialize it from raw bytes.

## exclude
when user create and we return all data in response(serialize,transformer Data) we dont show password and we
should use @Eclude in class class-transformer
step2 ==> we can handel with custom. 1) create folder interceptors 2)create file serialize.intercepteor.ts import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';





## RX Js
that meanf handdel you thread or eventloop. instanece 

## util.promisfy()
this module change our old functio or any function to async awat autu