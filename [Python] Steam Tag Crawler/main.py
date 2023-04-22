import requests
from bs4 import BeautifulSoup

url = "https://store.steampowered.com/tag/browse/?l=koreana#global_492"

html = requests.get(url)
bs = BeautifulSoup(html.content,"html.parser")

for tag_list in bs.find_all('div', {'class': 'tag_browse_tag'}):
    print(tag_list.text)