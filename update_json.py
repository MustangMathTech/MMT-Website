import json
import os

input_path = "src/lib/jsons/Members25.json"
output_path = input_path 

with open(input_path, "r", encoding="utf-8") as f:
    data = json.load(f)

for member in data:
    for key in ["pic1path", "pic2path"]:
        path = member.get(key)
        if path:
            base, ext = os.path.splitext(path)
            new_path = base + ".webp"  
            member[key] = new_path.replace("\\", "/")  
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4)
print("Success")
