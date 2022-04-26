var char = new egCharacter();

setInterval(function() {
    //Read Input
    char.welt = inp_world.value;
    char.volk = inp_race.value;
    char.klasse = inp_class.value;
    char.level = inp_level.value;
    //Correct Stats:
    var minAttribut = char.minEigenschaften;
    if (char.staerke < minAttribut[0])          char.staerke = minAttribut[0];
    if (char.geschicklichkeit < minAttribut[1]) char.geschicklichkeit = minAttribut[1];
    if (char.konstitution < minAttribut[2])     char.konstitution = minAttribut[2];
    if (char.intelligenz < minAttribut[3])      char.intelligenz = minAttribut[3];
    if (char.freieAttributspunkte < 0) {
        var avg = (char.staerke  + char.geschicklichkeit + char.konstitution + char.intelligenz - minAttribut[0] - minAttribut[1] - minAttribut[2] - minAttribut[3]) / 4;
        if ((char.staerke > minAttribut[0]) && (char.staerke - minAttribut[0] > avg))                   char.staerke--;
        if ((char.geschicklichkeit > minAttribut[1]) && (char.geschicklichkeit - minAttribut[1] > avg)) char.geschicklichkeit--;
        if ((char.konstitution > minAttribut[2]) && (char.konstitution - minAttribut[2] > avg))         char.konstitution--;
        if ((char.intelligenz > minAttribut[3]) && (char.intelligenz - minAttribut[3] > avg))           char.intelligenz--;
    }
    //Set Fields
    var e = document.getElementById("sec_class");
    if ((char.welt >= ZYRTANIA) && e.classList.contains('hidden')) {
        e.classList.remove("hidden");
    } else if ((char.welt < ZYRTANIA) && !e.classList.contains('hidden')) {
        e.classList.add("hidden");
    }
    var e = document.getElementById("btn_strength_sub");
    if ((char.staerke > minAttribut[0]) && e.disabled) {
        e.disabled = false;
    } else if ((char.staerke <= minAttribut[0]) && !e.disabled) {
        e.disabled = true;
    }
    var e = document.getElementById("btn_dexterity_sub");
    if ((char.geschicklichkeit > minAttribut[1]) && e.disabled) {
        e.disabled = false;
    } else if ((char.geschicklichkeit <= minAttribut[1]) && !e.disabled) {
        e.disabled = true;
    }
    var e = document.getElementById("btn_constitution_sub");
    if ((char.konstitution > minAttribut[2]) && e.disabled) {
        e.disabled = false;
    } else if ((char.konstitution <= minAttribut[2]) && !e.disabled) {
        e.disabled = true;
    }
    var e = document.getElementById("btn_intelligence_sub");
    if ((char.intelligenz > minAttribut[3]) && e.disabled) {
        e.disabled = false;
    } else if ((char.intelligenz <= minAttribut[3]) && !e.disabled) {
        e.disabled = true;
    }
    //Write Output
    var output = document.getElementsByTagName("output");
    for (i=0; i<output.length; i++) {
        switch (output[i].name) {
            case "out_strength":        output[i].innerHTML = char.staerke; break;
            case "out_dexterity":       output[i].innerHTML = char.geschicklichkeit; break;
            case "out_constitution":    output[i].innerHTML = char.konstitution; break;
            case "out_intelligence":    output[i].innerHTML = char.intelligenz; break;
            case "out_unset":           output[i].innerHTML = char.freieAttributspunkte; break;
            case "out_weight_max":      output[i].innerHTML = number(char.traglastMax, 3); break;
            case "out_weight_sum":      output[i].innerHTML = number(char.traglast, 3); break;
        
            case "out_melee_defence":   output[i].innerHTML = number(char.ruestungsschutzNK, 1); break;
            case "out_melee_absorb":    output[i].innerHTML = number(char.absorb, 1); break;
            case "out_melee_evade":     output[i].innerHTML = number(char.ausweichenNK, 1); break;
            case "out_melee_block":     output[i].innerHTML = number(char.blocken, 2); break;
            case "out_melee_black_effect": output[i].innerHTML = char.blockschutz; break;
            case "out_melee_handicap":  output[i].innerHTML = (char.behinderungNK)?char.behinderungNK+' %':'keine'; break;
            case "out_melee_switch":    output[i].innerHTML = char.waffenwechselNK; break;
        
      }
    }
  }, 250);

function number(v, d) {
    var s = Math.floor(v);
    if (d > 0) {
        s+= ".";
        s+= (((v * 10**d) % (10**d)).toString() + "0".repeat(d)).substr(0, d);
    }
    return s;
}

//Events:
function reset() {}
function addStrength()      {if (char.freieAttributspunkte > 0)                     char.staerke+=1;}
function subStrength()      {if (char.staerke > char.minEigenschaften[0])           char.staerke-=1;}
function addDexterity()     {if (char.freieAttributspunkte > 0)                     char.geschicklichkeit+=1;}
function subDexterity()     {if (char.geschicklichkeit > char.minEigenschaften[1])  char.geschicklichkeit-=1;}
function addConstitution()  {if (char.freieAttributspunkte > 0)                     char.konstitution+=1;}
function subConstitution()  {if (char.konstitution > char.minEigenschaften[2])      char.konstitution-=1;}
function addIntelligence()  {if (char.freieAttributspunkte > 0)                     char.intelligenz+=1;}
function subIntelligence()  {if (char.intelligenz > char.minEigenschaften[3])       char.intelligenz-=1;}
