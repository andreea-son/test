const Drepturi=require('./drepturi.js');

class Rol{
    static get tip() {return "generic"}
    static get drepturi() {return []}
    constructor (){
        this.cod=this.constructor.tip;
    }

    areDreptul(drept){
        return this.constructor.drepturi.includes(drept);
    }
}

class RolAdmin extends Rol{
    static get tip() {return "admin"}
    static get drepturi() { return [
        Drepturi.vizualizareUtilizatori,
        Drepturi.stergereUtilizatori,
        Drepturi.vizualizareGrafice,
        Drepturi.stergereProduse,
        Drepturi.adaugareProduse,
        Drepturi.modificareProduse
    ] }
    constructor (){
        super();
    }
}

class RolModerator extends Rol{
    static get tip() {return "moderator"}
    static get drepturi() { return [
        Drepturi.vizualizareUtilizatori,
        Drepturi.stergereUtilizatori
    ] }
    constructor (){
        super()
    }
}

class RolClient extends Rol{
    static get tip() {return "comun"}
    static get drepturi() { return [
        Drepturi.cumparareProduse
    ] }
    constructor (){
        super()
    }
}

class RolFactory{
    static creeazaRol(tip) {
        switch(tip){
            case RolAdmin.tip : return new RolAdmin();
            case RolModerator.tip : return new RolModerator();
            case RolClient.tip : return new RolClient();
        }
    }
}
module.exports={
    RolFactory:RolFactory,
    RolAdmin:RolAdmin
}