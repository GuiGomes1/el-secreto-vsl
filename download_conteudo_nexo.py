import os
import sys
import subprocess

# Ensure gdown is importable or executable
sys.path.append('/Users/guilhermegomes/Library/Python/3.9/lib/python/site-packages')
import gdown

base_dir = "/Users/guilhermegomes/Documents/Oferta validada - Renda extra Typebot YT/gracias/conteudo_protocolo_nexo"
os.makedirs(base_dir, exist_ok=True)

modules = [
    {
        "folder": "01_Boas_Vindas",
        "files": [
            {"name": "Aula_1_Boas_Vindas.mp4", "url": "https://drive.google.com/file/d/1c7Xqzc-QKb3zPQQgOh3cV2mSs1B0rZ1p/view?usp=sharing"}
        ]
    },
    {
        "folder": "02_Desvendando_o_Prazer_Femenino",
        "files": [
            {"name": "Aula_1_Desvendando_o_Prazer.mp4", "url": "https://drive.google.com/file/d/1GaDKsH1TCi0Qiw_-lagoyvLQVEnqDioI/view?usp=sharing"},
            {"name": "Aula_2_Desvendando_o_Prazer.mp4", "url": "https://drive.google.com/file/d/1D9vaTIvyvyg0XaCHZlqiRkl5t59RFsuW/view?usp=sharing"},
            {"name": "Aula_3_Desvendando_o_Prazer.mp4", "url": "https://drive.google.com/file/d/11UhPDBpnRwV4O0fg6ut2adGRovdCFulS/view?usp=sharing"},
            {"name": "Aula_4_Desvendando_o_Prazer.mp4", "url": "https://drive.google.com/file/d/12OzUxgo9m2uwBOJb_g9vMf39AwGuzwwG/view?usp=sharing"}
        ]
    },
    {
        "folder": "03_Da_Teoria_ao_Toque",
        "files": [
            {"name": "Aula_1_Da_Teoria_ao_Toque.mp4", "url": "https://drive.google.com/file/d/1xwQ3GgByTc98QEfoQoLUFBnAGmxyzZ4m/view?usp=sharing"},
            {"name": "Aula_2_Da_Teoria_ao_Toque.mp4", "url": "https://drive.google.com/file/d/1c8tLBAgSdAIQkTUqCMu1PSIc8f5Xwpkx/view?usp=sharing"},
            {"name": "Aula_3_Da_Teoria_ao_Toque.mp4", "url": "https://drive.google.com/file/d/1HyEGynWy8Ot4ug0dQ566Yz-u-KcSvXB3/view?usp=sharing"},
            {"name": "Aula_4_Da_Teoria_ao_Toque.mp4", "url": "https://drive.google.com/file/d/1xBXdx6tw6sh794VEW373i6LX-6Ckrq5E/view?usp=sharing"},
            {"name": "Aula_5_Da_Teoria_ao_Toque.mp4", "url": "https://drive.google.com/file/d/1UEUoo8G0Wt432S12R7Q1vXyRScF_XANL/view?usp=sharing"}
        ]
    },
    {
        "folder": "04_Bonus",
        "files": [
            {"name": "Aula_1_Bonus_Exclusivo.mp4", "url": "https://drive.google.com/file/d/1qCeplJExwHK1sBJmlhYyyzH__pcPhr5M/view?usp=sharing"}
        ]
    },
    {
        "folder": "05_Encerramento",
        "files": [
            {"name": "Aula_1_Encerramento.mp4", "url": "https://drive.google.com/file/d/1Qi2ejR-GgHlTsZltvyvI5sXWiVPKKag7/view?usp=sharing"}
        ]
    },
    {
        "folder": "06_Playlist_Musicas_Hot",
        "files": [
            {"name": "Playlist_Musicas_Hot.pdf", "url": "https://docs.google.com/document/d/1Y09lFb_VkCmvoOZpwf_vfCJcHBI_doR-AOrWlupp650/export?format=pdf"}
        ]
    },
    {
        "folder": "07_Avisos_Importantes",
        "files": [
            {"name": "Aviso_Importante.mp4", "url": "https://drive.google.com/file/d/1VpEEEmfe_N5FU0Uyua-Gu7KT1ZoCCgDV/view?usp=sharing"},
            {"name": "Outros_Cursos.mp4", "url": "https://drive.google.com/file/d/1kSsBLgBpCRpoJjVj2LR4mO-2VMs0r90b/view?usp=sharing"}
        ]
    }
]

print("Starting download of all 15 deliverables...")

for mod in modules:
    mod_path = os.path.join(base_dir, mod["folder"])
    os.makedirs(mod_path, exist_ok=True)
    for f in mod["files"]:
        out_file = os.path.join(mod_path, f["name"])
        print(f"--> Downloading: {mod['folder']}/{f['name']}")
        try:
            if "docs.google.com" in f["url"]:
                # Google Doc export
                import urllib.request
                urllib.request.urlretrieve(f["url"], out_file)
                print(f"    Downloaded Doc: {f['name']}")
            else:
                # Google Drive File
                file_id = f["url"].split("/d/")[1].split("/")[0]
                direct_url = f"https://drive.google.com/uc?id={file_id}"
                gdown.download(direct_url, out_file, quiet=False, fuzzy=True)
                print(f"    Downloaded: {f['name']}")
        except Exception as e:
            print(f"    Error downloading {f['name']}: {e}")

print("All downloads completed!")
