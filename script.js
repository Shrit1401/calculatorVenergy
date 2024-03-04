function Calc_1() {
  var NMA_1 = parseFloat(document.getElementById("NMA_1").value);
  var LeaseRoyalty_1 = parseFloat(
    document.getElementById("LeaseRoyalty_1").value
  );
  var Result_1 = ((NMA_1 * LeaseRoyalty_1) / 100 / 0.125).toFixed(8);
  document.getElementById("Result_1").value = Result_1;
}

function Calc_2() {
  var NRA_2 = parseFloat(document.getElementById("NRA_2").value);
  var LeaseRoyalty_2 = parseFloat(
    document.getElementById("LeaseRoyalty_2").value
  );
  var NMA = (((NRA_2 * 0.125) / LeaseRoyalty_2) * 100).toFixed(8);
  document.getElementById("Result_2").value = NMA;
}

function Calc_3() {
  var NMA_3 = parseFloat(document.getElementById("NMA_3").value);
  var UnitSize_3 = parseFloat(document.getElementById("UnitSize_3").value);
  var LeaseRoyalty_3 = parseFloat(
    document.getElementById("LeaseRoyalty_3").value
  );
  var Result_3 = ((NMA_3 / UnitSize_3) * (LeaseRoyalty_3 / 100)).toFixed(8);
  document.getElementById("Result_3").value = Result_3;
}

function Calc_4() {
  var DOI_4 = parseFloat(document.getElementById("DOI_4").value);
  var UnitSize_4 = parseFloat(document.getElementById("UnitSize_4").value);
  var LeaseRoyalty_4 = parseFloat(
    document.getElementById("LeaseRoyalty_4").value
  );
  var Result_4 = (((DOI_4 * UnitSize_4) / LeaseRoyalty_4) * 100).toFixed(8);
  document.getElementById("Result_4").value = Result_4;
}

function Calc_5() {
  var NRA_5 = parseFloat(document.getElementById("NRA_5").value);
  var Unit_Size_5 = parseFloat(document.getElementById("Unit_Size_5").value);
  var Result_5 = ((NRA_5 / Unit_Size_5) * 0.125).toFixed(8);
  document.getElementById("Result_5").value = Result_5;
}

function Calc_6() {
  var DOI_6 = parseFloat(document.getElementById("DOI_6").value);
  var Unit_Size_6 = parseFloat(document.getElementById("Unit_Size_6").value);
  var Result_6 = ((DOI_6 * Unit_Size_6) / 0.125).toFixed(8);
  document.getElementById("Result_6").value = Result_6;
}

function updateGlobals_1() {
  var NMA = parseFloat(document.getElementById("NMA_1").value);
  document.getElementById("NMA_1").value = NMA;
  console.log("Updating Globals");
}
