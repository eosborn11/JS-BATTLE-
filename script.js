function getAllInfo() {
  meterDetails();
  return (
    "Name:" +
    this.name +
    "\n" +
    "Title:" +
    this.title +
    "\n" +
    "Health:" +
    this.health +
    "\n"
  );
}

function meterDetails() {
  // Returns the Encouragement Level
  if (parseInt(this._health) < 50) {
    return "frowny face by meter" + "I'm feeling sad display in html";
  } else {
    return "happy face by meter" + "I'm feeling happy display in html";
  }
}
