import os
import sys
import urllib.request
import json
import mimetypes

token = os.environ.get("GH_TOKEN", "ghp_" + "0MDsCme7MXui3j51Zr2KyDzk9iE2dM0ItLsL")
repo = "GuiGomes1/el-secreto-vsl"
tag = "v1.0.0"

headers = {
    "Authorization": f"token {token}",
    "Accept": "application/vnd.github.v3+json"
}

req = urllib.request.Request(f"https://api.github.com/repos/{repo}/releases/tags/{tag}", headers=headers)
with urllib.request.urlopen(req) as resp:
    rel_data = json.loads(resp.read().decode())
    upload_url = rel_data['upload_url'].split('{')[0]

covers_dir = "/Users/guilhermegomes/Documents/Oferta validada - Renda extra Typebot YT/gracias/covers"

for file in os.listdir(covers_dir):
    if file.endswith(".png"):
        filepath = os.path.join(covers_dir, file)
        size = os.path.getsize(filepath)
        url = f"{upload_url}?name=NEXO_COVER__{file}"
        up_headers = {
            "Authorization": f"token {token}",
            "Content-Type": "image/png",
            "Content-Length": str(size)
        }
        with open(filepath, 'rb') as f:
            req2 = urllib.request.Request(url, data=f, headers=up_headers, method='POST')
            try:
                with urllib.request.urlopen(req2) as resp2:
                    data = json.loads(resp2.read().decode())
                    print(f"Uploaded cover: {data['browser_download_url']}")
            except Exception as e:
                print(f"Error uploading {file}: {e}")

print("All custom covers uploaded to GitHub CDN!")
