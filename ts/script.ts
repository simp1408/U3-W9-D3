
//ESERCIZIO SULLE TASSE
//-------------------------------

// abstract class Dati{
//    constructor(
//     protected nome:string,
//     protected cognome:string,
//     protected condredd:number=0,
//     protected redditoannuolordo:number=0,
//     protected tasseInps:number=0.24,
//     protected tasseIrpef:number=0.23,
//     )
//     {
//         this.nome = nome;
//         this.cognome = cognome;
//         this.condredd = condredd;
//         this.redditoannuolordo = redditoannuolordo;
//         this.tasseInps = tasseInps;
//         this.tasseIrpef = tasseIrpef
//     }
        
//     getTasseInps(){
//        return this.redditoannuolordo*this.tasseInps;
//     }
    
//     getTasseIrpef(){
//        return this.redditoannuolordo*this.tasseIrpef;  
//     }

// }

// class Utente1 extends Dati{

//   constructor(

//         nome:string,
//         cognome:string,
//         condredd:number = 0,
//         redditoannuolordo:number = 15000,
//         tasseInps:number = 0.24,
//         tasseIrpef:number = 0.23,

//   ){
//     super(nome,cognome,condredd,redditoannuolordo,tasseInps,tasseIrpef)
//     }
   
//             getUtileTasse(){
//                     return this.getTasseInps()+this.getTasseIrpef();
//                     }
                
//                 getTasseInps(){
//                 return this.redditoannuolordo*this.tasseInps;
//                 }
                
//                 getTasseIrpef(){
//                 return this.redditoannuolordo*this.tasseIrpef;
//                 }
                
//                 getRedditoAnnuoNetto(){
//             return this.redditoannuolordo-=this.getUtileTasse();
           
           
//         }


// }
// let utente= new Utente1("Simone","Ponzani");
// console.log(utente);
// console.log("utente1 : " + utente.getTasseInps());
// console.log("utente1 : " +  utente.getTasseIrpef());
// console.log("reddito anno netto dell' utente1 : " +utente.getRedditoAnnuoNetto());

//ESERCIZIO PROF

abstract class LavoratoriAutonomi{

    protected codredd:number;
    protected reddtitoannuolordo:number;
    protected tasseinps:number;
    protected tasseirpef:number;

    constructor(codredd:number,redditoannuolordo:number,tasseinps:number,tasseirpef:number){
        this.codredd=codredd;
        this.reddtitoannuolordo=redditoannuolordo;
        this.tasseinps=tasseinps;
        this.tasseirpef=tasseirpef;
    }

    public  abstract getUtileTasse():number
    public  abstract getUTasseInps():number
    public  abstract getUtileIrpef():number
    
}


abstract class Programmatore extends LavoratoriAutonomi{
    public abstract getRedditoAnnuoNetto():number
}



class FrontEndDev extends Programmatore{
    
    constructor(codredd:number,redditoannuolordo:number,tasseinps:number,tasseirpef:number){
       
        super(codredd,redditoannuolordo,tasseinps,tasseirpef)
    }

    public getRedditoAnnuoLordo():number{
        return this.reddtitoannuolordo;

    }

    public  getUtileTasse():number{
        return this.reddtitoannuolordo*this.codredd/100;

    }
    public   getUTasseInps():number{
        return this.getUtileTasse()*this.tasseinps/100;

    }
    public getUtileIrpef():number{
        return this.getUtileTasse()*this.tasseirpef/100;

    }
    public getRedditoAnnuoNetto():number{
        return this.reddtitoannuolordo-this.getUTasseInps()-this.getUtileIrpef()
    }

    

}

let mario= new FrontEndDev(40,45000,26,23);
console.log("reditto annuo loro:" + mario.getRedditoAnnuoLordo());
console.log("tasse Inps" + mario.getUTasseInps());
console.log("tasse Irpef" + mario.getUTasseInps());
console.log("tass Irpef:" + mario.getUtileIrpef());
console.log("reditto annuo netto:" + mario.getRedditoAnnuoNetto());


