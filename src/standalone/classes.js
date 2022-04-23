class egCharacter {
    constructor(welt = 7, volk = 0, klasse = 0) {
        this.welt = welt;
        this.volk = volk;
        this.klasse = klasse;
        this.level = 1;
        this.staerke = 5;
        this.geschicklichkeit = 5;
        this.konstitution = 5;
        this.intelligenz = 5;
        this.inventar = {};
        this.ausruestung = {'Kopf': false,
                            'Torso': false,
                            'Haende': false,
                            'Beine': false,
                            'Fuesse': false,
                            'Hand1': false,
                            'Hand2': false,
                            'Fernwaffe': false,
                            'Munition1': false,
                            'Munition2': false,
                            'Munition3': false,
                            'Bandagen': false};
    }
    
    erfahrungLevel(l) {
        if (this.welt == 6) return 50 * (l +1) * (l +2) -100; //Zyr
        return 500 * ((l -1) **2 + l -1);
    }
    
    itemGeben(i, c=1) {
        return (this.inventar[i] = (this.inventar[i] ?? 0) + 1);
    }
    itemNehmen(i, c=1) {
        if (0 >= (this.inventar[i] = (this.inventar[i] ?? 0) - 1)) delete this.inventar[i];
        return (this.inventar[i] ?? 0)
    }
    
    itemAnziehen(i) {
        this.ausruestung['Kopf'] = i;
        this.itemNahmen(i);
    }
    itemAusziehen(i) {
        this.ausrüstung['Kopf'] = false;
        this.itemGeben(i);
    }
    
    get lernfaktoren()         {return [];} //Unbekannt *
    
    get lebenspunkte()         {return 0;} //Unbekannt *
    
    get erfahrung()            {return this.erfahrungLevel(this.level);}
    get erfahrungLevelUp()     {return this.erfahrungLevel(this.level + 1);}
    get freieAttributspunkte() {return (5 * this.level + 45) - (this.staerke + this.geschicklichkeit + this.konstitution + this.intelligenz);}
                                
    get traglast()             {return 0;} //Inventar-Summe *
    get traglastMax()          {return 100 + 2 * this.staerke;}
    
    get ruestungsschutzNK()    {return 0;} //Inventar-Summe *
    get ruestungsschutzFK()    {return 0;} //Inventar-Summe *
    get absorb()               {return 0;} //Inventar-Summe *
    
    get ausweichen()           {if (this.welt == 7) return 2 * Math.log10(this.geschicklichkeit ** 4) + Math.sqrt(this.geschicklichkeit) - 1.2; //Annäherung *
                                return 4 + 0,2 * this.geschicklichkeit;}
        ausweichenNK()         {return this.ausweichen;} //Behinderung einrechnen *
        ausweichenFK()         {return this.ausweichen;} //Behinderung einrechnen *
        
    get parieren()             {return 0;} //Unbekannt *
    get blocken()              {return 0;} //Unbekannt *
    
    get behinderung()          {return 0;} //Inventar-Summe *
    get behinderungNK()        {return this.behinderung;} //Unbekannt *
    get BehinderungFK()        {return this.behinderung;} //Unbekannt *
    
    get waffenwechselNK()      {return 0;} //Inventar *
    get waffenwechselFK()      {return 0;} //Inventar *
    
    get schadenMinNK()         {return 0;} //Inventar *
    get schadenMaxNK()         {return 0;} //Inventar *
    get schadenMinFK()         {return 0;} //Inventar *
    get schadenMaxFK()         {return 0;} //Inventar *
    
    get abklingzeit()          {return 0;} //Inventar *
    
    get geschwindigkeitNK()    {return 0;} //Inventar *
    get geschwindigkeitFK()    {return 0;} //Inventar *
    
    get treffsicherheitNK()    {return 0;} //Inventar *
    get treffsicherheitFK()    {return 0;} //Inventar *
    
    get kritischeTrefferNK()   {return 0;} //Unbekannt *
    get kritischeTrefferFK()   {return 0;} //Unbekannt *
    
    get heilungAbsolutMin()    {return 0;} //Inventar *
    get heilungAbsolutMax()    {return 0;} //Inventar *
    get heilungRelativMin()    {return 0;} //Inventar *
    get heilungRelativMax()    {return 0;} //Inventar *
};
