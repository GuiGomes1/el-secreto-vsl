import os
import sys
from PIL import Image, ImageDraw, ImageFont

output_dir = "/Users/guilhermegomes/Documents/Oferta validada - Renda extra Typebot YT/gracias/covers"
os.makedirs(output_dir, exist_ok=True)

# List of lessons for cover generation
lessons = [
    {
        "id": "cover_mod1_aula1.png",
        "mod": "MÓDULO 01",
        "title": "Boas-vindas & Introdução",
        "sub": "Protocolo Nexo - Comece Por Aqui",
        "badge": "HD 4K",
        "colors": [(6, 78, 59), (2, 44, 34), (16, 185, 129)]
    },
    {
        "id": "cover_mod2_aula1.png",
        "mod": "MÓDULO 02 • AULA 01",
        "title": "Os Fundamentos do Prazer",
        "sub": "Desvendando o Prazer Feminino",
        "badge": "AULA PRÁTICA",
        "colors": [(136, 19, 55), (76, 5, 25), (225, 29, 72)]
    },
    {
        "id": "cover_mod2_aula2.png",
        "mod": "MÓDULO 02 • AULA 02",
        "title": "Zonas de Sensibilidade",
        "sub": "Pontos Chave de Resposta Tátil",
        "badge": "AULA PRÁTICA",
        "colors": [(136, 19, 55), (76, 5, 25), (225, 29, 72)]
    },
    {
        "id": "cover_mod2_aula3.png",
        "mod": "MÓDULO 02 • AULA 03",
        "title": "Conexão Psicológica",
        "sub": "O Desejo Mental na Intensificação",
        "badge": "AULA PRÁTICA",
        "colors": [(136, 19, 55), (76, 5, 25), (225, 29, 72)]
    },
    {
        "id": "cover_mod2_aula4.png",
        "mod": "MÓDULO 02 • AULA 04",
        "title": "Ritmo e Progressão",
        "sub": "Manutenção da Tensão e Elevação",
        "badge": "AULA PRÁTICA",
        "colors": [(136, 19, 55), (76, 5, 25), (225, 29, 72)]
    },
    {
        "id": "cover_mod3_aula1.png",
        "mod": "MÓDULO 03 • AULA 01",
        "title": "Técnicas de Toque Inicial",
        "sub": "Da Teoria ao Toque",
        "badge": "MASTERCLASS",
        "colors": [(59, 7, 100), (30, 27, 75), (147, 51, 234)]
    },
    {
        "id": "cover_mod3_aula2.png",
        "mod": "MÓDULO 03 • AULA 02",
        "title": "Pressão e Variação Tátil",
        "sub": "Alternando Intensidade Fluida",
        "badge": "MASTERCLASS",
        "colors": [(59, 7, 100), (30, 27, 75), (147, 51, 234)]
    },
    {
        "id": "cover_mod3_aula3.png",
        "mod": "MÓDULO 03 • AULA 03",
        "title": "Estimulação Completa",
        "sub": "Passo a Passo Demonstrativo",
        "badge": "MASTERCLASS 4K",
        "colors": [(59, 7, 100), (30, 27, 75), (147, 51, 234)]
    },
    {
        "id": "cover_mod3_aula4.png",
        "mod": "MÓDULO 03 • AULA 04",
        "title": "Mantendo o Clímax",
        "sub": "Consolidação e Prolongamento",
        "badge": "AVANÇADO",
        "colors": [(59, 7, 100), (30, 27, 75), (147, 51, 234)]
    },
    {
        "id": "cover_mod3_aula5.png",
        "mod": "MÓDULO 03 • AULA 05",
        "title": "Finalização & Relaxamento",
        "sub": "O Toque Pós-Clímax",
        "badge": "MASTERCLASS",
        "colors": [(59, 7, 100), (30, 27, 75), (147, 51, 234)]
    },
    {
        "id": "cover_mod4_bonus.png",
        "mod": "MÓDULO 04 • BÔNUS VIP",
        "title": "Segredos Complementares",
        "sub": "Técnicas Especiais VIP",
        "badge": "BÔNUS EXCLUSIVO",
        "colors": [(120, 53, 15), (69, 26, 3), (245, 158, 11)]
    },
    {
        "id": "cover_mod5_encerramento.png",
        "mod": "MÓDULO 05 • FINAL",
        "title": "Encerramento do Curso",
        "sub": "Considerações e Guia Prático",
        "badge": "CONCLUÍDO",
        "colors": [(30, 58, 138), (15, 23, 42), (59, 130, 246)]
    },
    {
        "id": "cover_mod6_playlist.png",
        "mod": "RECURSO EXCLUSIVO",
        "title": "Playlist de Músicas Hot",
        "sub": "Ambiente Sonoro Perfeito (PDF)",
        "badge": "E-BOOK PDF",
        "colors": [(131, 24, 67), (80, 7, 36), (236, 72, 153)]
    }
]

# Load default font or fallback
try:
    font_large = ImageFont.truetype("/System/Library/Fonts/HelveticaNeue.ttc", 56)
    font_sub = ImageFont.truetype("/System/Library/Fonts/HelveticaNeue.ttc", 28)
    font_badge = ImageFont.truetype("/System/Library/Fonts/HelveticaNeue.ttc", 22)
except:
    font_large = font_sub = font_badge = ImageFont.load_default()

width, height = 1280, 720

for item in lessons:
    # Create gradient background
    img = Image.new("RGB", (width, height), item["colors"][1])
    draw = ImageDraw.Draw(img)
    
    # Linear gradient simulation
    for y in range(height):
        r = int(item["colors"][0][0] + (item["colors"][1][0] - item["colors"][0][0]) * (y / height))
        g = int(item["colors"][0][1] + (item["colors"][1][1] - item["colors"][0][1]) * (y / height))
        b = int(item["colors"][0][2] + (item["colors"][1][2] - item["colors"][0][2]) * (y / height))
        draw.line([(0, y), (width, y)], fill=(r, g, b))
        
    # Draw glowing accent circle
    accent = item["colors"][2]
    draw.ellipse([800, -100, 1400, 500], fill=(accent[0], accent[1], accent[2]))
    
    # Dark Overlay box for text readability
    draw.rectangle([60, 60, width - 60, height - 60], outline=(255, 255, 255, 30), width=2)
    
    # Draw Module Tag
    draw.text((100, 120), item["mod"].upper(), font=font_badge, fill=accent)
    
    # Draw Title
    draw.text((100, 180), item["title"], font=font_large, fill=(255, 255, 255))
    
    # Draw Subtitle
    draw.text((100, 260), item["sub"], font=font_sub, fill=(200, 200, 220))
    
    # Draw Badge Box
    badge_text = item["badge"]
    draw.rectangle([100, 560, 320, 620], fill=accent)
    draw.text((120, 575), badge_text, font=font_badge, fill=(255, 255, 255))
    
    # Save Image
    out_path = os.path.join(output_dir, item["id"])
    img.save(out_path, "PNG")
    print(f"Generated custom cover: {item['id']}")

print("All custom covers generated successfully!")
