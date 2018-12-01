# Final Project - Sentimental Analysis
![ML](https://user-images.githubusercontent.com/37318055/48816762-0f2e9600-ed09-11e8-8472-6cb9aff2e7a8.jpg)

## Backgound - Business Problem Overview
Flight cancellation and delay is a very common problem in the real world. It can have a negatively financial impact both the airlines and passengers financially. Furthermore, it will also impact personal scheduled events and commitments. A passenger who is delayed on a multi-plane trip could miss a connecting flight. Anger, frustration and even Air rage can occur in delayed passengers.
1) Bad customer satisfaction
2) Financial losses and negative reputation for airlines
3) Inconvenience for passengers and impacting personal scheduled events


## Project Proposal
1) Using data visualization tools/skills to graphically display results using historic flight data gathered from Bureau of Transportation Statistic
2) Training the same set of historic data using predictive algorithms to create a working model
3) Allow user input of flight criteria (such as weather, date/time, airline, etc.) and predict probability of on-time departure

## Team Member
    Saifee Dalal
    Sandeep Komuravelli
    Randy Chan
    Deepti Shandilya
    Ghassan Aleqabi
    Aparna Paul


## Data Source and Tools
    Bureau of Transportation Statistics (https://www.bts.gov/)
    https://openflights.org/data.html
    Python
    PySpark
    Scikit-Learn
    Javascript 
    HTML
    CSS
    Tableau
    MongoDB
    Heroku
    NLTK


## Data Flow Diagram
![DF](https://user-images.githubusercontent.com/37318055/49124828-7a391900-f283-11e8-8a91-46eb0bccb659.PNG)


## Data Challenges/Limitation
<b>Repeated Letters</b> - Tweets contain very casual language. Keywords can contain an arbitrary number of repeated letters (e.g. huuuungry, huuuuuuuugry, huuuuuuuuuuuungry). These would be converted into their own unique token even though they are the same.<br>
<b>Emoticons</b> - Training process makes use of emoticons as noisy labels. It is important to discuss the role they play in classification<br>
<b>Tweets containing multiple subjects</b> - e.g. I had a great breakfast this morning, but a horrible dinner.<br>
<b>Retweets</b> - Retweeting is the process of copying another user's tweet. Including them can give a particular tweet extra weight in the training data

