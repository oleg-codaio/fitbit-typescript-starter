# Fitbit TypeScript Starter

This repo contains boilerplate to get started with writing Fitbit apps and clockfaces in TypeScript locally, as
opposed to only within [Fitbit Studio][fitbit-studio]. Depending on your IDE, this can unlock better type validation
and powerful integration like this:

![](https://cl.ly/032e401f3I3x/Image%202018-06-16%20at%2010.13.20%20PM.png)

The app itself here is very basic: the device will display a message configured in settings:

![](https://cl.ly/1H3T1Y453k0z/Image%202018-06-16%20at%2010.58.13%20PM.png)

[fitbit-studio]: http://studio.fitbit.com/

## Workflow

As of June 2018, Fitbit has not yet released CLI tools to enable testing and deploying Fitbit apps locally. That
being said, you can still develop locally and use Fitbit Studio only for testing and deployment:

1. Write code and unit tests in VS Code
2. When needed, open your file manager, select all files in this repository (except `.git`, and drag them into the
   files pane in Fitbit Studio. This will overwrite all updated files
3. Manually delete any files you've deleted locally from Fitbit Studio
4. Repeat as needed

This isn't great, but although Fitbit has done a great job with the in-browser IDE, it will likely never catch up to
the power of a full-featured IDE like VS Code or Webstorm (or whatever other tool you prefer for the job).

## Architecture

While Fitbit appears to use some TypeScript compiler in Fitbit Studio, unfortunately all the types for referenced
packages are missing. This repo mirrors the folder structure outlined in [Fitbit's docs][app-architecture], and
defines three TypeScript projects to accommodate different globals available within each context:

- `/app`: TS project containing the app/clockface that actually runs on the device. Has access to the
  [device-apis][device APIs]
  - `/global-types`: contains app-specific globals as well as references from `common` to APIs exposed in the watch
    app
- `/companion`: TS project containing the companion app running on smartphones. Has access to the
  [companion-apis][companion APIs]
  - `/global-types`: contains companion-specific globals as well as references from `common` to APIs exposed in the
    companion app
- `/settings`: TS project containing the settings code running within the Fitbit app. Appears to be based on React
- `/resources`: UX/media resources used across the project
  - `/global-types`: types for each of the [fitbit-apis][documented APIs]

[app-architecture]: https://dev.fitbit.com/build/guides/application/
[fitbit-apis]: https://dev.fitbit.com/build/reference/
[device-apis]: https://dev.fitbit.com/build/reference/device-api/
[companion-apis]: https://dev.fitbit.com/build/reference/companion-api/

## Building

This project is meant to work with TypeScript 2.8+. While Fitbit apps cannot yet be compiled locally, you'll find a
Makefile with the following commands:

- `make`: Builds all 3 projects, validating types
- `make lint`: Lints all 3 projects

Modern IDEs such as VS Code should automatically expose compiler and linter errors, but these commands should still
be useful for anyone working with command line, CI, etc.

## Contributing

The boilerplate for much of the project setup has been completed, but many types for app/companion APIs are as of yet
incomplete. Please feel free to send PRs adding types into `global-types` subdirectories as needed. Ideally in the
future Fitbit will incorporate many of these and offer first-class support for TypeScript and local development.
