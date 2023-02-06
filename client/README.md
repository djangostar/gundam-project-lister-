# Gundam Build Lister

Gundam Build Lister
    This project is a digital lister of any model Gundam bought in which you can list each individual Gundam purchased with an amount and its individual parameters such as Gundam Name, Model Series (Anime or Gundam category), Year(Anime year) and Grade(The quality of the model).

    You can add Gundams to the general list that are not available for purchase, in doing so it will create a Gundam card with a link to take you to the details of said Gundam. From there, if you purchased said Gundam, set the price(for book keeping purposes), click purchase and it becomes YOUR Gundam. Meaning, it's now in your user's home page and yours only. Any other user will not be able to delete/edit/add or in any way modify the Gundam once purhcased. The idea is just to keep a list of all the Gundams so there are no accidental double purchases.

## Requirements

* ruby "2.7.4"
* gem "rails", "~> 7.0.3", ">= 7.0.3.1"
* Use postgresql as Database for Active Record gem "pg", "~> 1.1"


## System Dependencies

* gem 'cloudinary'
* gem material-ui
* gem 'rack-cors'
* gem 'pry'
* gem 'active_model_serializers', '~> 0.10.2'
* gem "bcrypt", "~> 3.1.7"
* gem "puma", "~> 5.0"
* gem 'dotenv-rails'

## Installation

* Fork and clone this repo
* Bundle and Install necessary gems
* Then make sure Postgres gem 'pg', '~> 1.1' is running (cute little elephant top of your screen)
* Check ruby -v and rails -v to make sure they are running
* Run the following commands
    1. bundle install
    2. rails db:create
    3. rails db:migrate
    4. rails s
* The server will run on port http://localhost:3000 (the frontend will run on port 4000)

## Images
* All the images used are free image links pulled from google

## Licensing (MIT, optional)

Copyright (c) {{ 2023 }} {{ FlatIronSchool }}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.