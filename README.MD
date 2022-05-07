# Svelte - ExpressJs - PostgreSQL template app
This is an end to end template application usind Svelte-kit, ExpressJs, Serverless.com and PostgreSQL to provide end to end examples of a working real world single page application.

Everyting in this example is open source and free to use
This is purely and example of how to configure an end to end application because configuring things like serverless for deploying to AWS can be complex, and whilst there are lots of examples and socuments many are slightly old, using serverless 2 syntax not serverless v3, and using javascript as opposed to ES5 (Typescript).

In this example the target environment is Express JS deployed to AWS Lambsa (sereverless)
and assumes the PostgreSQL database is pre installed as an RDS instance and is in the same security group as the deployed lambda application. It also assumes the schema is created within the database.
The Database credentials are build into the lambda application - passing in from environment or AWS secretes would be more secure.

