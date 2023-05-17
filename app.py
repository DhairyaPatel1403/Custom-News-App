import streamlit as st
from newsapi import NewsApiClient
from template.streamlit_custom_slider import st_custom_slider

st.title("Custom news viewer")

# Add Streamlit widgets to define the parameters for the CustomSlider
label = st.sidebar.text_input('Name', '')
max_value = st.sidebar.slider("Number of news", 0, 10, (1))

label2 = st.sidebar.text_input('News', '')




newsapi = NewsApiClient(api_key='f13e245aad384f8f97e7fe525511ec8c')

# Define the variable
news_of = 'bbc-news'

query = label2

# Get the news articles for the specified sources
all_articles = newsapi.get_everything(q=query, sources=news_of)

if all_articles['status'] == 'ok':
    # Iterate over the articles and print their titles
    for article in all_articles['articles']:
        print(article['title'])
else:
    # Handle the case when the request was not successful
    print("Error:", all_articles['status'])



# Pass the parameters inside the wrapper function
v = st_custom_slider(label=label, min_value=0,  max_value=max_value, label2=label2, news=all_articles)
