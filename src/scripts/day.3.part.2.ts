export function day3Part2(input: string): number {
  const mulRegex = /mul\((\d+),(\d+)\)/g;
  const doRegex = /do\(\)/g;
  const dontRegex = /don't\(\)/g;

  let isMulEnabled = true;
  let result = 0;

  const mulMatches = [...input.matchAll(mulRegex)];
  const doMatches = [...input.matchAll(doRegex)];
  const dontMatches = [...input.matchAll(dontRegex)];

  let mulIndex = 0;
  let doIndex = 0;
  let dontIndex = 0;

  while (mulIndex < mulMatches.length) {
    const mulMatch = mulMatches[mulIndex];
    const mulPosition = mulMatch.index!;

    // Check for do() or don't() before the current mul()
    while (
      (doIndex < doMatches.length && doMatches[doIndex].index! < mulPosition) ||
      (dontIndex < dontMatches.length &&
        dontMatches[dontIndex].index! < mulPosition)
    ) {
      if (
        dontIndex < dontMatches.length &&
        (doIndex >= doMatches.length ||
          dontMatches[dontIndex].index! < doMatches[doIndex].index!)
      ) {
        isMulEnabled = false;
        dontIndex++;
      } else {
        isMulEnabled = true;
        doIndex++;
      }
    }

    if (isMulEnabled) {
      const [, a, b] = mulMatch.map(Number);
      result += a * b;
    }

    mulIndex++;
  }

  return result;
}
