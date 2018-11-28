# Final Project - Sentimental Analysis
![ML](https://user-images.githubusercontent.com/37318055/48816762-0f2e9600-ed09-11e8-8472-6cb9aff2e7a8.jpg)

## Backgound
Social media platforms are often used to convey personal feelings and opinions for the world to see. One of the biggest challenges       lies in understanding the "sentiments" behind social media posts.

Using Machine Learning we can analyze the sentiment behind texts or a post. It will allow organizations and corporations to             understand   consumer behaviour, which in turn, allow them to improve customer service and product enhancements. 

## Project Proposal
1) Using natural language processing (NLP) to systematically identify, extract, quantify and study affective states and subjective       information.
2) Allow user input to determine "keyword" for data set retrieval from twitter machine learning analysis
3) Use data visualization tools/skills to graphically display analysis results for simple visual representation of data 

## Team Member
    Saifee Dalal
    Sandeep Komuravelli
    Randy Chan
    Deepti Shandilya
    Ghassan Aleqabi
    Aparna Paul


## Data Source and Tools
    Twitter
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
<b>Repeated Letters<b> - Tweets contain very casual language. Keywords can contain an arbitrary number of repeated letters (e.g. huuuungry, huuuuuuuugry, huuuuuuuuuuuungry). These would be converted into their own unique token even though they are the same.
<b>Emoticons<b> - Training process makes use of emoticons as noisy labels. It is important to discuss the role they play in classification
<b>Tweets containing multiple subjects<b> - e.g. I had a great breakfast this morning, but a horrible dinner.
<b>Retweets<b> - Retweeting is the process of copying another user's tweet. Including them can give a particular tweet extra weight in the training data

