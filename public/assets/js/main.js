/**
 * Created by Administrator on 2016/5/30.
 */
requirejs.config({
    paths :　{
        knockout : 'knockout-3.4.0' ,
        jquery : 'jquery-2.2.4.min' ,
    }
});

require(["jquery","knockout"],function ($,ko) {
    function TestKoBind()
    {
        var self = this;
        self.textKoBind = ko.observable();
    }

    var testJoBind = new TestKoBind();
    ko.applyBindings(testJoBind);
});