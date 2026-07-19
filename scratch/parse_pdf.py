import sys

def extract_text(pdf_path):
    try:
        import pypdf
    except ImportError:
        print("pypdf is not installed. Installing it via pip...")
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
        import pypdf
        
    reader = pypdf.PdfReader(pdf_path)
    print(f"Total pages: {len(reader.pages)}")
    
    full_text = ""
    for i, page in enumerate(reader.pages):
        text = page.extract_text()
        print(f"\n--- PAGE {i+1} ---")
        print(text[:500] + "...") # print snippet
        full_text += text + "\n"
        
    # Save text to a file for review
    with open("scratch/resume_text.txt", "w", encoding="utf-8") as f:
        f.write(full_text)
    print("\nSuccessfully extracted all text to scratch/resume_text.txt")

if __name__ == "__main__":
    pdf_path = "public/resume.pdf"
    extract_text(pdf_path)
