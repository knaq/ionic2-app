#Welcome to KNAQ!

Knaq is an app designed to help students find more meaningful work and develop their portfolio!

#Setup
* Install ionic beta
    * Run "npm install -g ionic@beta" in the terminal
* Clone repo from Github
* Restore Node packages
    * Run "npm install"
* Fix a couple of issues:
    * Add color contrast to /app/theme/app.variables.scss: "$color-contrast: red;"
    * Replace "@if ($ionicons) {...}" from node_modules/ionic-angular/components.core.scss with '@import "fonts/ionicons";'
* Run "ionic build"