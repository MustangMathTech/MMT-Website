import csv
import json
import os

CSV_FILE = "src/lib/jsons/Members26.csv"
JSON_FILE = "src/lib/jsons/Members26.json"
SERIOUS_FOLDER = "static/about-us-images/serious"
SILLY_FOLDER = "static/about-us-images/silly"

def get_col(row, col_name):
    return row.get(col_name, "").strip()

def find_image(folder, first_name, last_name):
    first_lower = first_name.lower()
    last_lower = last_name.lower()
    for file in os.listdir(folder):
        file_lower = file.lower().replace(" ", "").replace("-", "")
        if first_lower in file_lower and last_lower in file_lower:
            return file
    return ""

members = []

with open(CSV_FILE, newline="", encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile)
    # identify the actual CSV header keys for the last two questions (flexible search)
    sample_headers = reader.fieldnames or []
    team_colname = None
    region_colname = None
    for h in sample_headers:
        key = h.lower()
        if "team you lead" in key:
            team_colname = h
        if "region you lead" in key:
            region_colname = h

    for row in reader:
        full_name = get_col(row, "What's your Full Name?")
        first_name = get_col(row, "What's your Preferred First Name?")
        last_name = get_col(row, "What's your Preferred Last Name?")
        email = get_col(row, "Email Address")
        discord_username = get_col(row, "What's your Discord Username")
        discord_id = get_col(row, "What's your Discord ID (18 digit user ID)")
        bio = get_col(row, "Put your bio below.")
        teams = get_col(row, "Which teams are you part of? Check all that apply.")
        teams_lower = teams.lower()

        # Read leader columns (if they exist)
        team_lead_val = get_col(row, team_colname) if team_colname else ""
        region_lead_val = get_col(row, region_colname) if region_colname else ""

        # prefer team lead if filled, otherwise region lead
        if team_lead_val:
            orgrole_value = team_lead_val
        elif region_lead_val:
            orgrole_value = region_lead_val
        else:
            orgrole_value = ""

        org = True
        pw = "problem writing" in teams_lower
        t = "tech" in teams_lower
        d = "design" in teams_lower
        td = "tournament development" in teams_lower
        cd = "curriculum development" in teams_lower
        be = "business engagement" in teams_lower or "business + engagement" in teams_lower
        vp = "video production" in teams_lower

        member = {
            "email": email,
            "displayname": full_name,
            "first": first_name,
            "last": last_name,
            "org": org,
            "pw": pw,
            "t": t,
            "d": d,
            "td": td,
            "cd": cd,
            "be": be,
            "vp": vp,
            "discordid": discord_id,
            "discordusername": discord_username,
            "discordroles": "",
            # --- new field added below ---
            "orgrole": orgrole_value,
            # ------------------------------
            "orgpriority": "5",
            "pwpriority": "2" if pw else "5",
            "tpriority": "2" if t else "5",
            "dpriority": "2" if d else "5",
            "tdpriority": "2" if td else "5",
            "cdpriority": "2" if cd else "5",
            "bepriority": "2" if be else "5",
            "vppriority": "2" if vp else "5",
            "pic1path": find_image(SERIOUS_FOLDER, first_name, last_name),
            "pic2path": find_image(SILLY_FOLDER, first_name, last_name),
            "bio": bio
        }

        members.append(member)

with open(JSON_FILE, "w", encoding="utf-8") as f:
    json.dump(members, f, indent=4, ensure_ascii=False)

print(f"{len(members)} members written to {JSON_FILE}")