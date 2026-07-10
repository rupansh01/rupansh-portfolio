import csv
import json

def process_candidates(csv_path):
    candidates = []
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for i, row in enumerate(reader):
            if i >= 10:  # Just take top 10 for UI performance
                break
            
            # Anonymize
            candidate = {
                "id": f"CAND-{1000 + i}",
                "pseudonym": f"Candidate {chr(65 + i)}",
                "score": row.get('CV Score', '0'),
                "status": row.get('Status', ''),
                "market": row.get('Market', ''),
                "role": row.get('CurrentRole', ''),
                "languages": row.get('Languages', ''),
                "jobRoleName": row.get('Job Role Name', ''),
                "jobVariant": row.get('Job Variant', ''),
                "processingStatus": row.get('Processing_Status', ''),
                "extractedLength": row.get('Extracted_Length', ''),
                "cvInterview": row.get('CV Interview', ''),
                "hnwiProximity": row.get('HNWIProximityBasis', ''),
                "topQualities": [
                    row.get('CV Top Quality #1', ''),
                    row.get('CV Top Quality #2', ''),
                    row.get('CV Top Quality #3', '')
                ],
                "concerns": [
                    row.get('CV Concern #1', ''),
                    row.get('CV Concern #2', ''),
                    row.get('CV Concern #3', '')
                ],
                "assessment": row.get('CV Overall Assessment', '')
            }
            
            # Filter out empties from lists
            candidate["topQualities"] = [q for q in candidate["topQualities"] if q and len(q) > 5]
            candidate["concerns"] = [c for c in candidate["concerns"] if c and len(c) > 5]
            
            candidates.append(candidate)
    return candidates

def process_market(csv_path):
    markets = []
    with open(csv_path, 'r', encoding='utf-8') as f:
        # read lines, skip first two lines (one is header, one might be empty)
        lines = f.readlines()
        # Find header
        header_idx = 0
        for i, line in enumerate(lines):
            if line.startswith("Market,Job Role"):
                header_idx = i
                break
                
        reader = csv.DictReader(lines[header_idx:])
        for row in reader:
            if not row.get('Market') or row.get('Market') == '---':
                continue
                
            markets.append({
                "market": row.get('Market', ''),
                "total": int(row.get('Total Applications', 0) or 0),
                "screened": int(row.get('CVs Screened', 0) or 0),
                "strong": int(row.get('Strong CVs (4+5)', 0) or 0),
                "avgScore": float(row.get('Avg CV Score', 0) or 0)
            })
    return markets

cands = process_candidates("/Users/rupansh/Downloads/portfolio/new_RM_Passbeyond_sheet_2026 - new_Candidates_Master.csv")
marks = process_market("/Users/rupansh/Downloads/portfolio/marketAnalyticstab.csv")

output = f"""// AUTO-GENERATED ANONYMIZED DATA
export const candidatesData = {json.dumps(cands, indent=2)};

export const marketData = {json.dumps(marks, indent=2)};
"""

with open("/Users/rupansh/Downloads/portfolio/rupansh-portfolio/content/projects/data/recruitment-data.ts", "w", encoding='utf-8') as f:
    f.write(output)

print("Data generated successfully!")
