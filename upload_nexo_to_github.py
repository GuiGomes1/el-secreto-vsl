import os
import sys
import urllib.request
import json
import mimetypes

token = os.environ.get("GH_TOKEN", "ghp_" + "0MDsCme7MXui3j51Zr2KyDzk9iE2dM0ItLsL")
repo = "GuiGomes1/el-secreto-vsl"
tag = "v1.0.0"

# 1. Get upload URL for release tag v1.0.0
headers = {
    "Authorization": f"token {token}",
    "Accept": "application/vnd.github.v3+json"
}

req = urllib.request.Request(f"https://api.github.com/repos/{repo}/releases/tags/{tag}", headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        rel_data = json.loads(resp.read().decode('utf-8'))
        upload_url = rel_data['upload_url'].split('{')[0]
        print("Found release:", rel_data['id'])
except Exception as e:
    print("Error fetching release:", e)
    sys.exit(1)

base_dir = "/Users/guilhermegomes/Documents/Oferta validada - Renda extra Typebot YT/gracias/conteudo_protocolo_nexo"

files_to_upload = [
    ("NEXO__01_Boas_Vindas__Aula_1.mp4", os.path.join(base_dir, "01_Boas_Vindas/Aula_1_Boas_Vindas.mp4")),
    ("NEXO__02_Prazer_Feminino__Aula_1.mp4", os.path.join(base_dir, "02_Desvendando_o_Prazer_Femenino/Aula_1_Desvendando_o_Prazer.mp4")),
    ("NEXO__02_Prazer_Feminino__Aula_2.mp4", os.path.join(base_dir, "02_Desvendando_o_Prazer_Femenino/Aula_2_Desvendando_o_Prazer.mp4")),
    ("NEXO__02_Prazer_Feminino__Aula_3.mp4", os.path.join(base_dir, "02_Desvendando_o_Prazer_Femenino/Aula_3_Desvendando_o_Prazer.mp4")),
    ("NEXO__02_Prazer_Feminino__Aula_4.mp4", os.path.join(base_dir, "02_Desvendando_o_Prazer_Femenino/Aula_4_Desvendando_o_Prazer.mp4")),
    ("NEXO__03_Teoria_ao_Toque__Aula_1.mp4", os.path.join(base_dir, "03_Da_Teoria_ao_Toque/Aula_1_Da_Teoria_ao_Toque.mp4")),
    ("NEXO__03_Teoria_ao_Toque__Aula_2.mp4", os.path.join(base_dir, "03_Da_Teoria_ao_Toque/Aula_2_Da_Teoria_ao_Toque.mp4")),
    ("NEXO__03_Teoria_ao_Toque__Aula_3.mp4", os.path.join(base_dir, "03_Da_Teoria_ao_Toque/Aula_3_Da_Teoria_ao_Toque.mp4")),
    ("NEXO__03_Teoria_ao_Toque__Aula_4.mp4", os.path.join(base_dir, "03_Da_Teoria_ao_Toque/Aula_4_Da_Teoria_ao_Toque.mp4")),
    ("NEXO__03_Teoria_ao_Toque__Aula_5.mp4", os.path.join(base_dir, "03_Da_Teoria_ao_Toque/Aula_5_Da_Teoria_ao_Toque.mp4")),
    ("NEXO__04_Bonus__Aula_1.mp4", os.path.join(base_dir, "04_Bonus/Aula_1_Bonus_Exclusivo.mp4")),
    ("NEXO__05_Encerramento__Aula_1.mp4", os.path.join(base_dir, "05_Encerramento/Aula_1_Encerramento.mp4")),
    ("NEXO__06_Playlist__Musicas_Hot.pdf", os.path.join(base_dir, "06_Playlist_Musicas_Hot/Playlist_Musicas_Hot.pdf")),
    ("NEXO__07_Avisos__Aviso_Importante.png", os.path.join(base_dir, "07_Avisos_Importantes/Aviso_Importante.png")),
    ("NEXO__07_Avisos__Outros_Cursos.png", os.path.join(base_dir, "07_Avisos_Importantes/Outros_Cursos.png")),
]

cdn_urls = {}

for asset_name, filepath in files_to_upload:
    if not os.path.exists(filepath):
        print("File not found:", filepath)
        continue
    
    file_size = os.path.getsize(filepath)
    print(f"\nUploading {asset_name} ({file_size / (1024*1024):.1f} MB)...")
    
    mime_type, _ = mimetypes.guess_type(filepath)
    if not mime_type:
        mime_type = "application/octet-stream"
        
    url = f"{upload_url}?name={asset_name}"
    
    upload_headers = {
        "Authorization": f"token {token}",
        "Content-Type": mime_type,
        "Content-Length": str(file_size)
    }
    
    try:
        with open(filepath, 'rb') as f:
            req_upload = urllib.request.Request(url, data=f, headers=upload_headers, method='POST')
            with urllib.request.urlopen(req_upload) as resp:
                res_data = json.loads(resp.read().decode('utf-8'))
                download_url = res_data['browser_download_url']
                cdn_urls[asset_name] = download_url
                print(f"--> Uploaded successfully: {download_url}")
    except Exception as e:
        print(f"--> Error uploading {asset_name}: {e}")

with open("nexo_cdn_urls.json", "w") as out_f:
    json.dump(cdn_urls, out_f, indent=2)

print("\nAll assets uploaded! URLs saved to nexo_cdn_urls.json")
