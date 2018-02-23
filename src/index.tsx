import cssColors from 'css-color-names';

function isValidRgbVal(magnitudeString: string): boolean {
  const magnitude: number = Number.parseFloat(magnitudeString);
  return magnitude >= 0 && magnitude <= 255;
}

function isValidRgbValues(...values: string[]): boolean {
  for(const value of values) {
    if (!isValidRgbVal(value)) {
      return false;
    }
  }
  return true;
}

function isValidAlphaValue(magnitudeString: string): boolean {
  const magnitude: number = Number.parseFloat(magnitudeString);
  return magnitude <= 1 && magnitude >= 0;
}

export function isHexColor(value: string): boolean {
  return value.match(/^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i) !== null;
}

export function isValidPercentage(magnitudeString: string): boolean {
  const magnitude: number = Number.parseFloat(magnitudeString);
  return magnitude >= 0 && magnitude <= 100;
}

export function isValidHue(valueString: string): boolean {
  const value: number = Number.parseFloat(valueString);
  return value >= 0 && value <= 360;
}

export function isRgbColor(value: string) {
  const rgbMatches: RegExpMatchArray = value.match(/^rgb\s*\(\s*(\d+|\d*\.\d+)\s*,\s*(\d+|\d*\.\d+)\s*,\s*(\d+|\d*\.\d+)\s*\)$/);
  if (rgbMatches && rgbMatches.length >= 4) {
    const [rgb, r, g, b] = rgbMatches;
    if (isValidRgbValues(r, g, b)) {
      return true;
    }
  }
  return false;
}

export function isRgbaColor(value: string) {
  const rgbaMatches: RegExpMatchArray | null = value.match(/^rgba\s*\(\s*(\d+|\d*\.\d+)\s*,\s*(\d+|\d*\.\d+)\s*,\s*(\d+|\d*\.\d+)\s*,\s*(\d+|\d*\.\d+)\s*\)$/);
  if (rgbaMatches && rgbaMatches.length >= 5) {
    const [rgb, r, g, b, a] = rgbaMatches;
    if (isValidRgbValues(r, g, b) && isValidAlphaValue(a)) {
      return true;
    }
  }
  return false;
}

export function isHslColor(value: string): boolean {
  const hslMatches: RegExpMatchArray | null = value.match(/^hsl\s*\(\s*(\d+|\d*\.\d+)\s*,\s*(\d+|\d*\.\d+)%\s*,\s*(\d+|\d*\.\d+)%\s*\)$/);
  if (hslMatches && hslMatches.length >= 4) {
    const [hsl, h, s, l] = hslMatches;
    if (isValidHue(h) && isValidPercentage(s) && isValidPercentage(l)) {
      return true;
    }
  }
  return false;
}

export function isHslaColor(value: string): boolean {
  const hslaMatches: RegExpMatchArray | null = value.match(/^hsla\s*\(\s*(\d+|\d*\.\d+)\s*,\s*(\d+|\d*\.\d+)%\s*,\s*(\d+|\d*\.\d+)%\s*,\s*(\d+|\d*\.\d+)\s*\)$/);
  if (hslaMatches && hslaMatches.length >= 5) {
    const [hsl, h, s, l, a] = hslaMatches;
    if (isValidHue(h) && isValidPercentage(s) && isValidPercentage(l) && isValidAlphaValue(a)) {
      return true;
    }
  }
  return false;
}

export function isColor(value: string) {
  if (isHexColor(value)) {
    return 'hex';
  }
}
