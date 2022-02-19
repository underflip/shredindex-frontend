function flickityOptions(items) {
  return (
    {
      initialIndex: 2,
      wrapAround: true,
      prevNextButtons: items.length > 1,
      pageDots: items.length > 1,
      fullscreen: true,
      selectedAttraction: 0.2,
      friction: 0.8,
      arrowShape: {
        x0: 20,
        x1: 50,
        y1: 40,
        x2: 70,
        y2: 40,
        x3: 40,
      },
    }
  );
}

export default flickityOptions;
