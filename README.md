# RedditApi Front End Test

A very interesting Front End test. 
I tried to respect the time limitation at 100% so I had to decide wich part is more important for this test: functionality or design.

I started coding the App componentization and used a class to define a lists of notes and a class to instanciate each post. 

I asked Reddit for the top 50 notes with a service and then process the response iterating each note to creat a new Post object.

About the components created:
- Landing Page
- Side Bar
- Rows of Post Description
- Right section (where show post details)
- Pagination

I tried to be organizated using clean code and applying vertical bindings between parent and child components to share information and events.

About my decitions:
I decided focus into functionalities and let the stylying process at the end of the tasks. As i wrote above i respected the 5 hours proposed so i couldn't acomplish the desing and the styles I wanted.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
