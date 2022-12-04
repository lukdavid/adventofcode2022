class Pair {
  spans: number[][];

  constructor(spans: number[][]) {
    this.spans = spans;
  }

  getLargestSpanIndex(): number {
    let maxSpanWidth = this.spans[0][1] - this.spans[0][0];
    let maxIndex = 0;
    for (let i = 1; i < this.spans.length; i++) {
      const spanWidth = this.spans[i][1] - this.spans[i][0];
      if (spanWidth > maxSpanWidth) {
        maxSpanWidth = spanWidth;
        maxIndex = i;
      }
    }
    return maxIndex;
  }

  getIsFullOverlap() {
    const largestSPanIndex = this.getLargestSpanIndex();
    const largestSpan = this.spans[largestSPanIndex];
    const otherSpan = this.spans[1 - largestSPanIndex]; // 0 if 1, 1 if 0
    return largestSpan[0] <= otherSpan[0] && largestSpan[1] >= otherSpan[1];
  }

  getIsOverlap() {
    const [span1, span2] = this.spans;
    return (
      (span2[0] >= span1[0] && span2[0] <= span1[1]) ||
      (span2[1] >= span1[0] && span2[1] <= span1[1]) ||
      this.getIsFullOverlap()
    );
  }
}

export default Pair;
