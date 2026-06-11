#!/usr/bin/env python3
"""Convert proof screenshots to web-friendly WebP files without distorting them.

Usage:
  python scripts/optimize-proof-assets.py path/to/image.png public/proofs/project/output.webp
"""
from pathlib import Path
import sys
from PIL import Image, ImageOps

MAX_WIDTH = 2200
QUALITY = 86

if len(sys.argv) != 3:
    raise SystemExit('Usage: python scripts/optimize-proof-assets.py INPUT_IMAGE OUTPUT.webp')

source = Path(sys.argv[1])
target = Path(sys.argv[2])
if not source.exists():
    raise SystemExit(f'Input file not found: {source}')
if target.suffix.lower() != '.webp':
    raise SystemExit('Output filename must end with .webp')

target.parent.mkdir(parents=True, exist_ok=True)
with Image.open(source) as image:
    image = ImageOps.exif_transpose(image).convert('RGB')
    if image.width > MAX_WIDTH:
        height = round(image.height * MAX_WIDTH / image.width)
        image = image.resize((MAX_WIDTH, height), Image.Resampling.LANCZOS)
    image.save(target, 'WEBP', quality=QUALITY, method=6, optimize=True)
print(f'Optimised {source} -> {target} ({target.stat().st_size / 1024:.1f} KB)')
