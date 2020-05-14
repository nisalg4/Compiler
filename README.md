# 444

Contains all src for 444.

# Setup/Install

You'll need to have Node.JS installed on your local machine and command line access to `npm`.

First install the dependencies:

`npm install` In the project directory

Then run the program:

`npm run dev {sourcefile} {destinationfile}` In the project directory

For example:

`npm run dev ./acod_examples/A5-sample3.acod ./tmp`

# Testing

The project uses Jest for all tests, passed through ts-jest for typescript support.

To run tests within the project, run:

`npm run test` (`npm t` also works)

# Contributing

This repo will follow git flow. Branches should be created per feature/improvement. When a feature is complete, submit a pull request.

Pull requests should be small and incremental. All pull request reviews require another team members review and approval before merge.
