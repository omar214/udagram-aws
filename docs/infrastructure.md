# Infrastructure

infrastructure mainly use 4 Services

## 1. AWS RDS Service

amazon web service used for hosting relational database `postgres` and we use it to record our app data

## 2. AWS S3 Service

amazon web service used for hosting our front-end and storing the website files , uploaded images

## 3. AWS elastic beanstack Service

amazon web service used for hosting our running our node application providing us nginx Server that we use to connect to from out front-end

## 4. Circle CI

Service provided for us to trigger any action happens to our github repo , then it triggers the pipeline to update our code
