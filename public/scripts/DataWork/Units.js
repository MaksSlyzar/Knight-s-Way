class Units{
    GlobalData = null;
    constructor() {
        var LocalData = null;
        $.ajax({
            url: '../GlobalData/Units.json',
            async: false,
            dataType: 'json',
            success: function (response) {
              LocalData = response;
            }
        });
        this.GlobalData = LocalData;
    }
    getData(name) {
        return this.GlobalData[name];
    }
}