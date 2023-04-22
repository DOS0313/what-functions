import requests
import json
from bs4 import BeautifulSoup

url = "https://store.steampowered.com/tag/browse/?l=koreana#global_492"

html = requests.get(url)
bs = BeautifulSoup(html.content,"html.parser")

data = {}
data['steam-tag'] = []

popularity = 0

for tag_list in bs.find_all('div', {'class': 'tag_browse_tag'}):
    popularity = popularity + 1
    steam_tag = str(tag_list.text)

    print(steam_tag)

    data['steam-tag'].append({
        "popularity": popularity,
        "tag": steam_tag
    })

json_path = "tag-list.json"

with open(json_path, 'w', encoding="UTF-8") as outfile:
    json.dump(data, outfile, indent=4, ensure_ascii=False)