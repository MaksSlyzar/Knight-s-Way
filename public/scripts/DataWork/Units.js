class Units{
    GlobalData = null;
    constructor() {
        $.getJSON( "../GlobalData/Units.json", function( data ) {
            this.GlobalData = data;
            console.log("Data taking succesfully");
            console.log("Taked object");
            console.log(this.GlobalData);
        });
    }
    getData(name) {
        return this.data[name];
    }
}