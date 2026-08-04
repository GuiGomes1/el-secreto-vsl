import os
import sys
import subprocess
import tempfile
import shutil

sys.path.append('/Users/guilhermegomes/Library/Python/3.9/lib/python/site-packages')
import imageio_ffmpeg

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
base_dir = "/Users/guilhermegomes/Documents/Oferta validada - Renda extra Typebot YT/gracias/conteudo_protocolo_nexo"

video_count = 0
trimmed_count = 0

print("Iniciando corte dos 5 segundos iniciais de todos os vídeos...")

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.lower().endswith(".mp4"):
            video_count += 1
            input_file = os.path.join(root, file)
            temp_file = os.path.join(root, f"temp_{file}")
            
            print(f"[{video_count}] Cortando 5s iniciais de: {os.path.relpath(input_file, base_dir)}")
            
            cmd = [
                ffmpeg_exe,
                "-y",
                "-ss", "5",
                "-i", input_file,
                "-c", "copy",
                temp_file
            ]
            
            res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            
            if res.returncode == 0 and os.path.exists(temp_file) and os.path.getsize(temp_file) > 0:
                os.replace(temp_file, input_file)
                trimmed_count += 1
                print(f"    --> Sucesso! {file} atualizado (tamanho: {os.path.getsize(input_file) / (1024*1024):.1f} MB)")
            else:
                print(f"    --> Erro ao cortar {file}: {res.stderr.decode('utf-8', errors='ignore')}")
                if os.path.exists(temp_file):
                    os.remove(temp_file)

print(f"\nConcluído! {trimmed_count} de {video_count} vídeos tiveram os 5s iniciais removidos com sucesso!")
